# Social Login (Google, Facebook, Apple) — Website Create Account Page

This document explains how social sign-up works on the website's **Create Account** page
(`pages/organisation-signup.php`) and how to enable it on a server (staging or production).

Staging (working): https://staging.happierme.app/pages/organisation-signup.php

---

## 1. How it works

The website reuses the **same backend endpoints** as the adults app login
(`projects/shared/component/login-signup/login-signup.page.ts`). No backend changes were needed.

| Provider | Browser step | Backend call | Result |
|---|---|---|---|
| Google | Google Identity Services returns an ID token | `POST {apiBase}/verifyGoogleTokenAndLogin` | Login response (`UserId`, `access_token`, `Name`, `Email`, `NoOfVisits`, …) |
| Facebook | `FB.login` + `FB.api('/me')` returns access token and profile | `POST {apiBase}/verifyFaceBookTokenAndLogin` | Same login response |
| Apple | Browser redirects to `appleid.apple.com` | Apple posts to `{apiBase}/verifyAppleToken_htmlAdults` | API creates/logs in the user and redirects to `/adults/social-login?authtoken=…` |

Request body for Google/Facebook (same as adults):

```json
{ "TokenID": "...", "FName": "...", "LName": "...", "Email": "...", "VCode": "", "Pwd": "", "OrganizationId": "..." }
```

`OrganizationId` is the org from the campaign flow. It is only stored if the backend reads it.

### Logging in to adults after sign-up

After Google/Facebook returns a valid login response:

- **Website and adults app on the same domain** (e.g. both on `happierme.app`): the website writes the
  same `localStorage` / `sessionStorage` keys that the adults login writes (`isloggedin`, `token`,
  `loginResponse`, `userId`, …) and redirects to:
  - `/adults/change-topic` for a brand-new user (`NoOfVisits === 1`)
  - `/adults/today` otherwise
- **Different domains**: redirects to `{HW_ADULTS_APP_URL}/adults/social-login?authtoken={access_token}`.
  The adults app verifies the token itself (the same handoff Apple uses).

Apple always goes through `/adults/social-login` because the API performs the redirect.

### Where the keys come from

`includes/social_config.php` reads each key in this order and uses the first non-empty value:

1. Process environment variable (`getenv`)
2. Apache `SetEnv` value (`$_SERVER`)
3. INI file outside the webroot: **`/etc/humanwisdom/getstarted.env`**
   (path can be overridden with the `HW_ENV_FILE` environment variable)

The values are sent to the browser as `window.__HW_SOCIAL__`. A provider whose key is empty is **hidden** on the page.

> Use the env file (option 3). On staging, Apache `SetEnv` did not reach PHP, while the env file works
> reliably and is never touched by deploys.

---

## 2. Configuration keys

| Key | Required | Production value | Notes |
|---|---|---|---|
| `HW_GOOGLE_CLIENT_ID` | Yes (for Google) | `907009432190-v7bpjvuurie68eakqf5neovb5oj3h0b0.apps.googleusercontent.com` | Same client ID as adults `environment.prod.ts` |
| `HW_FACEBOOK_APP_ID` | Yes (for Facebook) | `238869214957032` | Same as adults |
| `HW_APPLE_CLIENT_ID` | Yes (for Apple) | `humanwisdom.web.service` | Apple Services ID used by adults |
| `HW_ADULTS_APP_URL` | Optional | `https://happierme.app` | Defaults to the website's own domain |
| `HW_APPLE_REDIRECT_URI` | Optional | — | Defaults to `{apiBase}/verifyAppleToken_htmlAdults` (production: `https://www.humanwisdom.info/api/verifyAppleToken_htmlAdults`) |
| `HW_FACEBOOK_API_VERSION` | Optional | — | Defaults to `v18.0` |

---

## 3. Files involved

| File | Purpose |
|---|---|
| `includes/social_config.php` | Reads the keys (env → SetEnv → env file) |
| `includes/organisation_helper.php` | Loads `social_config.php` |
| `includes/organisation_foot.php` | Outputs `window.__HW_SOCIAL__` |
| `includes/security_config.php` | CSP allows `accounts.google.com`, `connect.facebook.net`, `graph.facebook.com`, `facebook.com` |
| `pages/organisation-signup.php` | "Or continue with" Google / Facebook / Apple buttons |
| `assets/js/organisation.js` | `setupSocialSignup()` — SDK loading, backend calls, adults login handoff |
| `assets/css/organisation.css` | `.org-social*` button styles |

---

## 4. How deployment works

Pushing to a branch triggers a GitHub Actions workflow that builds and copies the site to
`/var/www/html/getStarted` on the server (runs on a self-hosted runner):

| Branch | Workflow | Server |
|---|---|---|
| `dev` | `.github/workflows/website-staging.yml` | Staging |
| `Production` | `.github/workflows/website-production.yml` | Production |

Each deploy runs `sudo rm -rf /var/www/html/getStarted/` and replaces it. **Never put config inside
`/var/www/html/getStarted`** — it is deleted on every deploy. The env file lives in `/etc/humanwisdom/`,
which deploys never touch.

---

## 5. Production setup — step by step

### Step 1: Configure the providers (one time)

- **Google Cloud Console** → APIs & Services → Credentials → OAuth client
  `907009432190-v7bp…` → **Authorized JavaScript origins** → add the production website origin,
  e.g. `https://happierme.app` (and `https://www.happierme.app` if used).
- **Facebook Developers** → app `238869214957032` → Settings → Basic → **App Domains** → add
  `happierme.app`. Make sure the app is in **Live** mode.
- **Apple**: nothing new. It reuses the redirect URI already registered for the adults app
  (`https://www.humanwisdom.info/api/verifyAppleToken_htmlAdults`).

### Step 2: SSH into the production server

```bash
ssh ubuntu@<production-server>
```

Optional — confirm the web server and PHP version:

```bash
systemctl status apache2 --no-pager | grep -E "●|Active"
php -v
php -i | grep open_basedir      # should be "no value"
```

### Step 3: Create the env file

Run from any folder:

```bash
sudo mkdir -p /etc/humanwisdom
sudo nano /etc/humanwisdom/getstarted.env
```

Paste:

```ini
HW_GOOGLE_CLIENT_ID="907009432190-v7bpjvuurie68eakqf5neovb5oj3h0b0.apps.googleusercontent.com"
HW_FACEBOOK_APP_ID="238869214957032"
HW_APPLE_CLIENT_ID="humanwisdom.web.service"
HW_ADULTS_APP_URL="https://happierme.app"
```

Save in nano: **Ctrl + O**, **Enter**, then **Ctrl + X**.

Restrict permissions so only root and Apache (`www-data`) can read it:

```bash
sudo chown root:www-data /etc/humanwisdom/getstarted.env
sudo chmod 640 /etc/humanwisdom/getstarted.env
cat /etc/humanwisdom/getstarted.env     # verify contents (sudo cat if needed)
```

No Apache restart is needed — PHP reads the file on each request.

### Step 4: Deploy the code

Merge `dev` into `Production` and push. Wait for the **Website-Production** workflow to finish
in the GitHub **Actions** tab.

### Step 5: Verify

1. Open `https://happierme.app/pages/organisation-signup.php`.
2. The **Google**, **Facebook** and **Apple** buttons appear under **Continue**.
3. View page source and search for `__HW_SOCIAL__` — `googleClientId`, `facebookAppId` and
   `appleClientId` must not be empty.
4. Test each provider with a real account:
   - New account → lands on `/adults/change-topic`
   - Existing account → lands on `/adults/today`

From a terminal:

```bash
curl -s "https://happierme.app/pages/organisation-signup.php?t=$(date +%s)" \
  | grep -oE '"googleClientId":"[^"]*"|id="org-(google|facebook|apple)-btn"'
```

---

## 6. Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| No social buttons; `__HW_SOCIAL__` keys are `""` | PHP cannot see the keys | Check `/etc/humanwisdom/getstarted.env` exists, has the keys, and is readable by `www-data` (`chown root:www-data`, `chmod 640`) |
| Keys still empty and `open_basedir` has a value | PHP is restricted to certain folders | Add `/etc/humanwisdom` to `open_basedir`, or set `HW_ENV_FILE` to a readable path |
| No buttons at all and `__HW_SOCIAL__` missing from source | New code not deployed | Check the GitHub Actions workflow run |
| Google popup: "origin not allowed" / `idpiframe_initialization_failed` | Domain not authorized for the client ID | Add the site origin to Authorized JavaScript origins (Step 1) |
| Facebook: "URL blocked" / "domain not included" | Domain not in App Domains | Add domain in Facebook app settings (Step 1) |
| Facebook: "Please use a Facebook account with an email address…" | Facebook account has no email | User must use another method |
| Browser console shows CSP "Refused to load…" | CSP blocks the SDK | Confirm `includes/security_config.php` contains the Google/Facebook domains |
| After sign-in, user lands back as guest in adults | Different domains and token not accepted by `/adults/social-login` | Set `HW_ADULTS_APP_URL` to the same domain as the website if both are served from one domain |
| Apple returns an error page | Redirect URI not registered for `humanwisdom.web.service` | Check Apple Developer → Services ID → Return URLs |

> Note: Apache `SetEnv` in `/etc/apache2/conf-available/hw-social.conf` was tried on staging and
> did not reach PHP. It is harmless to keep, but the env file is the supported method.

---

## 7. Disable or roll back

- **Hide a single provider**: remove (or empty) its key in `/etc/humanwisdom/getstarted.env`.
  The button disappears on the next page load.
- **Hide all social buttons**: remove the three provider keys, or delete the file.
- **Full code rollback**: revert the social login commits and redeploy.
