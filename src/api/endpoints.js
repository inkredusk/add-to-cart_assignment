import { genericApiCall } from './apiUtil';

export const getAllProducts = () => genericApiCall('get', process.env.REACT_APP_GET_ALL_PRODUCTS);
export const getProductById = (id) => genericApiCall('get', `${process.env.REACT_APP_GET_PRODUCT_BY_ID}/${id}`);
export const addProduct = (data) => genericApiCall('post', process.env.REACT_APP_CREATE_PRODUCT, data);

// cartApi
export const addToCart = (productId) => genericApiCall('post', process.env.REACT_APP_ADD_TO_CART, { productId });
export const getAllCartItems = () => genericApiCall('get', process.env.REACT_APP_GET_ALL_CART_ITEMS);
export const getTotalPrice = () => genericApiCall('get', process.env.REACT_APP_GET_TOTAL_PRICE);
export const getTotalQuantity = () => genericApiCall('get', process.env.REACT_APP_GET_TOTAL_QUANTITY);

export const updateCartQuantity = (cartItemId, quantityChange) => genericApiCall('post', process.env.REACT_APP_UPDATE_QUANTITY, {cartItemId, quantityChange});
export const removeFromCart = (cartId) => genericApiCall('post', process.env.REACT_APP_DELETE_ITEM_FROM_CART, { cartId });
