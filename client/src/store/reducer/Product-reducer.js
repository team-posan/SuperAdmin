const initialState = {
  dataProduct: [],
  lodongProduct: true,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_PRODUCT":
      return { ...state, dataProduct: payload, loadingProduct: false };
    case "ADD_PRODUCT":
      // console.log("massuk add reducer product");
      return { ...state, dataProduct: state.dataProduct.concat(payload) };
    default:
      return state;
    case "EDIT_STORE":
      const editedData = state.dataProduct.map((val, index) => {
        if (val.id === payload.id) {
          return (state.dataProduct[index] = payload);
        } else {
          return (state.dataProduct[index] = val);
        }
      });
      return { ...state, dataProduct: editedData };
    case "DELETE_STORE":
      const filteredData = state.dataProduct.filter((val) => {
        return val.id !== payload.id;
      });
      return { ...state, dataProduct: filteredData };
  }
}

export default Reducer;
