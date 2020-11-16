const initialState = {
    dataDashboard: [],
    loadingDashboard: true,
};

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "FETCH_LOG":
            return { ...state, dataDashboard: payload, loadingDashboard: false };
        default:
            return state;

    }
}

export default Reducer;