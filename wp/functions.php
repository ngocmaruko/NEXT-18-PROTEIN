function adjust_react_assets($manifest_path) {
    $manifest = json_decode(file_get_contents($manifest_path), true);

    // Loop through the manifest files and prepend theme directory path to the media files
    foreach ($manifest['files'] as $key => $value) {
        if (strpos($key, 'static/media/') === 0) {
            $manifest['files'][$key] = '/wp-content/themes/my-react-theme/' . $value;
        }
    }

    return $manifest;
}

function enqueue_react_assets() {
    $manifest_path = get_template_directory() . '/asset-manifest.json';

    if (file_exists($manifest_path)) {
        $manifest = adjust_react_assets($manifest_path);

        // Enqueue assets
        wp_enqueue_style('react-app-style', get_template_directory_uri() . $manifest['files']['main.css']);
        wp_enqueue_script('react-app', get_template_directory_uri() . $manifest['files']['main.js'], [], null, true);

        // Loop through JS chunks and enqueue them
        foreach ($manifest['files'] as $file => $path) {
            if (strpos($file, 'chunk.js') !== false) {
                wp_enqueue_script(basename($file), get_template_directory_uri() . $path, [], null, true);
            }
        }
    } else {
        error_log('Error: asset-manifest.json not found in theme directory.');
    }
}

add_action('wp_enqueue_scripts', 'enqueue_react_assets');
