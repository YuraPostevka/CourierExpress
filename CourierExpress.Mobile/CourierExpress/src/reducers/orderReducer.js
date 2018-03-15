let defaultState = {
    orders: [],
    orderDetails: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "ALL_ORDERS_SUCCESS":
            return {
                ...state,
                orders: action.payload,
            };
        case "ALL_ORDERS_FAILURE":
            return {
                ...state,
                orders: [...defaultState.orders]
            };
        case "ORDER_DETAILS_SUCCESS": {
            return {
                ...state,
                orderDetails: action.payload
            }
        }
        case "ORDER_DETAILS_FAILURE": {
            return {
                ...state,
                orderDetails: { ...defaultState.orderDetails }
            }
        }
        default:
            return state;
    }
};