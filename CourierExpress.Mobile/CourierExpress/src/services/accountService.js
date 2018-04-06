import {
    Alert
} from 'react-native';
export default class AccountService {
    static login(number, password) {
        return fetch("http://courierexpressapp.azurewebsites.net/api/account/login",
        // return fetch("http://10.128.70.181:56096/api/account/login",

            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: number,
                    password: password,
                }),
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