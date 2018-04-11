import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert
} from 'react-native';
import Icon from "../../../../node_modules/react-native-vector-icons/Octicons";
import MoneyIcon from "../../../../node_modules/react-native-vector-icons/FontAwesome";
import WeightIcon from "../../../../node_modules/react-native-vector-icons/MaterialCommunityIcons";
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { fetchOrderDetails } from "../../../actions/ordersAction";
import OrderService from "../../../services/orderService";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export class OrderDetails extends Component {
    constructor(props) {
        super(props);

        this.mapRef = null;

        this.state = {
            orderDetails: null
        };

        this.onPress = this.onPress.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params;
        if (id && id !== null) {

            this.props.fetchOrderDetails(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.orderDetails !== null) {
            this.setState({
                orderDetails: nextProps.orderDetails
            }, () => {
                let coords = JSON.parse(nextProps.orderDetails.coordinates);
                // this.mapRef.fitToCoordinates(
                //     [coords.startPoint, coords.endPoint],
                //     false//not animated
                // );
                this.mapRef.fitToElements(true);
            });

        }
    }

    onPress() {
        this.props.navigation.goBack();
        // if (this.state.orderDetails.id === this.props.account.id) {
        //     //delete
        // }
        // else {
        //     OrderService.accept(this.state.orderDetails.id, this.props.account.id)
        //         .then(res => {
        //             if (res.code && res.code !== 200) {
        //                 Alert.alert(res.message);
        //             }
        //             else {
        //                 
        //             }
        //         });
        // }
    }

    render() {
        let coords = null;
        if (this.state.orderDetails !== null) {
            // Alert.alert(this.state.orderDetails.coordinates);
            coords = JSON.parse(this.state.orderDetails.coordinates);
        }
        return (
            <View style={styles.container}>
                {this.state.orderDetails !== null &&
                    <View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 20, color: "#fff", alignSelf: 'flex-start', position: "absolute" }}>
                                {this.state.orderDetails.owner.name}
                            </Text>
                            <Text style={{ fontSize: 20, color: "#fff", alignSelf: 'flex-end' }}>
                                {this.state.orderDetails.owner.phoneNumber}
                            </Text>
                        </View>

                        <View style={styles.card}>

                            <View style={{
                                paddingBottom: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: width - 30,
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#fff"
                                }}>
                                    {this.state.orderDetails.description}
                                </Text>
                            </View>

                            <View style={{}}>

                                <View style={{
                                    paddingBottom: 5,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: width - 30,
                                }}>
                                    <WeightIcon style={{ marginRight: 10 }} name="weight-kilogram" size={30} color={"white"} />
                                    <Text style={styles.text}>
                                        {this.state.orderDetails.weight} грам
                                    </Text>
                                </View>

                                <View style={{
                                    position: "absolute",
                                    right: 0,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <MoneyIcon style={{ marginRight: 10 }} name="money" size={35} color={"white"} />
                                    <Text style={{ color: "#fff", fontSize: 20 }}>
                                        {this.state.orderDetails.price}грн
                                    </Text>
                                </View>

                            </View>

                            <View style={{ position: "relative" }}>
                                <View style={styles.line}>
                                    <Icon style={{ marginRight: 10 }} name="location" size={30} color={"white"} />
                                    <Text style={styles.text}>
                                        {this.state.orderDetails.startPoint} -  {this.state.orderDetails.endPoint}
                                    </Text>
                                </View>
                            </View>

                            <View>
                                <MapView
                                    ref={(ref) => { this.mapRef = ref }}
                                    mapType='terrain'
                                    style={styles.map}
                                    onMapReady={() => {
                                        this.mapRef.fitToElements(true)
                                    }
                                    }
                                    initialRegion={{
                                        latitude: 48.292079,
                                        longitude: 25.935837,
                                        latitudeDelta: 0.019,
                                        longitudeDelta: 0.019
                                    }}
                                >
                                    <Marker
                                        coordinate={coords.startPoint !== null ? coords.startPoint : {}}
                                        title={this.state.orderDetails.startPoint}
                                    />
                                    <Marker
                                        coordinate={coords.endPoint !== null ? coords.endPoint : {}}
                                        title={this.state.orderDetails.endPoint}
                                    />

                                    <MapViewDirections
                                        origin={coords.startPoint !== null ? coords.startPoint : {}}
                                        destination={coords.endPoint !== null ? coords.endPoint : {}}
                                        apikey={"AIzaSyDkbm-aj_E9xZj5U9fUyU71c0rpeGVHe2Q"}
                                        mode={"walking"}
                                        strokeWidth={5}
                                        strokeColor="#0B94D8"
                                    />
                                </MapView>
                            </View>
                        </View>


                        <View>
                            <TouchableOpacity
                                onPress={this.onPress}
                                style={styles.go}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "#fff",
                                        alignSelf: "center"
                                    }}>
                                    {this.state.orderDetails.id === this.props.account.id ? "Видалити" : "Вперед!"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOrderDetails: (id) => dispatch(fetchOrderDetails(id)),
});

const mapStateToProps = state => ({
    orderDetails: state.orders.orderDetails,
    account: state.account
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: '#1A2C3E',
        alignItems: 'center',
    },
    line: {
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 30,
    },
    card: {
        width: width - 10,
        height: height - 200,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#18222c"
    },
    text: {
        color: "#fff",
    },

    map: {
        height: 220,
    },
    go: {
        width: "30%",
        height: 30,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#BD3618"
    }
});