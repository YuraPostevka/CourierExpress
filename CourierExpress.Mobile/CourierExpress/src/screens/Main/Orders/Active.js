import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { fetchCourierActive } from "../../../actions/ordersAction";
import { connect } from "react-redux";
import OrderCard from "./OrderCard";

export class Active extends Component {

    static navigationOptions = {
        tabBarOnPress: (props) => {
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
        this.props.fetchCourierActive(this.props.account.id)
    }

    getOwnerOrders() {
        this.setActive(2);
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

const mapStateToProps = state => ({
    account: state.account,
    activeOrders: state.orders.activeOrders
});

const mapDispatchToProps = dispatch => ({
    fetchCourierActive: (userId) => dispatch(fetchCourierActive(userId)),
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
    orderList: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    courier: {
        flex: 1,
        width: "30%",
        height: 30,
        // alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#1A2C3E",
        margin: 5
    },
    owner: {
        flex: 1,
        width: "30%",
        height: 30,
        // alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#1A2C3E",
        margin: 5
    },
    activeButton: {
        opacity: 0.1
    }
});