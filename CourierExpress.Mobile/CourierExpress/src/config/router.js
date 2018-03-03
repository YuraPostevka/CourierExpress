import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import Icon from "../../node_modules/react-native-vector-icons/Octicons";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Overview from "../components/Overview/Overview";

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
        initialRouteName: "Register",
        tabBarOptions: {
            tabStyle: {
                backgroundColor: "#2c3e50",
            },
        },
        lazy: false,
    });

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    Overview: {
        screen: Overview
    }
}, {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: "Tabs",
    });