import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, KeyboardAvoidingView, Dimensions
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlacesAutoComplete from "./PlacesAutoComplete";

var width = Dimensions.get('window').width;

export default class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            name: "",
            description: "",
            from: "",
            to: "",
            price: "",
            weight: "",
            time: ""
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

                <TextInput style={styles.field}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='default'
                    returnKeyType="next"
                    placeholder='Опис'
                    maxLength={20}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                />


                <TextInput style={styles.field}
                    placeholder='Звідки'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                />

                {/* <PlacesAutoComplete
                    placeholder="Звідки"
                />
                <PlacesAutoComplete
                    placeholder="Куди"
                /> */}
                <View style={{
                    position: "absolute",
                    bottom: 0,
                    width: width
                }}>
                    <Button
                        style={{
                            position: 'absolute',
                            bottom: 0,
                        }}
                        onPress={this.onSubmit}
                        title="Сворити"
                        color="#2980b6"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2C3E',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
        alignSelf: "center",
        width: "80%",
        color: "#fff",
        borderBottomWidth: 0.2,
        borderBottomColor: "#fff",
        padding: 16,
        paddingBottom: 2
    }
});