const state = {
  zoom: 6,
  center: [110, 30],
};

const mutations = {
  SET_MAP_ZOOM(state, zoom) {
    state.zoom = zoom;
  },
  SET_MAP_CENTER(state, center) {
    state.center = center;
  },
};

const actions = {

};

export default {
  state,
  mutations,
  actions,
};
