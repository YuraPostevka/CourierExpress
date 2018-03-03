import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Root } from "./config/router";

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
  }
  render() {
    return <Root />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
});
