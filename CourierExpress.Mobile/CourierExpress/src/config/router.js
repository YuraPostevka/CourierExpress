import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import Icon from "../../node_modules/react-native-vector-icons/Octicons";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

export const Tabs = TabNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="sign-in" size={20} color={tintColor} />
        },
    },
    Register: {
        screen: Register
    }
},
    {
        tabBarPosition: "top",
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
        }
    });

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    }
}, {
        initialRouteName: 'Login',
        mode: 'modal',
        headerMode: 'none',
    });