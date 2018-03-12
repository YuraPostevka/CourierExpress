import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
// import Marker from 'react-native-maps';

import { connect } from "react-redux";

export class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
        };

        this.onGetCurrentPosition = this.onGetCurrentPosition.bind(this);
    }
    componentDidMount() {
        this.onGetCurrentPosition();
    }

    onGetCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);

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

    componentWillReceiveProps(nextProps) {
        if (!nextProps.account.isLoggedIn) {
            nextProps.navigation.navigate("Login");
        }
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>
                            My orders
                </Text>
                    </View>
                    <Text>
                        {this.state.error}
                    </Text>

                    <View style={styles.mapContainer}>
                        <MapView
                            mapType='satellite'
                            style={styles.map}
                        >
                            {this.state.error !== null &&
                                <MapView.Marker
                                    coordinate={{
                                        latitude: this.state.latitude,
                                        longitude: this.state.longitude,
                                    }}
                                    title={"title"}
                                    description={"de"} />
                            }
                        </MapView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account
});

export default connect(mapStateToProps)(MyOrders);

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
    mapContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: 300,
        width: 300,
    }
});