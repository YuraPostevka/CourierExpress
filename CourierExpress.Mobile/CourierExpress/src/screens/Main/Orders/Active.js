import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, TouchableOpacity, FlatList, Button } from 'react-native';
import { fetchCourierActive, fetchOwnerActive } from "../../../actions/ordersAction";
import { connect } from "react-redux";
import OrderCard from "./OrderCard";
import store from "../../../store";

export class Active extends Component {

    static navigationOptions = {
        tabBarOnPress: (props) => {
            store;
            props.jumpToIndex(props.scene.index);
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        };

        this.getCourierOrders = this.getCourierOrders.bind(this);
        this.getOwnerOrders = this.getOwnerOrders.bind(this);
        this.setActive = this.setActive.bind(this);
        this.goToDetails = this.goToDetails.bind(this);
    }

    componentDidMount() {
        this.getCourierOrders();
    }

    setActive(activeTab) {
        this.setState({
            activeTab: activeTab
        });
    }

    getCourierOrders() {
        this.setActive(1);
        this.props.fetchCourierActive(this.props.account.id);
    }

    getOwnerOrders() {
        this.setActive(2);
        this.props.fetchOwnerActive(this.props.account.id);
    }

    goToDetails(id) {
        this.props.navigation.navigate("ActiveOrderDetails", { id });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 30, color: "#fff" }}>
                        Активні
                        </Text>
                </View>

                <View style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.getCourierOrders}
                        style={[styles.courier, this.state.activeTab === 1 ? styles.activeButton : {}]}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: "#fff",
                                alignSelf: "center"
                            }}>
                            Я кур'єр
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.getOwnerOrders}
                        style={[styles.owner, this.state.activeTab === 2 ? styles.activeButton : {}]}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: "#fff",
                                alignSelf: "center"
                            }}>
                            Я замовник
                            </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <FlatList
                        data={this.props.activeOrders}
                        renderItem={({ item }) => (
                            < TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => this.goToDetails(item.id)}
                            >
                                <OrderCard order={item} ownerOrder={this.props.account.id === item.ownerId} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View >
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    activeOrders: state.orders.activeOrders
});

const mapDispatchToProps = dispatch => ({
    fetchCourierActive: (userId) => dispatch(fetchCourierActive(userId)),
    fetchOwnerActive: (userId) => dispatch(fetchOwnerActive(userId)),
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
    courier: {
        flex: 1,
        width: "30%",
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderRightWidth: 0,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: "#1A2C3E",
        margin: 5,
        marginRight: 0
    },
    owner: {
        flex: 1,
        width: "30%",
        height: 30,
        borderWidth: 1,
        borderColor: "#fff",
        borderLeftWidth: 0,

        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,

        backgroundColor: "#1A2C3E",
        margin: 5,
        marginLeft: 0
    },
    activeButton: {
        backgroundColor: "#BD3618",
    }
});