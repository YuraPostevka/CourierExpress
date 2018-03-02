import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';

// create a component
export default class Register extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>
                    Register
                    </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        marginTop: 120,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 40
    }
});

//make this component available to the app
