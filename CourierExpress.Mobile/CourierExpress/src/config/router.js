import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import Icon from "../../node_modules/react-native-vector-icons/Octicons";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


export const Tabs = TabNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Log in',
        },
    },
    Register: {
        screen: Register,
    },
}, {
        initialRouteName: "Login",
    });

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
}, {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: "Tabs",
    });