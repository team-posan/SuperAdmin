import { ADMIN_LOGIN } from ".";

export const adminLogin = (payload) => {
  return {
    type: ADMIN_LOGIN,
    payload,
  };
};

export const setUser = (data) => {
  console.log(data, "<---ini di action");
  return (dispatch) => {
    dispatch(adminLogin(data));
  };
};
