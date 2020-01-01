import Dashboard from "../views/User/Dashboard.vue";

export default [
	{
		path: 'user',
		children: [
			{
				path: '/',
				name: 'userDashboard',
				component: Dashboard
			}
		]
	}
]
