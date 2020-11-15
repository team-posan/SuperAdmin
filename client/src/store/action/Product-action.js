import { FETCH_PRODUCT } from ".";

export const setProduct = (payload) => {
  return {
    type: FETCH_PRODUCT,
    payload,
  };
};

export const fetchdDataProduct = () => {
  return (dispatch) => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((result) => {
        dispatch(setProduct(result));
      });
  };
};

export const setProduct = (payload) => {
  return (dispatch) => {
    fetch(`http://localhost:5000/product`, {
      method: "POST",
      data: {},
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(setProduct(result));
      });
  };
};
