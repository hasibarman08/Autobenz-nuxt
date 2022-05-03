export const state = () => ({
	carList: [],
  paginationData:{}
});
export const mutations = {
	set_car(state, payload) {
		state.carList = payload.automobile;
		state.paginationData = payload.config;
	}
};
export const getters = {
	cars: (state) => state.carList,
	pagination: (state) => state.paginationData,
};
export const actions = {
	async getCar({ commit }, page = '') {
		try {
			const res = await this.$axios.$get('/api/' + page, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			});
      console.log(res);
			commit('set_car', res);
		} catch (e) {
			console.log(e);
		}
	}
};
