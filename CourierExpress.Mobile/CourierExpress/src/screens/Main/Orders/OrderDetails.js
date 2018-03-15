import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View, Text, StyleSheet
} from 'react-native';
import Icon from "../../../../node_modules/react-native-vector-icons/Octicons";
import { fetchOrderDetails } from "../../../actions/ordersAction";

export class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params;
        if (id && id !== null) {
            this.props.fetchOrderDetails(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <View style={styles.container}>
                {}
                <View>
                    <Icon name="package" size={80} color={"white"} />
                </View>
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
        backgroundColor: '#2c3e50',
        alignItems: 'center',
    }
});