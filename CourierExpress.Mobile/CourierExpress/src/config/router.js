import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import IconIonicons from "../../node_modules/react-native-vector-icons/Ionicons";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

import Main from "../screens/Main/Main";
import MyOrders from "../screens/Main/Orders/MyOrders";
import AllOrders from "../screens/Main/Orders/AllOrders";
import CreateOrder from "../screens/Main/Orders/CreateOrder";
import Settings from "../screens/Main/Settings/Settings";

export const AuthRoot = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Log in',
        },
    },
    Register: {
        screen: Register,
    },
},
    {
        upperCaseLabel: false,
        initialRouteName: "Login",
        mode: 'modal',
        headerMode: 'none',
    }
);

export const MainRoot = StackNavigator({
    Main: {
        screen: Main
    },
}, {


        mode: 'modal',
        headerMode: 'none',
        initialRouteName: "Main",
    });


export const MainStack = TabNavigator({
    MyOrders: {
        screen: MyOrders,
        title: 'Header title',
        navigationOptions: {
            tabBarIcon: () => {
                return <IconIonicons name="ios-home-outline" size={25} color={"white"} />;
            }
        }
    },
    AllOrders: {
        screen: AllOrders,
        navigationOptions: {
            tabBarIcon: () => {
                return <IconIonicons name="ios-list-box-outline" size={25} color={"white"} />;
            }
        }
    },
    CreateOrder: {
        screen: CreateOrder,
        navigationOptions: {
            tabBarIcon: () => {
                return <IconIonicons name="ios-add-circle-outline" size={25} color={"white"} />;
            }
        }
    },
    MyOSettingsrders: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: () => {
                return <IconIonicons name="ios-settings-outline" size={25} color={"white"} />;
            }
        }
    },
},
    {
        initialRouteName: "MyOrders",
        lazy: false,
        tabBarPosition: "bottom",
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            tabStyle: {
                backgroundColor: "#2c3e50",
            },
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        lazy: false
    }
);

