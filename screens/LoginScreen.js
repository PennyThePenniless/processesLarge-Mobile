import React, { Component, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, TextInput, View, TouchableHighlight, Alert } from 'react-native';

global.email = "", global.password = "";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style= {styles.mainContainer}>
        <View style= {styles.container}>
            <View style= {styles.loginBox}>
                <Text style={styles.login}>Sign In</Text>
                <Text style= {styles.text}>Username</Text>
                <TextInput style={styles.textInput}
                onFocus={null}
                onChangeText={(val) => {
                    global.email = val;
                } }>
                </TextInput>
                <Text style= {styles.text}>Password</Text>
                <TextInput style={styles.textInput}
                onChangeText={(val) => {
                  global.password = val;
                }}>
                </TextInput>
                <TouchableOpacity style= {styles.signButton}
                onPress={() => {
                  console.log(global.email + " " + global.password);
                }}>
                <Text style= {{color: 'white', fontSize: 20}}>Sign In</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text style= {{color: '#7C5227', fontSize: 15, textDecoration: 'underline'}}>New here? Click here to register a new account</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FEFAE0',
    },
    title: {
        fontFamily: '',
        fontSize: 64,
        textAlign: 'center', 
        color: '#7C5227',
        padding: 10,
      },
      hyperlink: {
  
      },
      login: {
        fontFamily: '',
        fontSize: 48,
        fontWeight: '500',
        textAlign: 'center', 
        color: '#7C5227',
        padding: 25
      },
      text: {
        marginRight: 220,
        fontFamily: '',
        fontSize: 18,
        fontWeight: 600,
        color: '#7C5227',
        padding: 10
      },
      textInput: {
        height: 40,
        width: 300,
        backgroundColor: '#9aa871',
        padding: 15,
        fontSize: 15,
        borderWidth: 0,
        borderRadius: 5,
      },
      onFocusText: {
        backgroundColor: '#FEFAE0',
        color: '7C5227'
      },
      signButton: {
        alignItems: 'center',
        backgroundColor: '#7c5227',
        borderRadius: 10,
        width: 150,
        padding:10,
        margin: 40
      },
      container: {
        alignItems: 'center',
        margin: 15
      },
      loginBox: {
        margin: 10,
        marginTop: 50,
        width: 450,
        height: 480,
        borderRadius: 10, 
        backgroundColor: '#CCD5AE',
        alignItems: 'center'
      }
});
  
