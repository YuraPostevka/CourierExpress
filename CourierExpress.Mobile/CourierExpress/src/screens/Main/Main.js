import React, { Component } from 'react';
import { connect } from "react-redux";
import { MainStack } from "../../config/router";

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <MainStack />
        );
    };
}

const mapStateToProps = state => ({
    account: state.account
});


export default connect(mapStateToProps)(Main);