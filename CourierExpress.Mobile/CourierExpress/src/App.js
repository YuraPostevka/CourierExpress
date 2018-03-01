import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from "./components/Login/Login";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    }

  }

  onLogIn() {
    this.setState({
      isLoggedIn: true,
    });
  }

  onLogOut() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  }
});
