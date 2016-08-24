var elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir((mix) => {
    mix.less('./app.less')
        .copy('node_modules/font-awesome/fonts', 'public/fonts')
        .webpack('./app.js')
        .browserSync({
            proxy: 'resume.dev'
        });
});

