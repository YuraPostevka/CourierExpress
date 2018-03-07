import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView
} from 'react-native';

export default class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };

        this.onGetCurrentPosition = this.onGetCurrentPosition.bind(this);
    }

    onGetCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maxAge: 0
            }
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 30, color: "#fff" }}>
                        Create new order
                    </Text>
                </View>
                <ScrollView >
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder='Pick a username'
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
                        placeholder='Create a password'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        secureTextEntry
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                    <Button
                        onPress={this.onGetCurrentPosition}
                        title="Get current location"
                        color="#2980b6"
                    />
                    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Latitude: {this.state.latitude}</Text>
                        <Text>Longitude: {this.state.longitude}</Text>
                        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                    </View>
                </ ScrollView>
                <Button
                    onPress={this.onSubmit}
                    title="Create"
                    color="#2980b6"
                />
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
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});