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
            .then(response => {
                if (response.error) {
                    dispatch(fetchAllOrdersFailure());
                    Alert.alert("Incorrect phone number or password!")
                }
                else {
                    dispatch(fetchAllOrdersSuccess(response));
                }
            });
    };
};