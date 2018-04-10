import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert, RefreshControl,
    FlatList, Dimensions
} from 'react-native';

import Icon from "../../../../node_modules/react-native-vector-icons/Octicons";
import MoneyIcon from "../../../../node_modules/react-native-vector-icons/FontAwesome";
import WeightIcon from "../../../../node_modules/react-native-vector-icons/MaterialCommunityIcons";

var width = Dimensions.get('window').width;

export default class Orderline extends Component {

    render() {
        const { order } = this.props;
        return (

            <View>

                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>
                        {order.owner.name}
                    </Text>
                </View>

                <View style={styles.card}>
                    <View>
                        <View style={styles.line}>
                            <Icon style={{ marginRight: 10 }} name="package" size={35} color={"white"} />
                            <Text
                                style={styles.text}>
                                {order.description}
                            </Text>
                        </View>

                        <View style={styles.line}>
                            <Icon style={{ marginRight: 10 }} name="location" size={30} color={"white"} />

                            <Text style={styles.text}>
                                {order.startPoint} -  {order.endPoint}
                            </Text>
                        </View>

                        <View style={styles.line}>
                            <MoneyIcon style={{ marginRight: 10 }} name="money" size={30} color={"white"} />
                            <Text style={styles.text}>
                                Price - {order.price}
                            </Text>
                        </View>

                        <View style={styles.line}>
                            <WeightIcon style={{ marginRight: 10 }} name="weight-kilogram" size={30} color={"white"} />
                            <Text style={styles.text}>
                                {order.weight}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#18222c"
    },
    line: {
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 30,
    },
    text: {
        color: "#fff"
    }
});