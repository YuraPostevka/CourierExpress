import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView
} from 'react-native';



export default class CreateOrder extends Component {
    static navigationOptions = {
        title: 'My orders',
    };
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
                        Create new ordera
                    </Text>
                </View>
                <ScrollView >

                    {/*   <GooglePlacesAutocomplete
                        placeholder='Search'
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
                            key: 'YOUR API KEY',
                            language: 'en', // language of the results
                            types: '(cities)' // default: 'geocode'
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

                        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                        currentLocationLabel="Current location"
                        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        GoogleReverseGeocodingQuery={{
                            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                        }}
                        GooglePlacesSearchQuery={{
                            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                            rankby: 'distance',
                            types: 'food'
                        }}

                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                        predefinedPlaces={[homePlace, workPlace]}

                        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                        renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
                        renderRightButton={() => <Text>Custom text after the input</Text>}
                    /> */}
                    {/*  <TextInput style={styles.input}
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

                    */}
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
        backgroundColor: '#1A2C3E',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});