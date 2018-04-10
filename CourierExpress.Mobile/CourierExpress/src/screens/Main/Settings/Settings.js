import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert
} from 'react-native';

export class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>
                            Налаштування
                </Text>
                    </View>
                </ScrollView>
            </View>
        );
    };
}

const mapStateToProps = state => ({
});


export default connect(mapStateToProps)(Settings);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2C3E',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});