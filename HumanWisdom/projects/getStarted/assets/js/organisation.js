(function () {
  "use strict";

  var org = window.__HW_ORG__ || {};
  var pages = window.__HW_ORG_PAGES__ || {};
  var assets = window.__HW_ORG_ASSETS__ || {};
  var apiBase = (window.__HW_API__ && window.__HW_API__.apiBase) || "https://www.humanwisdom.info/api";

  function qs(id) {
    return document.getElementById(id);
  }

  function showError(el, msg) {
    if (!el) return;
    el.textContent = msg || "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
  }

  function go(pageKey, extra) {
    var href = pages[pageKey];
    if (!href) return;
    if (extra) {
      var url = new URL(href, window.location.href);
      Object.keys(extra).forEach(function (k) {
        url.searchParams.set(k, extra[k]);
      });
      window.location.href = url.toString();
      return;
    }
    window.location.href = href;
  }

  function setupPasswordToggle(inputId, btnId) {
    var input = qs(inputId);
    var btn = qs(btnId);
    if (!input || !btn) return;
    btn.addEventListener("click", function () {
      var hide = input.type === "password";
      input.type = hide ? "text" : "password";
      var img = btn.querySelector("img") || btn;
      if (img && img.tagName === "IMG") {
        img.src = hide ? assets.eye_show : assets.eye;
      }
    });
  }

  function setupSignup() {
    var form = qs("org-signup-form");
    if (!form) return;

    var name = qs("org-name");
    var email = qs("org-email");
    var password = qs("org-password");
    var repeat = qs("org-repeat");
    var terms = qs("org-terms");
    var privacy = qs("org-privacy");
    var btn = qs("org-continue-btn");
    var err = qs("org-signup-error");

    setupPasswordToggle("org-password", "org-password-toggle");
    setupPasswordToggle("org-repeat", "org-repeat-toggle");

    function ready() {
      return (
        name.value.trim() &&
        isValidEmail(email.value) &&
        password.value.trim() &&
        password.value === repeat.value &&
        terms.checked &&
        privacy.checked
      );
    }

    function refresh() {
      if (email.value && !isValidEmail(email.value)) {
        showError(err, "Please enter a valid email address.");
      } else if (repeat.value && password.value !== repeat.value) {
        showError(err, "Passwords do not match.");
      } else {
        showError(err, "");
      }
      btn.disabled = !ready();
    }

    [name, email, password, repeat, terms, privacy].forEach(function (el) {
      el.addEventListener("input", refresh);
      el.addEventListener("change", refresh);
    });
    refresh();

    btn.addEventListener("click", function () {
      if (!ready()) return;
      btn.disabled = true;
      showError(err, "Creating your account…");

      var account = {
        FName: name.value.trim(),
        Lname: "",
        Email: email.value.trim(),
        Pwd: password.value,
        OrganizationId: org.id || getStoredOrganizationId(),
      };

      try {
        localStorage.setItem("hw_org_account", JSON.stringify(account));
        localStorage.setItem("email", account.Email);
        localStorage.setItem("pswd", account.Pwd);
        localStorage.setItem("name", account.FName);
        if (account.OrganizationId) {
          localStorage.setItem("OrganizationId", account.OrganizationId);
        }
      } catch (e) {}

      fetch(apiBase + "/AddLearner_Website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(account),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          var id = parseInt(result.data, 10);
          if (!isNaN(id)) {
            try {
              account.UserId = id;
              localStorage.setItem("hw_org_account", JSON.stringify(account));
              localStorage.setItem("userId", String(id));
            } catch (e) {}
            go("otp");
            return;
          }
          showError(err, typeof result.data === "string" ? result.data : "Could not create account.");
          btn.disabled = false;
        })
        .catch(function () {
          showError(err, "Internal Server Error");
          btn.disabled = false;
        });
    });
  }

  function getAccountEmailFromLocalStorage() {
    try {
      var account = JSON.parse(localStorage.getItem("hw_org_account") || "null");
      if (account && account.Email) return String(account.Email).trim();
      var email = localStorage.getItem("email");
      if (!email) return "";
      // login-signup sometimes stores JSON-quoted email
      if (email.charAt(0) === '"') {
        try {
          email = JSON.parse(email);
        } catch (e) {}
      }
      return String(email || "").trim();
    } catch (e) {
      return "";
    }
  }

  function clearCreateAccountLocalStorage() {
    [
      "hw_org_account",
      "hw_org_response",
      "hw_org_id",
      "OrganizationId",
      "email",
      "pswd",
      "password",
      "name",
      "userId",
    ].forEach(function (key) {
      try {
        localStorage.removeItem(key);
      } catch (e) {}
    });
  }

  function setupOtp() {
    var wrap = qs("org-otp");
    if (!wrap) return;
    var inputs = [].slice.call(wrap.querySelectorAll("input"));
    var emailEl = qs("org-otp-email");
    var err = qs("org-otp-error");
    var timerEl = qs("org-otp-timer");
    var resend = qs("org-resend");
    var back = qs("org-otp-back");
    var verifying = false;

    // Email for /verificationCode comes from localStorage only (no ?email= in URL)
    stripEmailQueryParam();
    var email = getAccountEmailFromLocalStorage();

    if (emailEl && email) {
      emailEl.textContent = email;
    }

    if (!email) {
      showError(err, "Missing account email. Please create your account again.");
    }

    var remaining = 30;
    var tick = setInterval(function () {
      remaining -= 1;
      if (remaining <= 0) {
        remaining = 0;
        clearInterval(tick);
      }
      if (timerEl) {
        timerEl.textContent = "(00:" + String(remaining).padStart(2, "0") + ")";
      }
    }, 1000);

    inputs.forEach(function (input, i) {
      input.addEventListener("input", function () {
        input.value = input.value.replace(/\D/g, "").slice(0, 1);
        if (input.value && inputs[i + 1]) inputs[i + 1].focus();
        maybeSubmit();
      });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !input.value && inputs[i - 1]) {
          inputs[i - 1].focus();
        }
      });
    });

    function code() {
      return inputs.map(function (el) {
        return el.value;
      }).join("");
    }

    function resetOtpInputs() {
      inputs.forEach(function (el) {
        el.value = "";
      });
      if (inputs[0]) inputs[0].focus();
      verifying = false;
    }

    // Same contract as adult-dashboard verifyCode(): POST /verificationCode { Email, VCode }
    function maybeSubmit() {
      if (verifying || code().length !== 6) return;
      if (!email) {
        showError(err, "Missing account email. Please create your account again.");
        resetOtpInputs();
        return;
      }

      verifying = true;
      showError(err, "Verifying…");

      fetch(apiBase + "/verificationCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: email,
          VCode: code(),
        }),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          // adult-dashboard: if (res > 0) …
          var ok =
            result.ok &&
            (result.data === true ||
              result.data > 0 ||
              parseInt(result.data, 10) > 0);
          if (!ok) throw new Error("verify");

          clearCreateAccountLocalStorage();
          go("success");
        })
        .catch(function () {
          showError(err, "That code did not match. Please try again.");
          resetOtpInputs();
        });
    }

    if (resend) {
      resend.addEventListener("click", function (e) {
        e.preventDefault();
        if (remaining > 0) return;
        remaining = 30;
        showError(err, "A new code is on its way.");
      });
    }
    if (back) {
      back.addEventListener("click", function (e) {
        e.preventDefault();
        go("signup");
      });
    }
  }

  function orgLogoUrl(logoUrl) {
    var fallback = (assets && assets.logo_default) || "";
    logoUrl = String(logoUrl || "").trim();
    if (!logoUrl) return fallback;
    if (/^https?:\/\//i.test(logoUrl)) return logoUrl;
    return "https://d1tenzemoxuh75.cloudfront.net/" + logoUrl.replace(/^\//, "");
  }

  function applyOrganization(row, id, rawResponse) {
    var freeDays = parseInt(row.FreeDays_Count, 10);
    if (!freeDays || freeDays < 1) freeDays = 7;
    var name = row.OrganizationName || "HappierMe";
    var logo = orgLogoUrl(row.LogoUrl);
    org.id = id;
    org.name = name;
    org.logo = logo;
    org.freeDays = freeDays;
    org.isActive = row.IsActive != null ? Number(row.IsActive) : 1;
    window.__HW_ORG__ = org;

    try {
      // Persist the API payload exactly as returned
      localStorage.setItem(
        "hw_org_response",
        JSON.stringify(rawResponse != null ? rawResponse : [row])
      );
      localStorage.setItem("hw_org_id", id);
      localStorage.setItem("OrganizationId", id);
    } catch (e) {}

    var logoImg = document.querySelector(".org-logo");
    if (logoImg) {
      logoImg.src = logo;
      logoImg.alt = name;
    }
    var logoLink = document.querySelector(".org-logo-link");
    if (logoLink) {
      logoLink.setAttribute("aria-label", name);
    }
    document.querySelectorAll("[data-org-free-days]").forEach(function (el) {
      el.textContent = String(freeDays);
    });
  }

  function stripQueryParams(keys) {
    try {
      var url = new URL(window.location.href);
      var changed = false;
      (keys || []).forEach(function (key) {
        if (url.searchParams.has(key)) {
          url.searchParams.delete(key);
          changed = true;
        }
      });
      if (!changed) return;
      var next = url.pathname + (url.search ? url.search : "") + url.hash;
      window.history.replaceState({}, "", next);
    } catch (e) {}
  }

  function stripIdQueryParam() {
    stripQueryParams(["id"]);
  }

  function stripEmailQueryParam() {
    stripQueryParams(["email"]);
  }

  function captureOrgIdFromUrl() {
    var id = new URLSearchParams(window.location.search).get("id");
    if (!id) return "";
    id = String(id).trim().replace(/[^a-zA-Z0-9_-]/g, "");
    if (!id) return "";
    try {
      localStorage.setItem("OrganizationId", id);
      localStorage.setItem("hw_org_id", id);
    } catch (e) {}
    stripIdQueryParam();
    return id;
  }

  /**
   * Call GET /api/GetOrganization/{OrganizationId} using localStorage only.
   * If the URL still has ?id=, it is saved once then removed from the address bar.
   */
  function setupGetOrganization() {
    captureOrgIdFromUrl();
    var id = getStoredOrganizationId();
    if (!id) return;

    fetch(apiBase + "/GetOrganization/" + encodeURIComponent(id), {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then(function (res) {
        if (!res.ok) throw new Error("GetOrganization failed");
        return res.json();
      })
      .then(function (data) {
        var row = Array.isArray(data) ? data[0] : data;
        if (!row || typeof row !== "object") throw new Error("empty org");
        applyOrganization(row, id, data);
      })
      .catch(function () {
        try {
          localStorage.setItem("hw_org_id", id);
          localStorage.setItem("OrganizationId", id);
        } catch (e) {}
      });
  }

  function restoreOrgFromStorage() {
    try {
      var stored = localStorage.getItem("hw_org_response");
      if (!stored) return;
      var data = JSON.parse(stored);
      var row = Array.isArray(data) ? data[0] : data;
      if (!row || typeof row !== "object") return;
      var id = getStoredOrganizationId() || org.id || "";
      if (!id) return;
      applyOrganization(row, id, data);
    } catch (e) {}
  }

  function getStoredOrganizationId() {
    try {
      return (
        localStorage.getItem("OrganizationId") ||
        localStorage.getItem("hw_org_id") ||
        ""
      );
    } catch (e) {
      return "";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    restoreOrgFromStorage();
    setupGetOrganization();
    setupSignup();
    setupOtp();
  });
})();
