import axios from 'axios'
export default {
    namespace: true,
    state:{
        token: null,
        user: null
    },
    mutations:{
			SET_TOKEN(state, token) {
				state.token = token;
			},
		},
    actions:{
			async login({ commit }, credential) {
				try {
					const result = await axios.post('/auth/signin', credential);
					commit('SET_TOKEN', result.data.token);
				} catch (e) {
					// console.log(e);
					commit('SET_TOKEN', null);
				}
			}
		},
}
