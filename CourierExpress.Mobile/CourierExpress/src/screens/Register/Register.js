import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import RegisterForm from "./RegisterForm";

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <RegisterForm
                        navigate={navigate} />

                    <TouchableOpacity
                        style={styles.redirectButton}
                        onPress={() => navigate("Login")}
                    >
                        <Text style={styles.redirectButtonText}>
                            Вже маю аккаунт
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