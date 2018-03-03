import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Keyboard } from 'react-native';

// create a component
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            password: "",
            token: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        Keyboard.dismiss();
        fetch("http://courierexpressapp.azurewebsites.net/api/token",
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: this.state.number,
                    password: this.state.password,
                }),
            },
        )
            .then((response) => response.json())
            .then((resp) => {
                // this.setState({
                //     number: "",
                //     password: "",
                // });
                Alert.alert("Something wrong!!!");
                // this.props.navigate("Overview");

            })
            .catch((error) => {
                Alert.alert("Something wrong!!!");
                return Promise(error);
            });
    }

    render() {
        return (
            <View>
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
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <Button
                    onPress={this.onSubmit}
                    title="Login"
                    color="#2980b6"
                    disabled={this.state.number === "" || this.state.password === ""}
                />
            </View>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});