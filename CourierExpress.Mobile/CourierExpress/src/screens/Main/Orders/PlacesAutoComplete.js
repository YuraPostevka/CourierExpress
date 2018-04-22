import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, KeyboardAvoidingView, Dimensions
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class PlacesAutoComplete extends Component {

    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder={this.props.placeholder ? this.props.placeholder : "Placeholder"}
                minLength={3}
                autoFocus={false}
                returnKeyType={'search'}
                listViewDisplayed='auto'
                fetchDetails={true}
                renderDescription={row => row.description}
                onPress={(data, details = null) => {
                    console.log(data, details);
                }}
                getDefaultValue={() => ''}
                query={{
                    key: 'AIzaSyC6dMZKkK7f2DG1DrIRVNnVKsTSLLiLIVE',
                    language: 'ua',
                    types: ['address']
                }}

                styles={{
                    container: {
                        width: "80%",
                        alignSelf: "center",
                        margin: 0
                    },
                    description: {
                        color: "#fff",
                    },
                    textInputContainer: {
                        margin: 0,
                        backgroundColor: 'transparent',
                        borderBottomWidth: 0.5,
                        alignSelf: "center"
                    },
                    textInput: {
                        backgroundColor: 'transparent',
                        padding: 0,
                        margin: -5,
                        height: 38,
                        color: "#fff",
                        opacity: 1,
                        fontSize: 14
                    }
                }}

                nearbyPlacesAPI='GooglePlacesSearch'
                GooglePlacesSearchQuery={{
                    rankby: 'distance',
                    types: 'food'
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                debounce={200}
            />
        );
    }
}