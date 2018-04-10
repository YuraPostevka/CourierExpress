import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            password: "",
            name: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        fetch("http://courierexpressapp.azurewebsites.net/api/account/register",
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    phoneNumber: this.state.number,
                    password: this.state.password,
                }),
            },
        )
            .then((response) => response)
            .then(() => {
                this.setState({
                    number: "",
                    password: "",
                    name: ""
                });
                this.props.navigate("Login");
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
                    returnKeyType="next"
                    placeholder="Введіть ім'я"
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
                    placeholder='+380 00 00 000'
                    maxLength={12}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(number) => this.setState({ number })}
                    value={this.state.number}
                />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    placeholder='Пароль'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <Button
                    onPress={this.onSubmit}
                    title="Зареєструватися"
                    color="#2980b6"
                    disabled={this.state.number === "" || this.state.password === "" || this.state.name === ""}
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