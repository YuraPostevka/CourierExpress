import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView
} from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'My orders',
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>Content</Text>
                </ScrollView>

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 2 }}>
                    <Button
                        onPress={() => navigate("CreateOrder")}
                        title="Create order"
                        color="#2980b6"
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    createOrder: {
        flexGrow: 1,
        bottom: 0
    }
});