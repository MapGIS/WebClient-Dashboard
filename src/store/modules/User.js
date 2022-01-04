const state = {
  username: "user",
  role: "user",
};

const mutations = {
  SET_USER_NAME(state, payload) {
    state.username = payload.username;
  },
  SET_USER_ROLE(state, payload) {
    state.role = payload.role;
  },
};

const actions = {
  // context是固定语法，表示全局上下文, 第二个是传递的参数
  loginOut(context, isloging) {
    const { commit, state } = context;
    return new Promise((resolve, reject) => {
      let data = {};
      if (isloging) {
        commit("SET_USER_NAME", "");
        commit("SET_USER_ROLE", "");
        data = { username: "", role: "" };
        resolve(data);
      } else {
        data = { username: state.user.name, role: state.user.role };
        reject(data);
      }
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
