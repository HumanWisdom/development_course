<?php
$showCopyright = !isset($showCopyright) || $showCopyright;
$assets = isset($assets) ? $assets : hw_org_cdn_assets();
$org = isset($org) ? $org : hw_org_fetch();
$base = hw_org_base();
$jsPath = hw_asset_url($base . '/assets/js/organisation.js');
?>
<?php if ($showCopyright) : ?>
<footer class="org-footer">
  <p>Copyright © <?= date('Y') ?> HappierMe. All rights reserved</p>
</footer>
<?php endif; ?>
<script>
window.__HW_API__ = <?= json_encode(hw_api_config(), JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS) ?>;
window.__HW_ORG__ = <?= json_encode($org, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS) ?>;
window.__HW_ORG_ASSETS__ = <?= json_encode($assets, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS) ?>;
window.__HW_ORG_PAGES__ = <?= json_encode([
    'adv' => hw_org_page('organisation-Adv'),
    'landing' => hw_org_page('organisation'),
    'signup' => hw_org_page('organisation-signup'),
    'otp' => hw_org_page('organisation-otp'),
    'success' => hw_org_page('organisation-success'),
    'continue' => hw_org_page('organisation-continue'),
    'download' => hw_org_page('organisation-download'),
], JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS) ?>;
</script>
<script src="<?= hw_org_h($jsPath) ?>"></script>
</body>
</html>
