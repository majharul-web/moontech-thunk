import { json } from "react-router-dom";
import { addProduct } from "../../actions/productAction";

export const addProductData = (product) => async (dispatch) => {
  const res = await fetch("http://localhost:5000/product", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await res.json();
  if (data.acknowledged) {
    dispatch(
      addProduct({
        _id: data.insertedId,
        ...product,
      })
    );
  }
};
