import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';

import LoginForm from "./LoginForm";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp();
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress");
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <LoginForm
                        navigate={navigate} />

                    <TouchableOpacity
                        style={styles.redirectButton}
                        onPress={() => navigate("Register")}
                    >
                        <Text style={styles.redirectButtonText}>
                            Register
                             </Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2C3E',
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    redirectButton: {
        alignItems: 'center',
        paddingTop: 10,
    },
    redirectButtonText: {
        color: "#fff"
    }
});