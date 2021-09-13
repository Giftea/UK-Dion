import { requestHeaders } from "config/index";
import { action, thunk } from "easy-peasy";
import Axios from "axios";
// import Alert from "config/sweetalert";
import { API_URL } from "config/constants";
import Cookies from "js-cookie";

const auth = {
  currentUser: null,
  loading: false,
  setLoading: action((state) => {
    state.loading = false;
    state.status = false;
  }),
  setUser: action((state, payload) => {
    state.currentUser = payload;
    state.loading = false;
    state.status = true;
  }),
  init: action((state) => {
    state.loading = true;
    state.currentUser = null;
    state.status = false;
  }),

  login: thunk(async (actions, payload) => {
    try {
      actions.init();
      const { data } = await Axios.post(
        `${API_URL}/employees/login`,
        payload.data
      );
      actions.setUser(data.data);
      Cookies.set("user_token", data.access_token);
      payload.callback();
    } catch (e) {
      console.log(e);
      actions.setLoading();
    }
  }),
  forgotPassword: thunk(async (actions, payload) => {
    try {
      actions.init();
      const { data } = await Axios.post(
        `${API_URL}/employee/forgot-password`,
        payload.data
      );
      Cookies.set("token", data.token);
      Cookies.set("email", payload.data.email);
      payload.callback();
      actions.setLoading();
    } catch (e) {
      actions.setLoading();
    }
  }),
  resetPassword: thunk(async (actions, payload) => {
    try {
      actions.init();
      const { data } = await Axios.post(
        `${API_URL}/employee/reset-password`,
        payload.data
      );
      payload.callback();
      actions.setLoading();
      console.log(payload.data);
      console.log(data);
    } catch (e) {
      actions.setLoading();
    }
  }),
  logOut: thunk(async (actions) => {
    try {
      actions.init();
      const { data } = await Axios.delete(
        `${API_URL}/employee/logout`,
        requestHeaders
      );
      Cookies.remove("user_token");
      actions.setUser(null);
      console.log(data);
    } catch (e) {
      actions.setLoading();
      console.log(e);
    }
  }),
};

export default auth;
