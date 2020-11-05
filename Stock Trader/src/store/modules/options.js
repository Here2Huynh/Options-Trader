const state = {
  mode: "view", // 'add', 'edit'
  trades: [],
};

const mutations = {
  LOAD_TRADES(state) {},
  ADD_TRADE(state) {},
  EDIT_TRADE(state) {},
  CHANGE_MODE(state, mode) {
    state.mode = mode;
    console.log("mode", mode);
  },
};

const actions = {
  setMode({ commit }, mode) {
    commit("CHANGE_MODE", mode);
  },
};

const getters = {
  getMode(state) {
    return state.mode;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
