const initialState = {
  dataStore:[],
  loadingStore:true
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'FETCH_STORE':
      return {...state, dataStore:payload, loadingStore:false}
    case 'ADD_STORE':
      console.log('masuk add store reducers')
      return {...state, dataStore:state.dataStore.concat(payload)}
    case 'EDIT_STORE':
      const editedData = state.dataStore.map((val,index)=>{
        if(val.id === payload.id){
          return state.dataStore[index] = payload
        }else{
          return state.dataStore[index] = val
        }
        
      })
      return {...state, dataStore:editedData}
    case 'DELETE_STORE':
      const filteredData = state.dataStore.filter((val)=>{
        return val.id !== payload.id
      })
      return {...state,dataStore:filteredData}
    default:
      return state;
  }
}

export default Reducer;
