import { createStore } from "easy-peasy";
import auth from "./auth";

const store = createStore({
  auth,
});

export default store;
