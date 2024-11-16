// import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../actions/cart-actions";
imp
const initialState = {
    productOrder: []
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                productOrder: [...state.productOrder, action.payload]
            };
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                productOrder: state.productOrder.filter(order => order.id !== action.payload)
            };
        default:
            return state;
    }
};

export default orderReducer;
