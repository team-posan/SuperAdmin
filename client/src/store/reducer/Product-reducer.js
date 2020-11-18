const initialState = {
  dataProduct: [],
  loadingProduct: true,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_PRODUCT":
      return { ...state, dataProduct: payload, loadingProduct: false };
    case "ADD_PRODUCT":
      // console.log("massuk add reducer product");
      return { ...state, dataProduct: state.dataProduct.concat(payload) };
    case "EDIT_PRODUCT":
      console.log('payloadddd<<<<')
      const editedData = state.dataProduct.map((val, index) => {
        if (val.id === payload.id) {
          return (state.dataProduct[index] = payload);
        } else {
          return (state.dataProduct[index] = val);
        }
      });
      return { ...state, dataProduct: editedData };
    case "DELETE_PRODUCT":
      console.log(payload)
      const filteredData = state.dataProduct.filter((val) => {
        return val.id !== payload.id;
      });
      return { ...state, dataProduct: filteredData };
    default:
      return state;
  }
}

export default Reducer;
