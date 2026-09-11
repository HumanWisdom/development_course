<?php
$assets = isset($assets) ? $assets : hw_org_cdn_assets();
$org = isset($org) ? $org : hw_org_fetch();
$headerHome = hw_org_page('organisation');
$useOrgLogo = !empty($useOrgLogo);
$logoSrc = $useOrgLogo ? $org['logo'] : $assets['logo_default'];
$logoAlt = $useOrgLogo ? $org['name'] : 'HappierMe';
?>
<header class="org-header">
  <div class="org-header-inner">
    <a class="org-logo-link" href="<?= hw_org_h($headerHome) ?>" aria-label="<?= hw_org_h($logoAlt) ?>">
      <img
        class="org-logo"
        src="<?= hw_org_h($logoSrc) ?>"
        alt="<?= hw_org_h($logoAlt) ?>"
        data-fallback="<?= hw_org_h($assets['logo_default']) ?>"
        onerror="if(this.dataset.fallback && this.src!==this.dataset.fallback){this.src=this.dataset.fallback;}">
    </a>
  </div>
</header>
