import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, KeyboardAvoidingView
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

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

                <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'    // true/false/undefined
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
                        textInputContainer: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth: 0
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                    }}

                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance',
                        types: 'food'
                    }}

                    filterReverseGeocodingByTypes={['locality', 'sublocality', 'administrative_area_level_1']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    predefinedPlaces={[homePlace, workPlace]}

                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                // renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
                // renderRightButton={() => <Text>Custom text after the input</Text>}
                />

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
        backgroundColor: '#1A2C3E',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});