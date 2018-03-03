import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import Icon from "../../node_modules/react-native-vector-icons/Octicons";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../components/Main/Main";
import CreateOrder from "../components/Main/CreateOrder";

export const AuthStack = TabNavigator({
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
        initialRouteName: "Register",
        tabBarOptions: {
            tabStyle: {
                backgroundColor: "#2c3e50",
            },
        },
        lazy: false,
    });

export const MainStack = TabNavigator({
    Main: {
        screen: Main
    }
}, {
        initialRouteName: "Main",
        tabBarOptions: {
            tabStyle: {
                backgroundColor: "#2c3e50",
            },
        },
        lazy: false,
    });

export const Root = StackNavigator({
    AuthStack: {
        screen: AuthStack,
    },
    MainStack: {
        screen: MainStack
    },
    CreateOrder: {
        screen: CreateOrder
    }
}, {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: "MainStack",
    });