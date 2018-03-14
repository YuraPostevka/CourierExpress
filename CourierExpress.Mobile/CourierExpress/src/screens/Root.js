import React, { Component } from 'react';
import { AsyncStorage, View, Text } from "react-native";
import { connect } from "react-redux";
import { AuthRoot, MainRoot } from "../config/router";

export class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    //uncomment when will started work on auto login on app start

    // async getToken() {
    //     try {
    //         var value = await AsyncStorage.getItem("token");
    //         console.log(value);
    //         if (value !== null) {
    //             this.setState({ token: value });
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    componentDidMount() {
        // this.getToken().done();
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        if (this.props.account.isLoggedIn) {
            return (
                <MainRoot />
            );
        } else {
            return (
                <AuthRoot />
            );
        }
    };
}

const mapStateToProps = state => ({
    account: state.account
});


export default connect(mapStateToProps)(Root);