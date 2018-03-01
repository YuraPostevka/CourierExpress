import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

// create a component
export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text
                    style={styles.title}>Courier Express</Text>
                <LoginForm />
            </KeyboardAvoidingView >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    title: {
        justifyContent: 'center',
        marginTop: 120,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 40
    }
});

//make this component available to the app
