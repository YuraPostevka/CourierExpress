import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import IconIonicons from "../../node_modules/react-native-vector-icons/Ionicons";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

import Main from "../screens/Main/Main";
import MyOrders from "../screens/Main/Orders/MyOrders";
import AllOrders from "../screens/Main/Orders/AllOrders";
import OrderDetails from "../screens/Main/Orders/OrderDetails";
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
        headerMode: 'none',
    }
);

export const MainRoot = StackNavigator({
    Main: {
        screen: Main
    },
},
    {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: "Main",
    });

export const AllOrdersStack = StackNavigator({
    AllOrders: {
        screen: AllOrders,
        navigationOptions: {
            header: null,
            tabBarLabel: "Всі",
            tabBarIcon: () => {
                return <IconIonicons name="ios-list-box-outline" size={25} color={"white"} />;
            }
        }
    },
    OrderDetails: {
        screen: OrderDetails,
        navigationOptions: {
            tabBarVisible: false,
            headerTitle: "Деталі",
            headerTintColor: '#fff',
            headerFontSize: "5px",
            headerStyle: {
                backgroundColor: "#1A2C3E",
            },
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        },
    },
},
    {
        mode: 'card',
        headerMode: 'screen',
        initialRouteName: "AllOrders",
    }
);

export const MainStack = TabNavigator({
    MyOrders: {
        screen: MyOrders,
        navigationOptions: {
            tabBarLabel: "Мої",
            tabBarIcon: () => {
                return <IconIonicons name="ios-home-outline" size={25} color={"white"} />;
            }
        }
    },
    AllOrders: {
        screen: AllOrdersStack,

    },
    CreateOrder: {
        screen: CreateOrder,
        navigationOptions: {
            tabBarLabel: "Створити",
            tabBarIcon: () => {
                return <IconIonicons name="ios-add-circle-outline" size={25} color={"white"} />;
            }
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: "Налаштування",
            tabBarIcon: () => {
                return <IconIonicons name="ios-settings-outline" size={25} color={"white"} />;
            }
        }
    },
},
    {
        initialRouteName: "AllOrders",
        tabBarPosition: "bottom",
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            tabStyle: {
                backgroundColor: "#1A2C3E",
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
        lazy: false
    }
);

