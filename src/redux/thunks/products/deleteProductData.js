import { removeFromCart } from "../../actions/productAction";

export const deleteProductData = (_id) => async (dispatch) => {
  const res = await fetch(`http://localhost:5000/product/${_id}`, {
    method: "DELETE",

    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await res.json();
  if (data.acknowledged) {
    dispatch(removeFromCart(_id));
  }
};
