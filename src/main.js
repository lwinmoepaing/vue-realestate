import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './config/config.json'
import i18n from './i18n'
import axios from 'axios'

/**
 * Importing BootStrap
 */
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

/**
 * Importing Ionic Icon
 */
import 'vue-ionicons/ionicons.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

axios.defaults.baseURL = config.ApiURL;

router.beforeEach((to, from, next) => {
	let lang = to.params.lang || config.locale;
	i18n.locale = lang;
	next();
});

new Vue({
 router,
 store,
 i18n,
 render: h => h(App)
}).$mount('#app');
