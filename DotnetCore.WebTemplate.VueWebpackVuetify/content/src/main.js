import 'babel-polyfill';

// Import npm packages
import Vue from 'vue';
import Vuetify from 'vuetify';

// Import relative js
import router from './router';
import store from './store';

// Import relative vue
import App from './App.vue';

// Import relative image
// import favicon from './imgs/favicon.png';

// Set vue use Vuetify
Vue.use(Vuetify, {
    theme: {
        primary: '#DB2627', // $Kingston_Red
        secondary: '#00C097', // $Kingston_Green
        accent: '#FF8A80', // $Kingston_Pink
        error: '#FF2F30', // $Kingston_LightRed
        info: '#26A69A', // $Kingston_DarkGreen
        success: '#00C097', // $Kingston_Green
        warning: '#E0B300' // $Kingston_Gold
    }
});

// Init vue project
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
