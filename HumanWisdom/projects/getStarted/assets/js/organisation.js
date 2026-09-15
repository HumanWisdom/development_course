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
      fetch(apiBase + "/AddLearner_Website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          FName: name.value.trim(),
          Lname: "",
          Email: email.value.trim(),
          Pwd: password.value,
          OrgId: org.id || "",
        }),
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
              sessionStorage.setItem("hw_org_email", email.value.trim());
              sessionStorage.setItem("hw_org_name", name.value.trim());
            } catch (e) {}
            go("otp", { email: email.value.trim() });
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

  function setupOtp() {
    var wrap = qs("org-otp");
    if (!wrap) return;
    var inputs = [].slice.call(wrap.querySelectorAll("input"));
    var emailEl = qs("org-otp-email");
    var err = qs("org-otp-error");
    var timerEl = qs("org-otp-timer");
    var resend = qs("org-resend");
    var back = qs("org-otp-back");
    var email =
      new URLSearchParams(window.location.search).get("email") ||
      (function () {
        try {
          return sessionStorage.getItem("hw_org_email") || "";
        } catch (e) {
          return "";
        }
      })();

    if (emailEl && email) {
      emailEl.textContent = email;
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

    function maybeSubmit() {
      if (code().length !== 6) return;
      fetch(apiBase + "/verificationCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: email, VCode: code() }),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("verify");
          return res.json();
        })
        .then(function () {
          go("success");
        })
        .catch(function () {
          showError(err, "That code did not match. Please try again.");
          inputs.forEach(function (el) {
            el.value = "";
          });
          if (inputs[0]) inputs[0].focus();
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

  document.addEventListener("DOMContentLoaded", function () {
    setupSignup();
    setupOtp();
  });
})();
