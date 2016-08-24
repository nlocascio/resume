var elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir((mix) => {
    mix.less('./app.less', 'public/dist/css')
        .copy('node_modules/font-awesome/fonts', 'public/dist/fonts')
        .webpack('./app.js', 'public/dist/js')
        .browserSync({
            proxy: 'resume.dev'
        });
});

