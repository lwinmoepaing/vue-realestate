import Vue from "vue";
import VueRouter from "vue-router";
import pages from "./pages";
import user from "./user";
import i18n from '../i18n';

import PageNotFound from '@/views/Pages/404.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: `/${i18n.locale}`
	},
	{
		path: '/:lang',
		component: {
			render (c) { return c('router-view') }
		},
		children: [...pages, ...user]
	},
	{ path: "*", component: PageNotFound }
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});



export default router;
