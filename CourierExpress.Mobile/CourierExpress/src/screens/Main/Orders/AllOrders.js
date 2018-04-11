import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert, RefreshControl,
    FlatList
} from 'react-native';
import { List, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { fetchAllOrders } from "../../../actions/ordersAction";
import OrderCard from "./OrderCard";

export class AllOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: false,
            refreshing: false,
        };
        this.goToDetails = this.goToDetails.bind(this);
        this.add = this.add.bind(this);

    }

    onRefresh() {
        this.setState({ refreshing: true });
        this.props.fetchAllOrders();
        this.setState({ refreshing: false });
    }

    componentDidMount() {
        this.props.fetchAllOrders();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            orders: nextProps.orders,
            loading: false,
            refreshing: false
        });
    }

    componentWillUnmount() {
    }

    goToDetails(id) {
        this.props.navigation.navigate("OrderDetails", { id });
    }

    add() {
        this.props.navigation.navigate("CreateOrder");
    }

    render() {
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
                        <TouchableOpacity
                            onPress={this.add}
                            style={styles.add}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#fff",
                                    alignSelf: "center"
                                }}>
                                Додати
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.orders}
                        renderItem={({ item }) => (
                            < TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.goToDetails(item.id)}
                            >
                                <OrderCard order={item} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View >
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllOrders: () => dispatch(fetchAllOrders()),
});

const mapStateToProps = state => ({
    orders: state.orders.orders
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOrders);

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
    orderList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add: {
        width: "30%",
        height: 30,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#BD3618",
        marginTop: 20
    }
});