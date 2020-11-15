import { FETCH_STORE } from ".";

export const setLogin = (payload) => {
  return {
    type: FETCH_STORE,
    payload,
  };
};

export const fetchdDataStore = () => {
  return (dispatch) => {
    fetch(`http://localhost:5000/store`)
      .then((res) => res.json())
      .then((result) => {
        dispatch(setStore(result));
      });
  };
};

export const fetchdDataStore = () => {
  return (dispatch) => {
    fetch(`http://localhost:5000/store`)
      .then((res) => res.json())
      .then((result) => {
        dispatch(setStore(result));
      });
  };
};
