import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, KeyboardAvoidingView, Dimensions
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

var width = Dimensions.get('window').width;

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

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


                <View style={styles.title}>
                    <Text style={{ fontSize: 30, color: "#fff" }}>
                        Створити
                    </Text>
                </View>

                {/* <View> */}
                <TextInput style={styles.field}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='default'
                    returnKeyType="next"
                    placeholder='Description'
                    maxLength={20}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                />

                <GooglePlacesAutocomplete
                    placeholder='From'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}

                    getDefaultValue={() => ''}

                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyC6dMZKkK7f2DG1DrIRVNnVKsTSLLiLIVE',
                        language: 'en', // language of the results,
                        types: ['address'] // default: 'geocode'
                    }}

                    styles={{
                        container: {
                            width: "80%",
                            alignSelf: "center"
                        },
                        description: {
                            color: "#fff",
                        },
                        textInputContainer: {
                            backgroundColor: 'transparent',
                            borderBottomWidth: 0.5,
                            alignSelf: "center"
                            // width: "80%",
                            // alignItems: 'center',
                            // justifyContent: 'center',
                        },
                        textInput: {
                            backgroundColor: 'transparent',
                            padding: 0,
                            margin: -5,
                            height: 38,
                            color: "#fff",
                            fontSize: 14
                        }
                    }}

                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance',
                        types: 'food'
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    // predefinedPlaces={[homePlace, workPlace]}

                    debounce={200}
                />

                {/* </View> */}

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
                        title="Create"
                        color="#2980b6"
                    />
                </View>
            </View>
        );
    }
}

// define your styles
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