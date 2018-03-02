import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';

// create a component
export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            passwrod: "",
            name: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        Alert.alert("pressed");
    }

    render() {
        return (
            <View>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    placeholder='Name'
                    maxLength={12}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='phone-pad'
                    returnKeyType="next"
                    placeholder='Mobile Num'
                    maxLength={12}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(number) => this.setState({ number })}
                    value={this.state.number}
                />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry
                    onChangeText={(passwrod) => this.setState({ passwrod })}
                    value={this.state.passwrod}
                />

                <Button
                    onPress={this.onSubmit}
                    title="Register"
                    color="#2980b6"
                    disabled={this.state.number === "" || this.state.passwrod === "" || this.state.name === ""}
                />
            </View>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
});