import Home from "../views/Pages/Home.vue";
import About from "../views/Pages/About.vue";
import SignUp from "../views/Pages/SignUp.vue";
import PostAndAd from "../views/Pages/PostAndAd.vue";
import Contact from "../views/Pages/Contact.vue";

export default [
	{
		path: "/",
		name: "home",
		component: Home
	},
	{
		path: "about",
		name: "about",
		component: About
	},
	{
		path: "signup",
		name: "signup",
		component: SignUp
	},
	{
		path: "contact",
		name: "contact",
		component: Contact
	},
	{
		path: "post-ad",
		name: "post-ad",
		component: PostAndAd
	}
];
