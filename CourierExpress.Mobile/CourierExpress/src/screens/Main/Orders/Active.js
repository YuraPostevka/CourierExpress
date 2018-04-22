import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { fetchActiveOrders } from "../../../actions/ordersAction";
import { connect } from "react-redux";

export class Active extends Component {

    static navigationOptions = {
        tabBarOnPress: (props) => {
            props.jumpToIndex(props.scene.index);
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
        };
    }

    componentDidMount() {
        this.props.fetchActiveOrders(this.props.account.id)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>
                            Активні
                </Text>
                    </View>
                    <Text>
                        {this.state.error}
                    </Text>

                    <View style={styles.mapContainer}>
                        {/* <MapView
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
                        </MapView> */}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account
});

const mapDispatchToProps = dispatch => ({
    fetchActiveOrders: (userId) => dispatch(fetchActiveOrders(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Active);

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
    mapContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: 300,
        width: 300,
    }
});