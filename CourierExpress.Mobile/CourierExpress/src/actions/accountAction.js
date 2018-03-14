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
                if (response.error) {
                    dispatch(loginFailure());
                    Alert.alert("Incorrect phone number or password!")
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