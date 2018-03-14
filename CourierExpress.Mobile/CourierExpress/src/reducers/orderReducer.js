let defaultState = {
    orders: []
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
                ...defaultState
            };
        default:
            return state;
    }
};