import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import IconIonicons from "../../node_modules/react-native-vector-icons/Ionicons";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

import Main from "../screens/Main/Main";
import Active from "../screens/Main/Orders/Active";
import AllOrders from "../screens/Main/Orders/AllOrders";
import OrderDetails from "../screens/Main/Orders/OrderDetails";
import ActiveOrderDetails from "../screens/Main/Orders/ActiveOrderDetails";
import CreateOrder from "../screens/Main/Orders/CreateOrder";
import From from "../screens/Main/Orders/From";
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
    CreateOrder: {
        screen: CreateOrder,
        navigationOptions: {
            tabBarVisible: false,
            headerTintColor: '#fff',
            headerFontSize: "5px",
            headerStyle: {
                backgroundColor: "#1A2C3E",
            },
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        }
    },
    From: {
        screen: From,
        navigationOptions: {
            tabBarVisible: false,
            headerTintColor: '#fff',
            headerFontSize: "5px",
            headerStyle: {
                backgroundColor: "#1A2C3E",
            },
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        }
    }
},
    {
        mode: 'card',
        headerMode: 'screen',
        initialRouteName: "AllOrders",
    }
);

export const ActiveOrdersStack = StackNavigator({
    Active: {
        screen: Active,
        navigationOptions: {
            header: null,
            tabBarIcon: () => {
                return <IconIonicons name="ios-walk-outline" size={25} color={"white"} />;
            }
        }
    },
    ActiveOrderDetails: {
        screen: ActiveOrderDetails,
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
    }
},
    {
        mode: 'card',
        headerMode: 'screen',
        initialRouteName: "Active",
    }
);

export const MainStack = TabNavigator({
    Active: {
        screen: ActiveOrdersStack
    },
    AllOrders: {
        screen: AllOrdersStack,

    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon: () => {
                return <IconIonicons name="ios-settings-outline" size={25} color={"white"} />;
            }
        }
    },
},
    {
        initialRouteName: "AllOrders",
        tabBarOptions: {
            showLabel: false,
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

