import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, KeyboardAvoidingView, Dimensions
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlacesAutoComplete from "./PlacesAutoComplete";
import OrderService from "../../../services/orderService";
import store from "../../../store";
import { fetchAllOrders } from "../../../actions/ordersAction";

var width = Dimensions.get('window').width;

export default class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            startPoint: "Головна  240",
            endPoint: "Руська 100",
            price: "",
            weight: "",
        };
        this.add = this.add.bind(this);
    }

    add() {
        const { description, startPoint, endPoint, price, weight } = this.state;
        const { ownerId } = this.props.navigation.state.params;

        const coordinates = {
            "startPoint": { "latitude": 48.260229, "longitude": 25.954463 },
            "endPoint": { "latitude": 48.288735, "longitude": 25.953587 }
        };
        let order = {
            ownerId,
            description,
            startPoint,
            endPoint,
            price,
            weight,
            coordinates: JSON.stringify(coordinates)
        };

        OrderService.add(order)
            .then(resp => {
                if (resp.code && resp.code === 200) {
                    store.dispatch(fetchAllOrders());
                    this.props.navigation.goBack();
                }
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        const disabled = this.state.description === "" || this.state.price === "" || this.state.weight === "";
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
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='default'
                    returnKeyType="next"
                    placeholder='Звідки'
                    maxLength={20}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    // onChangeText={(startPoint) => this.setState({ startPoint })}
                    value={this.state.startPoint}
                />
                <TextInput style={styles.field}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='default'
                    returnKeyType="next"
                    placeholder='Куди'
                    maxLength={20}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    // onChangeText={(endPoint) => this.setState({ endPoint })}
                    value={this.state.endPoint}
                />
                <TextInput style={styles.field}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='numberic'
                    returnKeyType="next"
                    placeholder='Ціна'
                    maxLength={20}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(price) => this.setState({ price })}
                    value={this.state.price}
                />
                <TextInput style={styles.field}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='numeric'
                    returnKeyType="next"
                    placeholder='Вага'
                    maxLength={20}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(weight) => this.setState({ weight })}
                    value={this.state.weight}
                />
                <View>
                    <TouchableOpacity
                        onPress={this.add}
                        disabled={disabled}
                        style={styles.add}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: "#fff",
                                alignSelf: "center"
                            }}>
                            Створити
                            </Text>
                    </TouchableOpacity>
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
    },
    add: {
        width: "30%",
        height: 30,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#BD3618",
        margin: 20
    },
    addDisabled: {
        opacity: 0.5
    }
});