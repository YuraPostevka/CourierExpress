import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity
                            onPress={this.add}
                            style={[styles.courier, styles.activeButton]}>
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
                            onPress={this.add}
                            style={styles.owner}>
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
    courier: {
        flex: 1,
        width: "30%",
        height: 30,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#BD3618",
        margin: 5
    },
    owner: {
        flex: 1,
        width: "30%",
        height: 30,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#BD3618",
        margin: 5
    },
    activeButton: {
        opacity: 0.7
    }
});