import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>
                    Courier Express
            </Text>
            </View>
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
