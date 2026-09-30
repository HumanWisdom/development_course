<?php
$assets = isset($assets) ? $assets : hw_org_cdn_assets();
$org = isset($org) ? $org : hw_org_fetch();
$headerHome = hw_org_page('organisation');
$useOrgLogo = !empty($useOrgLogo);
$logoSrc = $useOrgLogo ? $org['logo'] : $assets['logo_default'];
$logoAlt = $useOrgLogo ? $org['name'] : 'HappierMe';
$partnerLogoSlot = !empty($partnerLogoSlot);
$showPartnerLogo = $partnerLogoSlot && (int) ($org['showPartnerLogo'] ?? 0) === 1;
$partnerLogoSrc = $org['partnerLogo'] ?? hw_org_partner_logo_url($org['id'] ?? '');
?>
<header class="org-header">
  <div class="org-header-inner">
    <a class="org-logo-link" href="<?= hw_org_h($headerHome) ?>" aria-label="<?= hw_org_h($logoAlt) ?>">
      <img
        class="org-logo"
        src="<?= hw_org_h($logoSrc) ?>"
        alt="<?= hw_org_h($logoAlt) ?>"
        width="190"
        height="44"
        <?= $useOrgLogo ? 'data-use-org-logo' : '' ?>
        data-fallback="<?= hw_org_h($assets['logo_default']) ?>"
        onerror="if(this.dataset.fallback && this.src!==this.dataset.fallback){this.src=this.dataset.fallback;}">
    </a>
    <?php if ($partnerLogoSlot) : ?>
      <img
        class="org-partner-logo"
        src="<?= hw_org_h($partnerLogoSrc) ?>"
        alt="<?= hw_org_h($org['name'] ?? '') ?>"
        height="44"
        <?= $showPartnerLogo ? '' : 'hidden' ?>
        onerror="this.hidden=true;">
    <?php endif; ?>
  </div>
</header>
