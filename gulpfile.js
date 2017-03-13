var elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir((mix) => {
    mix.less('./app.less', 'public/css')
        .webpack('./app.js', 'public/js')
        .browserSync({
            proxy: 'resume.dev'
        });
});

