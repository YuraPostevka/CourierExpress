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

export const fetchAllOrders = () => {
    return dispatch => {
        return OrderService.getAll()
            .catch(error => {
                Alert.alert("Error");
                dispatch(fetchAllOrdersFailure());
            }).
            then(response => {
                if (response.error) {
                    dispatch(fetchAllOrdersFailure());
                    Alert.alert("Error");
                }
                else {
                    dispatch(fetchAllOrdersSuccess(response));
                }
            });

    };
};

export const fetchOrderDetailsSuccess = response => ({
    payload: response,
    type: "ORDER_DETAILS_SUCCESS",
});

export const fetchOrderDetailsFailure = response => ({
    type: "ORDER_DETAILS_FAILURE",
});

export const fetchOrderDetails = (id) => {
    return dispatch => {
        return OrderService.getOrderDetails(id)
            .then(response => {
                if (response.error) {
                    dispatch(fetchOrderDetailsFailure());
                    Alert.alert("Smth wrong!!!")
                }
                else {
                    dispatch(fetchOrderDetailsSuccess(response));
                }
            });
    };
};