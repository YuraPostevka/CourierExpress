import {
    Alert
} from 'react-native';
export default class OrderService {
    static getAll() {
        return fetch("http://courierexpressapp.azurewebsites.net/api/orders/getAll",
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
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