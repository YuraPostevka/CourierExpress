import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginForm from "./LoginForm";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <LoginForm
                        navigate={navigate} />
                </View>
            </View >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
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
    }
});