import axios from "axios";

const baseUrlStore = "http://localhost:5000/store";

export const fetchStore = () => {
  return (dispatch) => {
    axios
      .get(baseUrlStore)
      .then(({ data }) => {
        dispatch({ type: "FETCH_STORE", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addStore = (dataAdd) => {
  return (dispatch) => {
    const { store_name, store_address } = dataAdd;
    axios
      .post(
        baseUrlStore,
        { store_name, store_address },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        dispatch({
          type: "ADD_STORE",
          payload: { store_name, store_address, id: data.id },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editStore = (dataEdit) => {
  return (dispatch) => {
    const { store_name, store_address, id } = dataEdit;
    axios
      .patch(
        baseUrlStore + "/" + id,
        { store_name, store_address },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then((result) => {
        // console.log(result);
        dispatch({
          type: "EDIT_STORE",
          payload: { store_name, store_address, id },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteStore = (dataDelete) => {
  return (dispatch) => {
    axios
      .delete(baseUrlStore + "/" + dataDelete.id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then((result) => {
        console.log(result);
        dispatch({
          type: "DELETE_STORE",
          payload: dataDelete,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
