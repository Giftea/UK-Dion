import axios from "axios";

export const login = async (user) => {
  const result = await axios.post(
    "https://dion-erp.herokuapp.com/api/employees/login",
    user
  );
  return result;
};

export const resetPassword = async (email) => {
  const result = await axios.post(
    "https://dion-erp.herokuapp.com/api/employee/forgot-password",
    email
  );
  return result;
};
