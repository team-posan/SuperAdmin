import axios from "axios";

const baseUrlDashboard = "http://localhost:5000/carts";

export const fetchLog = () => {
    return (dispatch) => {
        axios
            .get(baseUrlDashboard, {
                headers: {
                    access_token: localStorage.getItem("access_token"),
                },
            })
            .then(({ data }) => {
                dispatch({ type: "FETCH_DASHBOARD", payload: data });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};