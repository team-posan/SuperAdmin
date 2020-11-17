const initialState = {
    dataLog: [],
    loadingLog: true,
};

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "FETCH_LOG":
            return { ...state, dataLog: payload, loadingLog: false };
        default:
            return state;

    }
}

export default Reducer;