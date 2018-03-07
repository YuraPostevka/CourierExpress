import React, { Component } from 'react';
import { connect } from "react-redux";
import { AuthRoot, MainRoot } from "../config/router";

export class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
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