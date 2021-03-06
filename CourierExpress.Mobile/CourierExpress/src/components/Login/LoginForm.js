import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, Button, Keyboard,
    Alert, AsyncStorage
} from 'react-native';
import { connect } from "react-redux";
import { login } from "../../actions/accountAction";

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            password: "",
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
    }

    onSubmit() {
        Keyboard.dismiss();

        this.props.login(this.state.number, this.state.password);
        this.props.navigate("Active");
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
                    maxLength={13}
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

const mapDispatchToProps = dispatch => ({
    login: (number, password) => dispatch(login(number, password)),
});

const mapStateToProps = state => ({
    account: state.account
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

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