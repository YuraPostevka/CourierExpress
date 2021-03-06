import OrderService from "../services/orderService";
import {
    AsyncStorage,
    Alert
} from 'react-native';

export const fetchAllOrdersSuccess = response => ({
    payload: response,
    type: "ALL_ORDERS_SUCCESS",
});

export const fetchAllOrdersFailure = response => ({
    type: "ALL_ORDERS_FAILURE",
});

export const fetchOrderDetailsSuccess = response => ({
    payload: response,
    type: "ORDER_DETAILS_SUCCESS",
});

export const fetchOrderDetailsFailure = response => ({
    type: "ORDER_DETAILS_FAILURE",
});

export const fetchActiveOrdersSuccess = response => ({
    payload: response,
    type: "ACTIVE_ORDERS_SUCCESS",
});

export const fetchActiveOrdersFailure = response => ({
    payload: response,
    type: "ACTIVE_ORDERS_FAILURE",
});

export const addOrder = response => ({
    type: "ADD_ORDER"
});

export const fetchAllOrders = () => {
    return dispatch => {
        return OrderService.getAll()
            .catch(error => {
                Alert.alert("Error");
                dispatch(fetchAllOrdersFailure());
            }).
            then(response => {
                if (response.code && response.code !== 200) {
                    dispatch(fetchAllOrdersFailure());
                    Alert.alert(response.message);
                }
                else {
                    dispatch(fetchAllOrdersSuccess(response));
                }
            });

    };
};

export const add = (order) => {
    return dispatch => {
        return OrderService.add(order)
            .then(response => {
                if (response.code && response.code !== 200) {
                    Alert.alert(response.message);
                }
                else {
                    this.fetchAllOrders();
                    dispatch(addOrder(response));
                }
            });
    };
};

export const fetchOrderDetails = (id) => {
    return dispatch => {
        return OrderService.getOrderDetails(id)
            .then(response => {
                if (response.code && reposnse.code !== 200) {
                    dispatch(fetchOrderDetailsFailure());
                    Alert.alert(response.message)
                }
                else {
                    dispatch(fetchOrderDetailsSuccess(response));
                }
            });
    };
};

export const fetchCourierActive = (userId) => {
    return dispatch => {
        return OrderService.getCourierActive(userId)
            .then(response => {
                console.log(response);
                if (response.code && reposnse.code !== 200) {
                    dispatch(fetchActiveOrdersFailure());
                    Alert.alert(response.message)
                }
                else {
                    dispatch(fetchActiveOrdersSuccess(response));
                }
            });
    };
};

export const fetchOwnerActive = (userId) => {
    return dispatch => {
        return OrderService.getOwnerActive(userId)
            .then(response => {
                if (response.code && reposnse.code !== 200) {
                    dispatch(fetchActiveOrdersFailure());
                    Alert.alert(response.message)
                }
                else {
                    dispatch(fetchActiveOrdersSuccess(response));
                }
            });
    };
};