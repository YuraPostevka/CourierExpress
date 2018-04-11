import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    View, Text, StyleSheet, AsyncStorage, Button, TouchableOpacity,
    ScrollView, BackHandler, Alert, Dimensions
} from 'react-native';
import IconIonicons from "../../../../node_modules/react-native-vector-icons/Ionicons";
import MaterialIcons from "../../../../node_modules/react-native-vector-icons/MaterialIcons";

import { logOut } from "../../../actions/accountAction";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        const { account } = this.props;
        return (
            <View style={styles.container}>

                {/* <View style={styles.title}>
                        <Text style={{ fontSize: 20, color: "#fff", marginBottom: 20 }}>
                            Налаштування
                    </Text>
                    </View> */}

                <View style={styles.user}>
                    <View >
                        <MaterialIcons name="account-circle" size={50} color={"white"} />
                    </View>
                    <View style={{
                        position: "absolute",
                        left: 60,
                        top: "10%"
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: "#fff",
                        }}>
                            {account.userName}
                        </Text>
                    </View>
                    <View style={{
                        position: "absolute",
                        left: 60,
                        top: "50%"
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: "#fff",
                        }}>
                            {account.phoneNumber}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.logOut();
                        }}
                        style={styles.button}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: "#fff",
                                alignSelf: "center"
                            }}>
                            Вийти
                                </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const mapStateToProps = state => ({
    account: state.account
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2C3E',
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        margin: 20,
        width: width - 20,
        height: 70,
        borderBottomWidth: 0.5,
        borderColor: "#fff",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 20
    },
    button: {
        width: width - 150,
        height: 35,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "#BD3618"
    }
});