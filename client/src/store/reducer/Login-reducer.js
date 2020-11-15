import { ADMIN_LOGIN } from "../action";
const initialState = {
  login: { username: "", password: "" },
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADMIN_LOGIN:
      return { ...state, login: payload };
    default:
      // console.log(`ini di default reducer login`);
      return state;
  }
}

export default Reducer;
