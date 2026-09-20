<?php
$assets = isset($assets) ? $assets : hw_org_cdn_assets();
$headerHome = hw_org_page('organisation');
$logoSrc = $assets['logo_default'];
$logoAlt = 'HappierMe';
?>
<header class="org-header">
  <div class="org-header-inner">
    <a class="org-logo-link" href="<?= hw_org_h($headerHome) ?>" aria-label="<?= hw_org_h($logoAlt) ?>">
      <img
        class="org-logo"
        src="<?= hw_org_h($logoSrc) ?>"
        alt="<?= hw_org_h($logoAlt) ?>"
        width="215"
        height="61"
        data-fallback="<?= hw_org_h($assets['logo_default']) ?>"
        onerror="if(this.dataset.fallback && this.src!==this.dataset.fallback){this.src=this.dataset.fallback;}">
    </a>
  </div>
</header>
