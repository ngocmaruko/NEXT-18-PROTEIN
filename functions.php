<?php
function enqueue_react_assets() {
    // Path to the asset manifest file
    $manifest_path = get_template_directory() . '/asset-manifest.json';

    // Check if asset-manifest.json exists
    if (file_exists($manifest_path)) {
        // Decode the JSON content of asset-manifest.json
        $manifest = json_decode(file_get_contents($manifest_path), true);

        // Enqueue the main CSS file from React assets
        if (isset($manifest['files']['main.css'])) {
            wp_enqueue_style('react-app-style', $manifest['files']['main.css']);
        }

        // Enqueue the main JS file from React assets
        if (isset($manifest['files']['main.js'])) {
            wp_enqueue_script('react-app', $manifest['files']['main.js'], array(), null, true);
        }

        // Enqueue additional JS chunks if they exist in the manifest
        foreach ($manifest['files'] as $file => $path) {
            if (strpos($file, 'chunk.js') !== false) {
                wp_enqueue_script(basename($file), $path, array(), null, true);
            }
        }

        // Enqueue static styles.css file from assets/css
        wp_enqueue_style('static-style', get_template_directory_uri() . '/assets/css/styles.css');
    } else {
        error_log('Error: asset-manifest.json not found in theme directory.');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_react_assets');
?>
