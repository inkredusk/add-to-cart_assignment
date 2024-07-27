// productApi
import { genericApiCall } from "./apiUtil";

export const getAllProducts = () =>
  genericApiCall("get", process.env.REACT_APP_GET_ALL_PRODUCTS);
export const getProductById = (id) =>
  genericApiCall("get", process.env.REACT_APP_GET_PRODUCT_BY_ID);
export const addProduct = (data) =>
  genericApiCall("post", process.env.REACT_APP_CREATE_PRODUCT, data);

// cartApi
export const addToCart = (productId) =>
  genericApiCall("post", process.env.REACT_APP_ADD_TO_CART, { productId });
export const getAllCartItems = () =>
  genericApiCall("get", process.env.REACT_APP_GET_ALL_CART_ITEMS);
export const getTotalPrice = () =>
  genericApiCall("get", process.env.REACT_APP_GET_TOTAL_PRICE);
export const getTotalQuantity = () =>
  genericApiCall("get", process.env.REACT_APP_GET_TOTAL_QUANTITY);

export const updateCartQuantity = (cartItemId, quantityChange) =>
  genericApiCall("post", process.env.REACT_APP_UPDATE_QUANTITY, {
    cartItemId,
    quantityChange,
  });
export const removeFromCart = (cartId) =>
  genericApiCall("post", process.env.REACT_APP_DELETE_ITEM_FROM_CART, {
    cartId,
  });

 
  
export const generatePdf = (selectedCartItems) =>
  genericApiCall("post", process.env.REACT_APP_GENERATE_PDF, selectedCartItems, null, "blob");
  

// export const generatePdf = () =>
//   genericApiCall("get", process.env.REACT_APP_GENERATE_PDF, null, null, "blob");

export const clearSelectedItems = (cartItemIds) =>
  genericApiCall("post", process.env.REACT_APP_SELECTED_ITEM_FROM_CART, cartItemIds);


// export const saveUser = (firstName, lastName, address, email, mobileNo, userName, userPassword) => genericApiCall('post', process.env.REACT_APP_SAVE_USER, { firstName, lastName, address, email, mobileNo, userName, userPassword });
export const signUp = (formData) => genericApiCall('post', process.env.REACT_APP_SIGN_UP, formData);
export const signIn = (formData2) => genericApiCall('post', process.env.REACT_APP_SIGN_IN, formData2);
export const logout = () => genericApiCall('post', process.env.REACT_APP_LOGOUT);
  
