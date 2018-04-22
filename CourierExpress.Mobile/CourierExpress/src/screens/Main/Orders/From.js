import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, KeyboardAvoidingView, Dimensions
} from 'react-native';
import PlacesAutoComplete from "./PlacesAutoComplete";

export default class From extends Component {

    render() {
        return (
            <View style={styles.container}>
                <PlacesAutoComplete
                    placeholder={"Почніть вводити"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2C3E',
    }
});