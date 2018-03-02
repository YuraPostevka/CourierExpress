import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RegisterForm from "./RegisterForm";

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register'
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