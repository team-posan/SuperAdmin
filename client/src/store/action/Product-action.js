import axios from "axios";

const baseUrlProduct = "http://localhost:5000/product";

export const fetchProduct = () => {
  return (dispatch) => {
    axios
      .get(baseUrlProduct, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        // console.log(data, "data");
        dispatch({ type: "FETCH_PRODUCT", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addProduct = (dataProduct) => {
  return (dispatch) => {
    const { product_name, price, image_url, stock, StoreId } = dataProduct;
    axios
      .post(
        baseUrlProduct,
        {
          product_name,
          price,
          image_url,
          stock,
          StoreId,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        dispatch({
          type: "ADD_PRODUCT",
          payload: {
            product_name,
            price,
            image_url,
            stock,
            StoreId,
            id: data.id,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editProduct = (dataEdit) => {
  return (dispatch) => {
    const { product_name, price, image_url, stock, StoreId, id } = dataEdit;
    axios
      .patch(
        baseUrlProduct + "/" + id,
        { product_name, price, image_url, stock, StoreId },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then((result) => {
        // console.log(result);
        dispatch({
          type: "EDIT_PRODUCT",
          payload: {
            product_name,
            price,
            image_url,
            stock,
            StoreId,
            id,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteProduct = (dataDelete) => {
  console.log(dataDelete, "dataDelete");
  return (dispatch) => {
    axios
      .delete(baseUrlProduct + "/" + dataDelete.id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then((result) => {
        console.log(result);
        dispatch({
          type: "DELETE_PRODUCT",
          payload: dataDelete,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
