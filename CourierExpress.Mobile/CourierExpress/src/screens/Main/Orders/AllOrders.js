import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert, RefreshControl
} from 'react-native';
import { connect } from "react-redux";
import { fetchAllOrders } from "../../../actions/ordersAction";

export class AllOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    onRefresh() {
        this.setState({ refreshing: true });
        this.props.fetchAllOrders();
        this.setState({ refreshing: false });
    }

    componentDidMount() {
        this.props.fetchAllOrders();
    }

    componentWillUnmount() {
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            onRefresh={this.onRefresh.bind(this)}
                            refreshing={this.state.refreshing}
                        />
                    }
                >
                    <View style={styles.title}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>
                            All orders
                </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllOrders: () => dispatch(fetchAllOrders()),
});


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOrders);

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
});