import React, { Component, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

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
        <ScrollView>
        <View style= {styles.container}>
            <View style= {styles.loginBox}>
                <Text style={styles.login}>Sign In</Text>
                <View style= {{margin: '5%'}}>
                <Text style= {styles.text}>Email</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isEmailFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isEmailFocus: true})}
                onBlur= {() => this.setState({isEmailFocus: false})}
                onChangeText={(val) => {
                    global.email = val;
                } }>
                </TextInput>
                <Text style= {styles.text}>Password</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isPasswordFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isPasswordFocus: true})}
                onBlur= {() => this.setState({isPasswordFocus: false})}
                onChangeText={(val) => {
                  global.password = val;
                }}
                secureTextEntry={true}>
                </TextInput>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
                <Text style= {{color: '#7C5227', fontSize: 15, fontWeight: '500', textAlign: 'right', margin: '1%'}}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style= {{alignItems: 'center'}}>
                  <TouchableOpacity 
                    style= {styles.signButton}
                    onPress={this.handleLogin}>
                    <Text style= {{color: '#FEFAE0', fontSize: 20, textAlign: 'center'}}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              
            <Text style={[styles.text, {textAlign: 'center', color: '#EF5120', fontSize: 16, marginBottom: '2%', flexWrap: 'wrap'}]}>{this.state.message} </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text style= {{color: '#7C5227', fontSize: 15, fontWeight: '500',textAlign: 'center', margin: '5%', textDecorationLine: 'underline'}}>New here? Click here to register</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            </ScrollView>
        </View>
    )
  }
  
  handleLogin = async () => {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g; //copying this from schema
    //Validate that the fields are not blank
    if (global.email.match(regex) == null) {
      this.setState({message: 'Please enter a valid email' });
      return;
    }
    else if (global.password == "") {
      this.setState({message: 'Please enter a password' });
      return;
    }
    var obj = {email: global.email, password:global.password};
    var js = JSON.stringify(obj);
    var res;
    try {
      //Send Login request
      const response = await fetch('https://processes-recipe.herokuapp.com/login',
      {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

      res = response;
      var _results = JSON.parse(await res.text());
      if( res.status != 200 )
      {
        console.log('Email and/or password entered is incorrect');
        this.setState({message: 'Email and/or password entered is incorrect'});
      }
      else //Success
      {
       global.firstName = res.firstName;
        global.lastName = res.lastName;
        global.userId = res.id;
        this.props.navigation.navigate('Search');
        
      }
    }
    catch (error) { //Falls here if status code is not 200
      if (res.status == 401) { //Incorrect credentials
        this.setState({message: 'Email and/or password entered is incorrect' });
      }
      else {
        this.setState({message: res.status});
      }
      
    }
  }
}
function getWidth() {
  if (Dimensions.get('window').width > Dimensions.get('window').height) {
      return Dimensions.get('window').height;
  }
  else {
      return Dimensions.get('window').width;
  }
}

function getHeight() {
  if (Dimensions.get('window').height > Dimensions.get('window').width) {
    return Dimensions.get('window').height;
  }
  else {
      return Dimensions.get('window').width;
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FEFAE0',
    },
      login: {
        //fontFamily: '',
        fontSize: 54,
        textAlign: 'center',
        fontWeight: '500',
        color: '#7C5227',
        margin: '5%'
      },
      text: {
        //fontFamily: '',
        fontSize: 20,
        fontWeight: '600',
        color: '#7C5227',
        padding: 5,
        flexWrap: 'wrap'
      },
      textInput: {
        height: '12%',
        margin: '1%',
        padding: '3%',
        color: '#7C5227',
        fontSize: 20,
        fontWeight: '600',
        borderWidth: 0,
        borderRadius: 5,
        alignItems: 'stretch'
      },
      signButton: {
        backgroundColor: '#7c5227',
        borderRadius: 10,
        width: '40%',
        padding:10,
        margin: 20,
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: -1, height: -1},
        shadowRadius: 1
      },
      container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%'
      },
      loginBox: {
        flex: 1,
        marginTop: getWidth() * 0.2,
        width: getWidth(),
        height: getHeight() / 1.3,
        borderRadius: 10, 
        borderColor: '#7c5227',
        borderWidth: 0.4,
        backgroundColor: '#CCD5AE',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1
      }
});
  
