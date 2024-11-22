<?php
// This file directly loads the React app with no WordPress header/footer

// Add the viewport and other required meta tags dynamically
function add_custom_meta_tags() {
    echo '<meta charset="utf-8">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
    echo '<meta name="theme-color" content="#000000">';
    echo '<link rel="apple-touch-icon" href="/logo192.png">';
    echo '<link rel="manifest" href="/manifest.json">';
}
add_action('wp_head', 'add_custom_meta_tags');

// Include WordPress head scripts (if any)
wp_head();
?>

<!-- React app mounts here -->
<div id="root"></div>

<?php
// Include WordPress footer scripts (if any)
wp_footer();
?>
