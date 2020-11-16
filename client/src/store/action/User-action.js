import axios from "axios";

const baseUrlStore = "http://localhost:5000/";

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get(baseUrlStore + "store")
      .then(({ data }) => {
        dispatch({ type: "FETCH_USER", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addUser = (dataAdd) => {
  return (dispatch) => {
    console.log(dataAdd,'ini action');
    const { username,password,role,StoreId } = dataAdd;
    axios
      .post(
        baseUrlStore + "user/addkasir",
        { username,password,role,StoreId },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        dispatch({
          type: "ADD_USER",
          payload: { username,password,role,StoreId, id: data.id },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editUser = (dataEdit) => {
  return (dispatch) => {
    const { username,password,role,StoreId, id } = dataEdit;
    axios
      .patch(
        baseUrlStore + "/editkasir" + id,
        { username,password,role,StoreId },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then((result) => {
        // console.log(result);
        dispatch({
          type: "EDIT_USER",
          payload: { username,password,role,StoreId, id },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (dataDelete) => {
  return (dispatch) => {
    axios
      .delete(baseUrlStore + "/deletekasir" + dataDelete.id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then((result) => {
        console.log(result);
        dispatch({
          type: "DELETE_USER",
          payload: dataDelete,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
