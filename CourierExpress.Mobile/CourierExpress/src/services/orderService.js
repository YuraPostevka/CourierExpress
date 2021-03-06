import {
    Alert
} from 'react-native';
import store from "../store";

export default class OrderService {
    static getAll() {
        let token = store.getState().account.token;
        if (token !== null) {
            return fetch("http://courierexpressapp.azurewebsites.net/api/orders/getAll",
            // return fetch("http://10.128.70.181:56096/api/orders/getAll",

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
                    Alert.alert("Error");
                    return Promise(error.error);
                });
        }
        else {
            return Promise.reject("Error");
        }
    }

    static add(order) {
        let token = store.getState().account.token;
        if (token !== null) {
            return fetch("http://courierexpressapp.azurewebsites.net/api/orders/create",
            // return fetch("http://10.128.70.181:56096/api/orders/create",
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(order),
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

    static getOrderDetails(id) {
        let token = store.getState().account.token;
        if (token !== null) {
            let path = "http://courierexpressapp.azurewebsites.net/api/orders/getById";
            // let path = "http://10.128.70.181:56096/api/orders/getById";

            return fetch(`${path}/${id}`,
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
                    Alert.alert("Error");
                    return Promise(error.error);
                });
        }
    }

    static getCourierActive(userId) {
        let token = store.getState().account.token;
        if (token !== null) {
            let path = "http://courierexpressapp.azurewebsites.net/api/orders/getCourierActive";
            // let path = "http://10.128.70.181:56096/api/orders/getCourierActive";

            return fetch(`${path}/${userId}`,
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
                    Alert.alert("Error");
                    return Promise(error.error);
                });
        }
    }

    static getOwnerActive(userId) {
        let token = store.getState().account.token;
        if (token !== null) {
            let path = "http://courierexpressapp.azurewebsites.net/api/orders/getOwnerActive";
            // let path = "http://10.128.70.181:56096/api/orders/getOwnerActive";

            return fetch(`${path}/${userId}`,
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
                    console.log(path);
                    return resp;
                })
                .catch((error) => {
                    console.log(error);
                    Alert.alert("Error");
                    return Promise(error.error);
                });
        }
    }

    static accept(orderId, courierId) {
        let token = store.getState().account.token;
        if (token !== null) {
            let path = "http://courierexpressapp.azurewebsites.net/api/orders/accept";
            // let path = "http://10.128.70.181:56096/api/orders/accept";

            return fetch(`${path}/${orderId}/${courierId}`,
                {
                    method: 'POST',
                    headers: {
                        "Accept": 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    },
                    body: null
                },
            )
                .then(response => response.json())
                .then(resp => {
                    return resp;
                })
                .catch((error) => {
                    Alert.alert(error.error);
                    return Promise(error.error);
                });
        }
    }

    static close(orderId) {
        let token = store.getState().account.token;
        if (token !== null) {
            let path = "http://courierexpressapp.azurewebsites.net/api/orders/close";
            // let path = "http://10.128.70.181:56096/api/orders/close";

            return fetch(`${path}/${orderId}`,
                {
                    method: 'POST',
                    headers: {
                        "Accept": 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    },
                    body: null
                },
            )
                .then(response => response.json())
                .then(resp => {
                    return resp;
                })
                .catch((error) => {
                    Alert.alert(error.error);
                    return Promise(error.error);
                });
        }
    }
}