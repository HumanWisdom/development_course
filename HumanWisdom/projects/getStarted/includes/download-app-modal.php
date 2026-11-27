<?php
if (defined('HW_DOWNLOAD_APP_MODAL')) {
    return;
}
define('HW_DOWNLOAD_APP_MODAL', true);
?>
<div class="modal fade" id="downloadAppModal" tabindex="-1" aria-labelledby="downloadAppModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered download-app-modal-dialog">
    <div class="modal-content download-app-modal-content">
      <button type="button" class="btn-close download-app-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="org-download-card text-center">
        <h2 class="org-flow-title org-download-heading" id="downloadAppModalLabel">Scan to download<br>the app</h2>
        <img class="org-qr org-download-qr" src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/webp/scan.webp" alt="Scan QR code to download the HappierMe app" width="200" height="200">
        <div class="org-flow-rule org-download-or"><span>OR</span></div>
        <div class="org-download-badges">
          <a href="https://apps.apple.com/in/app/humanwisdom/id1588535567" target="_blank" rel="noopener">
            <img src="/assets/svgs/org_appstore_black.svg" alt="Download on the App Store" width="179" height="53">
          </a>
          <a href="https://play.google.com/store/apps/details?id=io.humanwisdom.me&amp;hl=en&amp;gl=US" target="_blank" rel="noopener">
            <img src="/assets/svgs/org_playstore_black.svg" alt="Get it on Google Play" width="179" height="53">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<style>
  #downloadAppModal {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 10050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }
  #downloadAppModal.show {
    display: block;
  }
  body.modal-open .modal-backdrop {
    z-index: 10040;
  }
  #downloadAppModal .download-app-modal-dialog {
    display: flex;
    align-items: center;
    min-height: calc(100% - 32px);
    max-width: 470px;
    width: calc(100% - 32px);
    margin: 16px auto;
    pointer-events: none;
  }
  #downloadAppModal .download-app-modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background: #fff;
    border: 0;
    border-radius: 12px;
    box-shadow: none;
    outline: 0;
  }
  #downloadAppModal .download-app-modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    width: 24px;
    height: 24px;
    color: #000;
  }
  #downloadAppModal .org-download-card {
    background: #fff;
    border-radius: 12px;
    padding: 53px 45px 40px;
    max-width: 470px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
    margin: 0;
  }
  #downloadAppModal .org-download-heading {
    margin: 0;
    width: 100%;
    max-width: 380px;
    font-family: Poppins, sans-serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    color: #000;
  }
  #downloadAppModal .org-qr {
    width: 200px;
    height: 200px;
    margin: 0;
    display: block;
    object-fit: contain;
    flex-shrink: 0;
  }
  #downloadAppModal .org-flow-rule {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 380px;
    margin: 0;
  }
  #downloadAppModal .org-flow-rule span {
    font-family: Poppins, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }
  #downloadAppModal .org-flow-rule::before,
  #downloadAppModal .org-flow-rule::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.25);
  }
  #downloadAppModal .org-download-badges {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 380px;
    gap: 22px;
    margin: 0;
  }
  #downloadAppModal .org-download-badges a {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    flex: 1 1 0;
    min-width: 0;
    max-width: 179px;
  }
  #downloadAppModal .org-download-badges img {
    width: 100%;
    height: 53px;
    max-width: 179px;
    display: block;
    object-fit: contain;
  }
  @media (max-width: 767.98px) {
    #downloadAppModal .org-download-card {
      padding: 48px 20px 28px;
      gap: 28px;
    }
    #downloadAppModal .org-download-heading {
      font-size: 24px;
    }
    #downloadAppModal .org-qr {
      width: 180px;
      height: 180px;
    }
  }
</style>
<script>
  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest("#headerTryForFree");
    if (!button) return;
    var modalEl = document.getElementById("downloadAppModal");
    if (!modalEl || !window.bootstrap || !bootstrap.Modal) return;
    event.preventDefault();
    bootstrap.Modal.getOrCreateInstance(modalEl).show();
  }, true);
</script>
