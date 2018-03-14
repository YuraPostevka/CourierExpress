import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View, Text, StyleSheet
} from 'react-native';
import Icon from "../../../../node_modules/react-native-vector-icons/Octicons";

export class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Icon name="package" size={80} color={"white"} />
                </View>
            </View>
        );
    }
}

export default connect()(OrderDetails);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
    }
});