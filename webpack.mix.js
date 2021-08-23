const mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .alias({
        '@': path.resolve(__dirname, 'resources/js')
    })
    .js('resources/js/index.js', 'public/js')
    .react()
    .override(config => {
        if (config.devServer) {
            config.devServer.devMiddleware = config.devServer.dev;
            delete config.devServer.dev;
        }
    });

