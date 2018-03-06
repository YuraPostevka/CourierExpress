import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "./store";
import { StyleSheet } from 'react-native';

import { Root } from "./config/router";

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
});
