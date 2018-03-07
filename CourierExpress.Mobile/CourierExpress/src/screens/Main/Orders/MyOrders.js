import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert
} from 'react-native';

import { connect } from "react-redux";

export class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.account.isLoggedIn) {
            nextProps.navigation.navigate("Login");
        }
    }

    componentWillUnmount() {

    }

    render() {
        const { navigate } = this.props.navigation;
        const { isLoggedIn } = this.props.account.isLoggedIn;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>
                            My orders
                </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account
});

export default connect(mapStateToProps)(MyOrders);

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