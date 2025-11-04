<?php
namespace GetStarted\Includes;

class Template
{
    public static function vendorHeader(): void
    {
        require_once __DIR__ . '/vendor_header.php';
    }

    public static function header(): void
    {
        require_once __DIR__ . '/header.php';
    }

    public static function footer(): void
    {
        require_once __DIR__ . '/footer.php';
    }

    public static function vendorFooter(): void
    {
        require_once __DIR__ . '/vendor_footer.php';
    }
}


