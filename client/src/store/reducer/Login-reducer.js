import { ADMIN_LOGIN } from "../action";

const initialState = {
  loginStatus:false,
  loginError:false
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADMIN_LOGIN:
      return { ...state, loginStatus:true };
    case 'LOGOUT_SUCCESS' :
      return {...state, loginStatus:false}
    default:
      return state;
  }
}

export default Reducer;
