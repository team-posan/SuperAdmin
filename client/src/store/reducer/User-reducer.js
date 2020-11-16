const initialState = {
    dataUser: [],
    loadingUser: true,
  };
  
  function Reducer(state = initialState, { type, payload }) {
    switch (type) {
      case "FETCH_USER":
        return { ...state, dataUser: payload, loadingUser: false };
      case "ADD_USER":
        // console.log('masuk add store reducers')
        return { ...state, dataUser: state.dataUser.concat(payload) };
      case "EDIT_USER":
        const editedData = state.dataUser.map((val, index) => {
          if (val.id === payload.id) {
            return (state.dataUser[index] = payload);
          } else {
            return (state.dataUser[index] = val);
          }
        });
        return { ...state, dataUser: editedData };
      case "DELETE_USER":
        const filteredData = state.dataUser.filter((val) => {
          return val.id !== payload.id;
        });
        return { ...state, dataUser: filteredData };
      default:
        return state;
    }
  }
  
  export default Reducer;
  