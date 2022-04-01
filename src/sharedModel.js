var store = {};
var cartItems = [];
var wishlist = [];
export const saveStore = (key, data) => {
    store[key] = data;
}

export const getStore = (key) => {
    return store[key];
}

export const addToCart = (item) => {
    cartItems.push(item);
}

export const getCartItems = (item) => {
    return cartItems;
}

export const resetCart = () => {
    cartItems = [];
}

export const removeCartItemById = (id) => {
    cartItems = cartItems.filter(item => item.productId !== id);
    return cartItems;
}

export const addToWishList = (item) => {
    wishlist.push(item);
}

export const getWishlist = (item) => {
    return wishlist;
}

export const resetWishlist = () => {
    wishlist = [];
}

export const removeWishlistItemById = (id) => {
    wishlist = wishlist.filter(item => item.productId !== id);
    return wishlist;
}