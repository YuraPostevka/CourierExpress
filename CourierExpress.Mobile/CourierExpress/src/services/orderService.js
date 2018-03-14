import {
    Alert
} from 'react-native';
import store from "../store";

export default class OrderService {
    static getAll() {
        let token = store.getState().account.token;
        if (token !== null) {

            return fetch("http://courierexpressapp.azurewebsites.net/api/orders/getAll",
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                },
            )
                .then(response => response.json())
                .then(resp => {
                    return resp;
                })
                .catch((error) => {
                    Alert.alert("error");
                    return Promise(error.error);
                });
        }
    }
}