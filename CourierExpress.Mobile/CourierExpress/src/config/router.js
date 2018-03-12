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
        navigationOptions: {
            tabBarLabel: "My",
            tabBarIcon: () => {
                return <IconIonicons name="ios-home-outline" size={25} color={"white"} />;
            }
        }
    },
    AllOrders: {
        screen: AllOrders,
        navigationOptions: {
            tabBarLabel: "All",
            tabBarIcon: () => {
                return <IconIonicons name="ios-list-box-outline" size={25} color={"white"} />;
            }
        }
    },
    CreateOrder: {
        screen: CreateOrder,
        navigationOptions: {
            tabBarLabel: "Create",
            tabBarIcon: () => {
                return <IconIonicons name="ios-add-circle-outline" size={25} color={"white"} />;
            }
        }
    },
    MyOSettingsrders: {
        screen: Settings,

        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: () => {
                return <IconIonicons name="ios-settings-outline" size={25} color={"white"} />;
            }
        }
    },
},
    {
        initialRouteName: "MyOrders",
        tabBarPosition: "bottom",
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            tabStyle: {
                backgroundColor: "#2c3e50",
            },
            labelStyle: {
                fontSize: 11,
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: 5
            },
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        lazy: true
    }
);

