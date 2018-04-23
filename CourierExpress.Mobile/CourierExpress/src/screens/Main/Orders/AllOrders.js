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
import store from "../../../store";

export class AllOrders extends Component {

    static navigationOptions = {
        tabBarOnPress: (props) => {
            store.dispatch(fetchAllOrders());
            props.jumpToIndex(props.scene.index);
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: false,
            refreshing: false,
        };
        this.goToDetails = this.goToDetails.bind(this);
        this.add = this.add.bind(this);
        this.onTabPress = this.onTabPress.bind(this);
        this.getAll = this.getAll.bind(this);
    }

    onTabPress(props) {
        if (props.scene.route.routeName === "AllOrders") {
            this;
        }
        props.jumpToIndex(props.scene.index);
    }

    onRefresh() {
        this.setState({ refreshing: true });
        this.props.fetchAllOrders();
        this.setState({ refreshing: false });
    }

    getAll() {
        this.props.fetchAllOrders();
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
        this.props.navigation.navigate("CreateOrder", { ownerId: this.props.account.id });
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
    orders: state.orders.orders,
    account: state.account
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