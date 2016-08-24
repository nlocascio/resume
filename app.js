window.Vue = require('vue');

Vue.component('resume', require('./components/Resume.vue'));

var app = new Vue({
    el: 'body'
});
