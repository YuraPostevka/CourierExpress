import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import Icon from "../../node_modules/react-native-vector-icons/Octicons";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyOrders from "../components/Main/MyOrders";
import AllOrders from "../components/Main/AllOrders";
import CreateOrder from "../components/Main/CreateOrder";

// export const AuthStack = TabNavigator({
// });

export const MainStack = TabNavigator({
    MyOrders: {
        screen: MyOrders
    },
    AllOrders: {
        screen: AllOrders
    },
},
    {
        lazy: false,
        tabBarPosition: "bottom",
        tabBarOptions: {
            tabStyle: {
                backgroundColor: "#2c3e50",
            },
        },
    }
);

export const Root = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Log in',
        },
    },
    Register: {
        screen: Register,
    },

    Main: {
        screen: MainStack
    },
    CreateOrder: {
        screen: CreateOrder
    }
}, {

        mode: 'modal',
        headerMode: 'none',
        initialRouteName: "Login",
    });