import Cookies from "js-cookie";

// const cookie = new Cookies();
const token = Cookies.get("user_token");

export const requestHeaders = { headers: { Authorization: `Bearer ${token}` } };
