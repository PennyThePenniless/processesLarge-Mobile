import React, { Component, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

global.email = "", global.password = "";

export default class LoginScreen extends Component {



  constructor()
  {
    super()
    this.state =
    {
      isEmailFocus: false,
      isPasswordFocus: false,
       message: ' '
    }
  }

  render() {

    return (
      <View style= {styles.mainContainer}>
        <View style= {styles.container}>
            <View style= {styles.loginBox}>
                <Text style={styles.login}>Sign Up</Text>
                <Text style= {[styles.text, {marginRight:250}]}>Email</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isEmailFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isEmailFocus: true})}
                onBlur= {() => this.setState({isEmailFocus: false})}
                onChangeText={(val) => {
                    global.email = val;
                } }>
                </TextInput>
                <Text style= {[styles.text, {marginRight:210}]}>Password</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isPasswordFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isPasswordFocus: true})}
                onBlur= {() => this.setState({isPasswordFocus: false})}
                onChangeText={(val) => {
                  global.password = val;
                }}
                secureTextEntry={true}>
                </TextInput>
                <TouchableOpacity style= {styles.signButton}
                onPress={this.handleLogin}>
                <Text style= {{color: 'white', fontSize: 20}}>Sign In</Text>
                </TouchableOpacity>
            <Text style={[styles.text, {textAlign: 'center', color: '#EF5120', fontSize: 16, marginBottom: 25, padding: 5}]}>{this.state.message} </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style= {{color: '#7C5227', fontSize: 15, fontWeight: 500, textDecoration: 'underline'}}>New here? Click here to register a new account</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
  }

  handleLogin = async () => {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g; //copying this from schema
    //Validate that the fields are not blank
    console.log(global.email.match(regex));
    if (global.email.match(regex) == null) {
      this.setState({message: 'Please enter a correct email address.' });
      return;
    }
    else if (global.password == "") {
      this.setState({message: 'Please enter a password.' });
      return;
    }
    var obj = {email: global.email, password:global.password};
    var js = JSON.stringify(obj);
    console.log(js);
    var res;
    try {
      //Send Login request
      const response = await fetch('https://processes-recipe.herokuapp.com/user/login',
      {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

      res = response;
      var _results = JSON.parse(await res.text());
      if( res.status != 200 )
      {
        console.log('Email and/or password entered is incorrect.');
        this.setState({message: 'Email and/or password entered is incorrect.' });
        console.log(message)
      }
      else //Success
      {
        /*global.firstName = res.firstName;
        global.lastName = res.lastName;
        global.userId = res.id;*/
        this.props.navigation.navigate('Search');

      }
    }
    catch (error) { //Falls here if status code is not 200
      if (res.status == 401) { //Incorrect credentials
        this.setState({message: 'Email and/or password entered is incorrect.' });
      }
      else {
        this.setState({message: 'Something went wrong. Please try again later.'});
      }

    }
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
      login: {
        fontFamily: '',
        fontSize: 48,
        fontWeight: '500',
        color: '#7C5227',
        padding: 25
      },
      text: {
        fontFamily: '',
        fontSize: 18,
        fontWeight: '600',
        color: '#7C5227',
        padding: 10,
        flexWrap: 'wrap',
        numberOfLines: '2',
      },
      textInput: {
        height: 40,
        width: 300,
        color: '#7C5227',
        padding: 15,
        fontSize: 15,
        fontWeight: 600,
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
        margin: 30,
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 1
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
        borderColor: '#7c5227',
        borderWidth: 1,
        backgroundColor: '#CCD5AE',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2
      }
});
  
