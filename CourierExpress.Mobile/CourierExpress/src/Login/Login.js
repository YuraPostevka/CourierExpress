import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text
                    style={{ fontSize: 27 }}>
                    Login
                </Text>
                <TextInput
                    placeholder='Phone number:' />
                <TextInput
                    placeholder='Password' />
                <View style={{ margin: 7 }} />
                <Button
                    onPress={this.props.onLoginPress}
                    title="Submit"
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
});