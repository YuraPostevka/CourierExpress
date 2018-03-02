// import React, { Component } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';

// // create a component
// export default class LoginForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: "",
//             passwrod: ""
//         };

//         this.onSubmit = this.onSubmit.bind(this);
//     }
//     onSubmit() {
//         this.props.navigation.navigate("Register");
//         fetch('http://courierrexpress.azurewebsites.net/api/token', {
//             method: "POST",
//             body: JSON.stringify(
//                 {
//                     "username": "username",
//                     "password": "password"
//                 }),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })

//         }).then(res => res.json())
//             .then(response =>
//                 this.setState({ number: response.token }))
//             .catch(error => {
//                 Alert.alert(error);
//             });
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <StatusBar barStyle="light-content" />
//                 <TextInput style={styles.input}
//                     onChangeText={number => this.setState({ number })}
//                     autoCapitalize="none"
//                     onSubmitEditing={() => this.passwordInput.focus()}
//                     autoCorrect={false}
//                     keyboardType='phone-pad'
//                     returnKeyType="next"
//                     placeholder='Mobile Number'
//                     placeholderTextColor='rgba(225,225,225,0.7)' />
//                 <Text>{this.state.number}</Text>
//                 <TextInput style={styles.input}
//                     onChangeText={password => this.setState({ password })}
//                     returnKeyType="go" ref={(input) => this.passwordInput = input}
//                     placeholder='Password'
//                     placeholderTextColor='rgba(225,225,225,0.7)'
//                     secureTextEntry />
//                 <TouchableOpacity style={styles.buttonContainer} onPress={this.onSubmit}>
//                     <Text style={styles.buttonText}>LOGIN</Text>
//                 </TouchableOpacity>


//             </View>
//         );
//     }
// }

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         padding: 20
//     },
//     input: {
//         height: 40,
//         backgroundColor: 'rgba(225,225,225,0.2)',
//         marginBottom: 10,
//         padding: 10,
//         color: '#fff'
//     },
//     buttonContainer: {
//         backgroundColor: '#2980b6',
//         paddingVertical: 15
//     },
//     buttonText: {
//         color: '#fff',
//         textAlign: 'center',
//         fontWeight: '700'
//     },
//     loginButton: {
//         backgroundColor: '#2980b6',
//         color: '#fff'
//     }

// });