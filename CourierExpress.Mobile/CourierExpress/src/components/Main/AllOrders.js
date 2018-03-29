import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert
} from 'react-native';

export default class AllOrders extends Component {
    static navigationOptions = {
        title: 'All orders',
        swipeEnabled : false
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>Content</Text>
                </ScrollView>
            </View>
        );
    }
}

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