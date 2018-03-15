import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View, Text, StyleSheet, Dimensions
} from 'react-native';
import Icon from "../../../../node_modules/react-native-vector-icons/Octicons";
import MoneyIcon from "../../../../node_modules/react-native-vector-icons/FontAwesome";
import WeightIcon from "../../../../node_modules/react-native-vector-icons/MaterialCommunityIcons";

import { fetchOrderDetails } from "../../../actions/ordersAction";

var width = Dimensions.get('window').width;

export class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetails: null
        };
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
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.orderDetails !== null &&
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}>
                                *Owner name*
                            </Text>
                        </View>

                        <View style={styles.card}>
                            <Icon style={{ marginRight: 10 }} name="package" size={35} color={"white"} />
                            <Text>
                                {this.state.orderDetails.description}
                            </Text>
                        </View>

                        <View style={styles.card}>
                            <Icon style={{ marginRight: 10 }} name="location" size={30} color={"white"} />
                            <Text>
                                {this.state.orderDetails.startPoint} -  {this.state.orderDetails.endPoint}
                            </Text>
                        </View>

                        <View style={styles.card}>
                            <MoneyIcon style={{ marginRight: 10 }} name="money" size={30} color={"white"} />
                            <Text>
                                Price - {this.state.orderDetails.price}
                            </Text>
                        </View>

                        <View style={styles.card}>
                            <WeightIcon style={{ marginRight: 10 }} name="weight-kilogram" size={30} color={"white"} />
                            <Text>
                                {this.state.orderDetails.weight}
                            </Text>
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
    orderDetails: state.orders.orderDetails
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: '#2c3e50',
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 30,
        borderBottomWidth: 0.5,
        borderColor: "#fff",
        margin: 10,
        padding: 10
    }
});