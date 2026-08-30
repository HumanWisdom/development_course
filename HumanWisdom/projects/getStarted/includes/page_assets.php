<?php
/**
 * Per-page asset flags so vendor header/footer load only what the page needs.
 * Use hw_page_assets_configure('landing') or hw_page_assets_configure([...]) before vendor_header.
 */

if (!function_exists('hw_page_assets_profiles')) {
    function hw_page_assets_profiles()
    {
        return [
            'standard' => [
                'css' => [
                    'glightbox' => true,
                    'swiper' => true,
                    'owl' => true,
                    'fontawesome_cdn' => true,
                    'critical_lcp' => false,
                    'header_in_critical' => false,
                    'google_fonts_head' => true,
                    'vendor_debug_inline' => true,
                    'modal_tabs_defer' => false,
                    'font_stacks' => true,
                    'font_colour' => true,
                    'style_hb' => true,
                    'bootstrap_css' => true,
                    'bootstrap_icons' => true,
                    'site_css_head' => true,
                    'site_css_deferred' => false,
                ],
                'js' => [
                    'aos' => true,
                    'glightbox' => true,
                    'swiper' => true,
                    'purecounter' => true,
                    'imagesloaded' => true,
                    'isotope' => true,
                    'owl' => true,
                    'fontawesome_kit' => true,
                    'render' => true,
                    'main_vendors' => true,
                    'validate' => true,
                    'gtag_head' => true,
                    'gtag_deferred' => false,
                    'google_fonts_deferred' => false,
                ],
                'ui' => [
                    'preloader' => true,
                ],
                'schedule' => 'idle',
            ],
            'landing' => [
                'css' => [
                    'glightbox' => false,
                    'swiper' => false,
                    'owl' => false,
                    'fontawesome_cdn' => false,
                    'critical_lcp' => true,
                    'header_in_critical' => true,
                    'google_fonts_head' => false,
                    'vendor_debug_inline' => false,
                    'modal_tabs_defer' => true,
                    'font_stacks' => true,
                    'font_colour' => true,
                    'style_hb' => false,
                    'bootstrap_css' => false,
                    'bootstrap_icons' => false,
                    'site_css_head' => false,
                    'site_css_deferred' => true,
                ],
                'js' => [
                    'aos' => true,
                    'glightbox' => false,
                    'swiper' => false,
                    'purecounter' => false,
                    'imagesloaded' => false,
                    'isotope' => false,
                    'owl' => false,
                    'fontawesome_kit' => false,
                    'render' => false,
                    'main_vendors' => false,
                    'validate' => false,
                    'gtag_head' => false,
                    'gtag_deferred' => true,
                    'google_fonts_deferred' => true,
                ],
                'ui' => [
                    'preloader' => false,
                ],
                'schedule' => 'idle',
            ],
        ];
    }
}

if (!function_exists('hw_page_assets_configure')) {
    /**
     * @param string|array $profile Profile name or partial override merged onto standard.
     */
    function hw_page_assets_configure($profile)
    {
        $profiles = hw_page_assets_profiles();
        $base = $profiles['standard'];

        if (is_string($profile) && isset($profiles[$profile])) {
            $base = hw_page_assets_merge($base, $profiles[$profile]);
            $base['profile'] = $profile;
        } elseif (is_array($profile)) {
            $base = hw_page_assets_merge($base, $profile);
        }

        $GLOBALS['hw_page_assets'] = $base;
    }
}

if (!function_exists('hw_page_assets_merge')) {
    function hw_page_assets_merge(array $base, array $override)
    {
        foreach ($override as $key => $value) {
            if ($key === 'css' || $key === 'js' || $key === 'ui') {
                $base[$key] = array_merge($base[$key] ?? [], $value);
            } else {
                $base[$key] = $value;
            }
        }
        return $base;
    }
}

if (!function_exists('hw_page_assets_get')) {
    function hw_page_assets_get()
    {
        if (!isset($GLOBALS['hw_page_assets'])) {
            hw_page_assets_configure('standard');
        }
        return $GLOBALS['hw_page_assets'];
    }
}

if (!function_exists('hw_page_assets_flag')) {
    function hw_page_assets_flag($group, $name)
    {
        $assets = hw_page_assets_get();
        return !empty($assets[$group][$name]);
    }
}

if (!function_exists('hw_page_assets_script_urls')) {
    function hw_page_assets_script_urls()
    {
        if (!function_exists('hw_asset_url')) {
            require_once __DIR__ . '/cache_buster.php';
        }

        return [
            'aos' => hw_asset_url('../assets/vendor/aos/aos.js'),
            'glightbox' => hw_asset_url('../assets/vendor/glightbox/js/glightbox.min.js'),
            'swiper' => hw_asset_url('../assets/vendor/swiper/swiper-bundle.min.js'),
            'purecounter' => hw_asset_url('../assets/vendor/purecounter/purecounter_vanilla.js'),
            'imagesloaded' => hw_asset_url('../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js'),
            'isotope' => hw_asset_url('../assets/vendor/isotope-layout/isotope.pkgd.min.js'),
            'main_vendors' => hw_asset_url('../assets/js/main-vendors.js'),
            'render' => hw_asset_url('../assets/js/render.js'),
            'validate' => hw_asset_url('../assets/vendor/php-email-form/validate.js'),
            'owl' => 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
            'fontawesome_kit' => 'https://kit.fontawesome.com/e7db147a51.js',
            'google_fonts_deferred' => 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=optional',
        ];
    }
}

if (!function_exists('hw_page_assets_site_style_urls')) {
  /**
   * Deferred site CSS per page profile.
   * landing = index.php only (no home.css; index-inline loads last).
   */
    function hw_page_assets_site_style_urls($profile = null)
    {
        if (!function_exists('hw_asset_url')) {
            require_once __DIR__ . '/cache_buster.php';
        }

        if ($profile === null) {
            $assets = hw_page_assets_get();
            $profile = $assets['profile'] ?? 'standard';
        }

        $fontColour = hw_asset_url('../assets/font/font_colour.css');
        $fontStacks = [
            hw_asset_url('../assets/font/font_size.css'),
            hw_asset_url('../assets/font/font_weight.css'),
            hw_asset_url('../assets/font/line_height.css'),
        ];

        if ($profile === 'landing') {
            /* index-inline.css must load last — it overrides landing/main/index/responsive */
            return [
                hw_asset_url('../assets/css/landing.css'),
                hw_asset_url('../assets/css/main.css'),
                hw_asset_url('../assets/css/index.css'),
                hw_asset_url('../assets/css/responsive.css'),
                hw_asset_url('../assets/css/index-inline.css'),
                $fontColour,
                $fontStacks[0],
                $fontStacks[1],
                $fontStacks[2],
            ];
        }

        return [
            hw_asset_url('../assets/css/landing.css'),
            hw_asset_url('../assets/css/main.css'),
            hw_asset_url('../assets/css/home.css'),
            hw_asset_url('../assets/css/index.css'),
            hw_asset_url('../assets/css/responsive.css'),
            hw_asset_url('../assets/css/index-inline.css'),
            $fontColour,
            $fontStacks[0],
            $fontStacks[1],
            $fontStacks[2],
        ];
    }
}

if (!function_exists('hw_page_assets_style_urls')) {
    function hw_page_assets_style_urls()
    {
        if (!function_exists('hw_asset_url')) {
            require_once __DIR__ . '/cache_buster.php';
        }

        $assets = hw_page_assets_get();
        $profile = $assets['profile'] ?? 'standard';

        return [
            'glightbox' => hw_asset_url('../assets/vendor/glightbox/css/glightbox.min.css'),
            'swiper' => hw_asset_url('../assets/vendor/swiper/swiper-bundle.min.css'),
            'owl' => 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
            'owl_theme' => 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css',
            'modal_tabs_defer' => hw_asset_url('../assets/css/modal-tabs-defer.css'),
            'bootstrap_css' => 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
            'bootstrap_icons' => hw_asset_url('../assets/vendor/bootstrap-icons/bootstrap-icons.css'),
            'site_styles' => hw_page_assets_site_style_urls($profile),
        ];
    }
}

if (!function_exists('hw_defer_stylesheet_if')) {
    function hw_defer_stylesheet_if($enabled, $assetPath)
    {
        if ($enabled && function_exists('hw_defer_stylesheet')) {
            hw_defer_stylesheet($assetPath);
        }
    }
}
