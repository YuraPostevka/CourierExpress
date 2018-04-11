import AccountService from "../services/accountService";
import {
    AsyncStorage,
    Alert
} from 'react-native';
export const loginSuccess = response => ({
    payload: response,
    type: "LOGIN_SUCCESS",
});

export const loginFailure = response => ({
    type: "LOGIN_FAILURE",
});

export const login = (number, password) => {
    return dispatch => {
        return AccountService.login(number, password)
            .then(response => {
                if (response.code && response.code !== 200) {
                    dispatch(loginFailure());
                    Alert.alert(response.message);
                }
                else {
                    AsyncStorage.setItem("id", response.id);
                    AsyncStorage.setItem("token", response.token);
                    AsyncStorage.setItem("userName", response.userName);

                    dispatch(loginSuccess(response));
                }
            });
    };
};

export const register = (name, number, password, navigate) => {
    return dispatch => {
        return AccountService.register(name, number, password)
            .then(response => {
                if (response.code && response.code !== 200) {
                    Alert.alert(response.message);
                }
                else {
                    navigate("Login");
                }
            });
    };
};