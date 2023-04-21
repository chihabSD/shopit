import axios from "axios";

// save the cart
export const saveCart = async (cart) => {
  try {
    const { data } = await axios.post("/api/user/saveCart", {
      cart,
    });
    return data;
  } catch (error) {
    return response.data.error.message;
  }
};
// save the address
export const saveAddress = async (address, userId) => {
  try {
    const { data } = await axios.post("/api/user/saveAddress", {
      address,
      userId,
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
// change the address
export const changeActiveAddress = async (id) => {
  try {
    const { data } = await axios.put("/api/user/manageAddress", {
      id,
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
// delete address
export const deleteAddress = async (id) => {
  try {
    const { data } = await axios.delete("/api/user/manageAddress", {
      data: { id },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
// apply coupon
export const applyCoupon = async (coupon) => {
  const { data } = await axios.post("/api/user/applyCoupon", {
    coupon,
  });
  return data;
};
