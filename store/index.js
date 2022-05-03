export const state = () => ({
  carList: {}
})
export const mutations = {
  set_car(state, payload) {
    state.carList = payload
  },
}
export const getters = {
  cars: state => state.carList,
}
export const actions = {
  async set_alert({commit}, payload) {
    commit('RESET_ALERT');
    commit('SET_ALERT', payload);
    setTimeout(() => {
      commit('RESET_ALERT')
    }, 3000)
  },
  async getCar({commit},page='') {
    try {
      const res = await this.$axios.$get('https://foxnfox.ch/listcars/page/'+page,{ headers: { 'Access-Control-Allow-Origin': '*' } })
      commit('set_car',res)
    } catch (e) {
      console.log(e)
    }
  },
}
