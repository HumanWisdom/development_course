(function () {
  var FALLBACK_DIRECT_API = 'https://staging.humanwisdom.info/api/GetWebsiteTitle';
  var FETCH_TIMEOUT_MS = 35000;

  function resolveApiUrl() {
    if (typeof window !== 'undefined' && window.HW_GET_WEBSITE_TITLE_API_URL) {
      return window.HW_GET_WEBSITE_TITLE_API_URL;
    }
    var rel = document.documentElement && document.documentElement.getAttribute('data-website-title-api');
    if (rel && String(rel).trim()) {
      try {
        return new URL(String(rel).trim(), window.location.href).href;
      } catch (e) {
        return FALLBACK_DIRECT_API;
      }
    }
    return FALLBACK_DIRECT_API;
  }

  function applyRow(row) {
    if (!row || typeof row !== 'object') return;
    if (row.title) {
      document.querySelectorAll('[data-website-title]').forEach(function (el) {
        el.innerHTML = row.title;
      });
    }
    if (row.subtitle) {
      document.querySelectorAll('[data-website-subtitle]').forEach(function (el) {
        el.innerHTML = row.subtitle;
      });
    }
  }

  function run() {
    if (!document.querySelector('[data-website-title], [data-website-subtitle]')) {
      return;
    }
    var apiUrl = resolveApiUrl();
    var controller = new AbortController();
    var tid = setTimeout(function () {
      controller.abort();
    }, FETCH_TIMEOUT_MS);
    fetch(apiUrl, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
      mode: 'cors',
      credentials: 'omit',
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        clearTimeout(tid);
        var row = Array.isArray(data) && data[0];
        applyRow(row);
      })
      .catch(function () {
        clearTimeout(tid);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
