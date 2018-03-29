import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert
} from 'react-native';

import { connect } from "react-redux";

export class MyOrders extends Component {
    static navigationOptions = {
        title: 'My orders',
        swipeEnabled: false
    };

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
                    <Text>Content</Text>

                </ScrollView>

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 2 }}>
                    <Button
                        onPress={() => {
                            navigate("CreateOrder");
                        }
                        }
                        title="Create order"
                        color="#2980b6"
                    />
                </View>
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
        backgroundColor: '#1A2C3E',
    },
    createOrder: {
        flexGrow: 1,
        bottom: 0
    }
});