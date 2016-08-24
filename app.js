window.Vue = require('vue');

// Vue.component('welcome', require('./components/Welcome.vue'));
// Vue.component('about', require('./components/About.vue'));
Vue.component('resume', require('./components/Resume.vue'));
// Vue.component('portfolio', require('./components/Portfolio.vue'));

var app = new Vue({
    el: 'body'
});
