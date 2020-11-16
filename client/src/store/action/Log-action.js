import axios from "axios";

const baseUrlLog = "http://localhost:5000/carts";

export const fetchLog = () => {
    return (dispatch) => {
        axios
            .get(baseUrlLog, {
                headers: {
                    access_token: localStorage.getItem("access_token"),
                },
            })
            .then(({ data }) => {
                dispatch({ type: "FETCH_LOG", payload: data });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
