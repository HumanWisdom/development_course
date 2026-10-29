(function () {
  "use strict";

  var org = window.__HW_ORG__ || {};
  var pages = window.__HW_ORG_PAGES__ || {};
  var assets = window.__HW_ORG_ASSETS__ || {};
  var DEFAULT_ORG_ID = "happierme";
  var stepMeta = window.__HW_ORG_STEP_META__ || {};
  var currentStep = window.__HW_ORG_STEP__ || "landing";
  var apiBase = (window.__HW_API__ && window.__HW_API__.apiBase) || "https://www.humanwisdom.info/api";
  var onEnterOtp = null;

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

  /** Switch step in-place — does not change the browser URL. */
  function showStep(pageKey) {
    var panels = document.querySelectorAll("[data-org-step]");
    if (!panels.length) return false;

    var found = false;
    panels.forEach(function (panel) {
      var match = panel.getAttribute("data-org-step") === pageKey;
      panel.hidden = !match;
      if (match) found = true;
    });
    if (!found) return false;

    var meta = stepMeta[pageKey] || {};
    if (meta.body) document.body.className = meta.body;
    if (meta.title) document.title = meta.title;

    var footer = document.querySelector(".org-footer");
    if (footer) footer.hidden = !meta.copyright;

    var partnerImg = document.querySelector(".org-partner-logo");
    if (partnerImg) {
      var showPartner = !!meta.partner && Number(org.showPartnerLogo) === 1;
      partnerImg.hidden = !showPartner;
    }

    currentStep = pageKey;
    window.__HW_ORG_STEP__ = pageKey;

    if (pageKey === "otp" && typeof onEnterOtp === "function") {
      onEnterOtp();
    }
    if (pageKey === "signup") {
      redirectIfLoggedIn();
    }

    try {
      window.scrollTo(0, 0);
    } catch (e) {}
    return true;
  }

  function go(pageKey, extra) {
    // In-page SPA navigation — keep the current URL as-is.
    if (showStep(pageKey)) return;

    // Fallback for pages that are not embedded in this document.
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

  function setupInPageNav() {
    document.addEventListener("click", function (e) {
      var el = e.target.closest("[data-org-go]");
      if (!el) return;
      var key = el.getAttribute("data-org-go");
      if (!key) return;
      e.preventDefault();
      go(key);
    });
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

  var social = window.__HW_SOCIAL__ || {};

  function loadScript(id, src) {
    return new Promise(function (resolve, reject) {
      var existing = document.getElementById(id);
      if (existing) {
        if (existing.getAttribute("data-loaded") === "1") resolve();
        else {
          existing.addEventListener("load", function () { resolve(); });
          existing.addEventListener("error", reject);
        }
        return;
      }
      var s = document.createElement("script");
      s.id = id;
      s.src = src;
      s.async = true;
      s.defer = true;
      s.onload = function () {
        s.setAttribute("data-loaded", "1");
        resolve();
      };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function decodeJwt(token) {
    var parts = String(token || "").split(".");
    if (parts.length < 2) throw new Error("invalid token");
    var base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) base64 += "=";
    var json = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(json);
  }

  function unwrapApiData(data) {
    if (Array.isArray(data)) return data[0] || null;
    return data;
  }

  function apiErrorMessage(data, fallback) {
    if (!data) return fallback;
    if (typeof data === "string" && data.trim()) return data;
    return (
      data.RecordExistMsg ||
      data.recordExistMsg ||
      data.Message ||
      data.message ||
      fallback
    );
  }

  function adultsUrl(path) {
    return (social.adultsAppUrl || window.location.origin) + path;
  }

  function isSameOriginAsAdults() {
    try {
      return new URL(adultsUrl("/")).origin === window.location.origin;
    } catch (e) {
      return false;
    }
  }

  /** Mirrors LoginSignupPage.setUpLoginConfiguration so the adults app boots as logged in. */
  function storeAdultsSession(res) {
    var ls = localStorage;
    clearCreateAccountLocalStorage();
    ls.setItem("socialLogin", "T");
    ls.setItem("isloggedin", "T");
    ls.setItem("guest", "F");
    ls.setItem("btnclick", "F");
    ls.setItem("remember", "T");
    ls.setItem("loginResponse", JSON.stringify(res));
    sessionStorage.setItem("loginResponse", JSON.stringify(res));
    sessionStorage.setItem("loginCompletedAt", String(Date.now()));
    ls.setItem("token", JSON.stringify(res.access_token));
    ls.setItem("IsPartner", res.IsPartner);
    ls.setItem("isPartner", res.IsPartner);
    ls.setItem("PartnerOption", res.PartnerOption);
    ls.setItem("Subscriber", res.Subscriber);
    ls.setItem("SubscriberType", res.SubscriberType);
    ls.setItem("NoOfDPVisits", res.NoOfDPVisits != null ? String(res.NoOfDPVisits) : "0");
    ls.setItem("NoOfVisits", res.NoOfVisits);
    ls.setItem("signupfirst", res.NoOfVisits === 1 ? "T" : "F");
    ls.setItem("RoleID", JSON.stringify(res.RoleID));
    ls.setItem("email", res.Email);
    ls.setItem("pswd", "");
    ls.setItem("name", res.Name);
    ls.setItem("first", "T");
    ls.setItem("userName", JSON.stringify(res.Name));
    ls.setItem("userEmail", JSON.stringify(res.Email));
    ls.setItem("userID", res.UserId);
    ls.setItem("userId", JSON.stringify(res.UserId));
    sessionStorage.setItem("userId", JSON.stringify(res.UserId));
    sessionStorage.setItem("userEmail", JSON.stringify(res.Email));
    sessionStorage.setItem("userName", JSON.stringify(res.Name));
    ls.setItem("mediaAudio", JSON.stringify("https://humanwisdoms3.s3.eu-west-2.amazonaws.com"));
    ls.setItem("mediaVideo", JSON.stringify("https://humanwisdoms3.s3.eu-west-2.amazonaws.com"));
    ls.setItem("video", JSON.stringify(3));
    ls.setItem("audio", JSON.stringify(4));
  }

  function loginToAdults(res) {
    // Different origin means no shared localStorage; adults /social-login verifies the token itself.
    if (!isSameOriginAsAdults()) {
      window.location.href = adultsUrl("/adults/social-login?authtoken=" + encodeURIComponent(res.access_token));
      return;
    }
    try {
      storeAdultsSession(res);
    } catch (e) {}
    window.location.href = adultsUrl(res.NoOfVisits === 1 ? "/adults/change-topic" : "/adults/today");
  }

  /** Same destination as email OTP success — stay on the website. */
  function finishSocialSignup(res) {
    try {
      storeAdultsSession(res);
    } catch (e) {}
    go("success");
  }

  /** Same as LoginSignupPage's constructor: an active adults session skips the signup form. */
  function redirectIfLoggedIn() {
    if (currentStep !== "signup") return false;
    if (!qs("org-signup-form") || !isSameOriginAsAdults()) return false;
    try {
      var email = String(localStorage.getItem("email") || "").replace(/"/g, "");
      var loggedIn =
        localStorage.getItem("isloggedin") === "T" &&
        localStorage.getItem("guest") !== "T" &&
        email !== "guest@humanwisdom.me";
      if (!loggedIn) return false;
      if (localStorage.getItem("pricing") === "true") {
        localStorage.removeItem("pricing");
        window.location.replace(adultsUrl("/adults/subscription/try-free-and-subscribe"));
      } else {
        window.location.replace(adultsUrl("/adults/today"));
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  function setupSocialSignup() {
    var wrap = qs("org-social");
    if (!wrap) return;

    var err = qs("org-signup-error");
    var fbBtn = qs("org-facebook-btn");
    var appleBtn = qs("org-apple-btn");
    var busy = false;

    function fail(msg) {
      busy = false;
      showError(err, msg);
    }

    function verifyAndLogin(endpoint, payload, provider) {
      busy = true;
      showError(err, "Signing you in…");
      payload.VCode = "";
      payload.Pwd = "";
      payload.OrganizationId = org.id || getStoredOrganizationId();

      fetch(apiBase + "/" + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () {
              return null;
            })
            .then(function (data) {
              return { ok: res.ok, data: data };
            });
        })
        .then(function (result) {
          var data = unwrapApiData(result.data);
          if (data && typeof data === "object" && data.access_token) {
            if (data.UserId === 0) {
              fail("We couldn't sign you in with " + provider + ". Please try again.");
              return;
            }
            if (data.UserId === -1) {
              fail("Email was not verified. Please sign up again with the same email to verify it.");
              return;
            }
            finishSocialSignup(data);
            return;
          }
          fail(apiErrorMessage(data || result.data, provider + " sign-in failed. Please try again."));
        })
        .catch(function () {
          fail("Internal Server Error");
        });
    }

    if (social.googleClientId && qs("org-google-btn")) {
      loadScript("google-signin-script", "https://accounts.google.com/gsi/client")
        .then(function () {
          google.accounts.id.initialize({
            client_id: social.googleClientId,
            auto_select: false,
            cancel_on_tap_outside: true,
            callback: function (response) {
              if (busy) return;
              if (!response || !response.credential) {
                fail("Google sign-in failed. Please try again.");
                return;
              }
              var payload = {};
              try {
                payload = decodeJwt(response.credential) || {};
              } catch (e) {
                payload = {};
              }
              verifyAndLogin(
                "verifyGoogleTokenAndLogin",
                {
                  TokenID: response.credential,
                  FName: payload.given_name || "",
                  LName: payload.family_name || "",
                  Email: payload.email || "",
                },
                "Google"
              );
            },
          });
          google.accounts.id.renderButton(qs("org-google-btn"), {
            type: "icon",
            shape: "circle",
            theme: "outline",
            size: "large",
          });
        })
        .catch(function () {
          var g = wrap.querySelector(".org-social-google");
          if (g) g.hidden = true;
        });
    }

    if (social.facebookAppId && fbBtn) {
      var fbStatus = null;

      var refreshFbStatus = function () {
        FB.getLoginStatus(function (response) {
          fbStatus = response;
        });
      };

      window.fbAsyncInit = function () {
        FB.init({
          appId: social.facebookAppId,
          cookie: true,
          xfbml: false,
          status: true,
          version: social.facebookApiVersion || "v18.0",
        });
        refreshFbStatus();
      };
      loadScript("facebook-jssdk", "https://connect.facebook.net/en_US/sdk.js").catch(function () {
        fbBtn.hidden = true;
      });

      var continueWithFacebook = function (authResponse) {
        busy = true;
        showError(err, "Signing you in…");
        FB.api("/me", { fields: "id,email,first_name,last_name" }, function (user) {
          if (!user || user.error) {
            fail("Failed to fetch Facebook user information. Please try again.");
            return;
          }
          if (!user.email) {
            fail("Please use a Facebook account with an email address, or try another method.");
            return;
          }
          verifyAndLogin(
            "verifyFaceBookTokenAndLogin",
            {
              TokenID: authResponse.accessToken,
              FName: user.first_name || "",
              LName: user.last_name || "",
              Email: user.email,
            },
            "Facebook"
          );
        });
      };

      fbBtn.addEventListener("click", function () {
        if (busy) return;
        if (typeof FB === "undefined") {
          fail("Facebook sign-in is not available. Please refresh the page.");
          return;
        }
        // Already logged in to Facebook and the app is authorised: skip the dialog.
        if (fbStatus && fbStatus.status === "connected" && fbStatus.authResponse) {
          continueWithFacebook(fbStatus.authResponse);
          return;
        }
        // FB.login must run synchronously inside the click handler or the popup is blocked.
        FB.login(
          function (response) {
            if (!response.authResponse) {
              refreshFbStatus();
              if (response.status !== "unknown") fail("Facebook sign-in was cancelled. Please try again.");
              return;
            }
            fbStatus = response;
            continueWithFacebook(response.authResponse);
          },
          { scope: "email,public_profile" }
        );
      });
    }

    if (social.appleClientId && appleBtn) {
      appleBtn.addEventListener("click", function () {
        if (busy) return;
        busy = true;
        try {
          localStorage.setItem("appleLogin", "T");
        } catch (e) {}
        // Apple posts to the API, which creates the user and redirects to /adults/social-login?authtoken=…
        var params = new URLSearchParams({
          client_id: social.appleClientId,
          redirect_uri: social.appleRedirectUri,
          response_type: "code id_token",
          scope: "name email",
          response_mode: "form_post",
          state: org.id || getStoredOrganizationId() || "",
        });
        window.location.href = "https://appleid.apple.com/auth/authorize?" + params.toString();
      });
    }
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
    var verifying = false;
    var email = "";
    var remaining = 30;
    var tick = null;
    var resending = false;

    function refreshEmail() {
      stripEmailQueryParam();
      email = getAccountEmailFromLocalStorage();
      if (emailEl && email) {
        emailEl.textContent = email;
      }
      if (!email) {
        showError(err, "Missing account email. Please create your account again.");
      } else {
        showError(err, "");
      }
      return email;
    }

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

    function startTimer() {
      remaining = 30;
      if (timerEl) timerEl.textContent = "(00:30)";
      clearInterval(tick);
      tick = setInterval(function () {
        remaining -= 1;
        if (remaining <= 0) {
          remaining = 0;
          clearInterval(tick);
        }
        if (timerEl) {
          timerEl.textContent = "(00:" + String(remaining).padStart(2, "0") + ")";
        }
      }, 1000);
    }

    // Called each time the OTP step becomes visible.
    onEnterOtp = function () {
      refreshEmail();
      resetOtpInputs();
      startTimer();
    };

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

    // Same contract as adult-dashboard verifyCode(): POST /verificationCode { Email, VCode }
    function maybeSubmit() {
      if (verifying || code().length !== 6) return;
      if (!email) {
        showError(err, "Missing account email. Please create your account again.");
        resetOtpInputs();
        return;
      }

      verifying = true;
      showError(err, "Verifying Code");

      fetch(apiBase + "/verificationCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: email,
          VCode: code(),
        }),
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () {
              return null;
            })
            .then(function (data) {
              return { ok: res.ok, data: data };
            });
        })
        .then(function (result) {
          var data = result.data;
          var ok =
            result.ok &&
            (data === true || data > 0 || parseInt(data, 10) > 0);
          if (ok) {
            clearCreateAccountLocalStorage();
            go("success");
            return;
          }
          showError(err, "Invalid Code");
          resetOtpInputs();
        })
        .catch(function () {
          showError(err, "Invalid Code");
          resetOtpInputs();
        });
    }

    if (resend) {
      resend.addEventListener("click", function (e) {
        e.preventDefault();
        if (remaining > 0 || resending) return;
        if (!email) {
          showError(err, "Missing account email. Please create your account again.");
          return;
        }
        resending = true;
        showError(err, "Sending code…");

        fetch(apiBase + "/ResendverificationCode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Email: email }),
        })
          .then(function (res) {
            return res
              .json()
              .catch(function () {
                return null;
              })
              .then(function (data) {
                return { ok: res.ok, data: data };
              });
          })
          .then(function (result) {
            resending = false;
            if (result.ok) {
              resetOtpInputs();
              startTimer();
              showError(err, "Verification code resent");
              return;
            }
            showError(err, (result.data && result.data.Message) || "Could not resend the code. Please try again.");
          })
          .catch(function () {
            resending = false;
            showError(err, "Could not resend the code. Please try again.");
          });
      });
    }

    if (currentStep === "otp") {
      onEnterOtp();
    }
  }

  function orgLogoUrl(logoUrl) {
    var fallback = (assets && assets.logo_default) || "";
    logoUrl = String(logoUrl || "").trim();
    if (!logoUrl || /\/website\/svgs\/logo\.svg(?:\?|#|$)/i.test(logoUrl)) return fallback;
    if (/^https?:\/\//i.test(logoUrl)) return logoUrl;
    return "https://d1tenzemoxuh75.cloudfront.net/" + logoUrl.replace(/^\//, "");
  }

  function formatTrialEnds(freeDays) {
    var end = new Date();
    end.setHours(0, 0, 0, 0);
    end.setDate(end.getDate() + (parseInt(freeDays, 10) || 0));
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return end.getDate() + " " + months[end.getMonth()] + " " + end.getFullYear();
  }

  function applyOrganization(row, id, rawResponse) {
    var freeDays = parseInt(row.FreeDays_Count, 10);
    if (!freeDays || freeDays < 1) freeDays = 7;
    var trialEnds = formatTrialEnds(freeDays);
    var name = row.OrganizationName || "HappierMe";
    var logo = orgLogoUrl(row.LogoUrl);
    org.id = id;
    org.name = name;
    org.logo = logo;
    org.freeDays = freeDays;
    org.trialEnds = trialEnds;
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

    var logoImg = document.querySelector(".org-logo[data-use-org-logo]");
    if (logoImg) {
      logoImg.src = logo;
      logoImg.alt = name;
      var logoLink = logoImg.closest(".org-logo-link");
      if (logoLink) {
        logoLink.setAttribute("aria-label", name);
      }
    }

    org.showPartnerLogo = Number(row.showPartnerLogo) === 1 ? 1 : 0;
    org.partnerLogo =
      "https://d1tenzemoxuh75.cloudfront.net/website/svgs/OrgLogo/" +
      encodeURIComponent(id) +
      ".svg";
    var partnerImg = document.querySelector(".org-partner-logo");
    if (partnerImg) {
      var stepAllowsPartner = !!(stepMeta[currentStep] || {}).partner;
      if (org.showPartnerLogo && stepAllowsPartner) {
        partnerImg.src = org.partnerLogo;
        partnerImg.alt = name;
        partnerImg.hidden = false;
      } else {
        partnerImg.hidden = true;
      }
    }
    document.querySelectorAll("[data-org-free-days]").forEach(function (el) {
      el.textContent = String(freeDays);
    });
    document.querySelectorAll("[data-org-trial-ends]").forEach(function (el) {
      el.textContent = trialEnds;
    });
    document.querySelectorAll("[data-org-copy]").forEach(function (el) {
      var value = row[el.getAttribute("data-org-copy")];
      if (value != null && String(value).trim() !== "") {
        var text = String(value).trim();
        if (el.getAttribute("data-org-copy") === "iconTitle1" && text === "Feel better") {
          el.innerHTML = "Feel <br>better";
        } else {
          el.textContent = text;
        }
      }
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

  function stripEmailQueryParam() {
    stripQueryParams(["email"]);
  }

  function normalizeOrgId(id) {
    id = String(id || "").trim().replace(/[^a-zA-Z0-9_-]/g, "");
    if (!id || id === "1") return DEFAULT_ORG_ID;
    return id;
  }

  /** Org id from /free.php/happierme or /organisation-signup.php/happierme. */
  function orgIdFromPath() {
    try {
      var path = String(window.location.pathname || "");
      var match = path.match(/\/(?:free|organisation(?:-[A-Za-z]+)?)\.php\/([a-zA-Z0-9_-]+)\/?$/i);
      return match ? match[1] : "";
    } catch (e) {
      return "";
    }
  }

  function isOrgFlowEntry() {
    try {
      return /\/(?:free|organisation(?:-signup)?)\.php(?:\/|$)/i.test(String(window.location.pathname || ""));
    } catch (e) {
      return false;
    }
  }

  /**
   * On /free.php?id=nfsn → /free.php/nfsn so the org id stays visible in the path.
   * Does not remove an id that is already in the path.
   */
  function preferPathOrgId(id) {
    if (!id) return;
    try {
      var url = new URL(window.location.href);
      var pathMatch = url.pathname.match(/^(.*\/(?:free|organisation(?:-[A-Za-z]+)?)\.php)(?:\/[a-zA-Z0-9_-]+)?\/?$/i);
      if (!pathMatch) return;

      var scriptBase = pathMatch[1].replace(/organisation-Adv\.php$/i, "free.php");
      var nextPath = scriptBase + "/" + id;
      var changed = false;

      if (url.pathname !== nextPath) {
        url.pathname = nextPath;
        changed = true;
      }
      if (url.searchParams.has("id")) {
        url.searchParams.delete("id");
        changed = true;
      }
      if (!changed) return;
      window.history.replaceState({}, "", url.pathname + (url.search ? url.search : "") + url.hash);
    } catch (e) {}
  }

  function captureOrgIdFromUrl() {
    var id = new URLSearchParams(window.location.search).get("id") || orgIdFromPath();
    id = String(id || "").trim().replace(/[^a-zA-Z0-9_-]/g, "");
    if (!id && isOrgFlowEntry()) {
      id = DEFAULT_ORG_ID;
    } else if (id) {
      id = normalizeOrgId(id);
    }
    if (!id) return "";
    try {
      if (getStoredOrganizationId() !== id) {
        localStorage.removeItem("hw_org_response");
      }
      localStorage.setItem("OrganizationId", id);
      localStorage.setItem("hw_org_id", id);
    } catch (e) {}
    preferPathOrgId(id);
    return id;
  }

  /**
   * Call GET /api/GetOrganization/{OrganizationId} using localStorage only.
   * Org id in /free.php/{id} (or ?id=) is kept in the address bar.
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
        org.id = id;
        window.__HW_ORG__ = org;
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
    setupInPageNav();
    if (redirectIfLoggedIn()) return;
    captureOrgIdFromUrl();
    restoreOrgFromStorage();
    setupGetOrganization();
    setupSignup();
    setupSocialSignup();
    setupOtp();
  });
})();
