let defaultState = {
    token: null,
    userName: null,
    id: null,
    phoneNumber: null,
    isLoggedIn: false,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                isLoggedIn: false,
            };
        case "LOG_OUT":
            return {
                ...state,
                token: null,
                userName: null,
                id: null,
                isLoggedIn: false,
                phoneNumber: null
            };
        default:
            return state;
    }
};