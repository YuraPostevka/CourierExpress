import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Root, Tabs } from "./config/router";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Root />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  }
});
