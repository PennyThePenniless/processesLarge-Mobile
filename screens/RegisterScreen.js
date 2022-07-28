import React, { Component, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, TextInput, View, ScrollView,Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
global.registerName = "", global.registerUserName = "", global.registerEmail = "", global.registerPassword = "", global.confirmPassword ="";
export default class LoginScreen extends Component {
  constructor()
  {
    super()
    this.state =
    {
      isRegisterNameFocus: false,
      isUserNameFocus: false,
      isEmailFocus: false,
      isPasswordFocus: false,
      isConfirmPassword: false,
       message: ' '
    }
  }
  render() {
    return (
      <View style= {styles.mainContainer}>
        <ScrollView style={{flex:.1}}>
        <View style= {styles.container}>
          <View style={styles.registerBox}>
                <Text style={styles.login}>Sign Up</Text>
                <View style={{margin: '5%'}}>
                <Text style= {styles.text}>Display Name</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isRegisterNameFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isRegisterNameFocus: true})}
                onBlur= {() => this.setState({isRegisterNameFocus: false})}
                onChangeText={(val) => {
                    global.registerName = val;
                } }>
                </TextInput>
                <Text style= {styles.text}>User Name</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isUserNameFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isUserNameFocus: true})}
                onBlur= {() => this.setState({isUserNameFocus: false})}
                onChangeText={(val) => {
                  global.registerUserName = val;
                }}>
                </TextInput>
                <Text style= {styles.text}>Email</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isEmailFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isEmailFocus: true})}
                onBlur= {() => this.setState({isEmailFocus: false})}
                onChangeText={(val) => {
                  global.registerEmail = val;
                }}>
                </TextInput>
                <Text style= {[styles.text, {marginRight:'60%'}]}>Password</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isPasswordFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isPasswordFocus: true})}
                onBlur= {() => this.setState({isPasswordFocus: false})}
                onChangeText={(val) => {
                  global.registerPassword = val;
                }}
                secureTextEntry={true}>
                </TextInput>
                <Text style= {[styles.text, {marginRight:'60%'}]}>Confirm Password</Text>
                <TextInput style={[styles.textInput, {backgroundColor: this.state.isConfirmPasswordFocus ? '#FEFAE0' : '#9aa871'}]}
                onFocus= {() => this.setState({isConfirmPasswordFocus: true})}
                onBlur= {() => this.setState({isConfirmPasswordFocus: false})}
                onChangeText={(val) => {
                  global.confirmPassword = val;
                }}
                secureTextEntry={true}>
                </TextInput>
                <View style= {{alignItems: 'center'}}>
                <TouchableOpacity style= {styles.signButton}
                onPress={this.handleRegister}>
                <Text style= {{color: 'white', fontSize: 20, textAlign: 'center'}}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            <Text style={[styles.text, {textAlign: 'center', color: '#EF5120', fontSize: 16, marginBottom: '2%', flexWrap: 'wrap'}]}>{this.state.message} </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style= {{color: '#7C5227', fontSize: 15, fontWeight: '500',textAlign: 'center', margin: '5%', textDecorationLine: 'underline'}}>Already have a account? Click here to log in</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            </ScrollView>
        </View>
    )
  }
  handleRegister= async () => {
    /*
    try{
    const value = await AsyncStorage.getItem('username');
    Alert.alert(value);
    }
    catch(error){
      Alert.alert('error');
    }*/
    
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g; //copying this from schema
    //Validate that the fields are not blank
     if (global.registerName == "") {
      this.setState({message: 'Please enter a display name' });
      return;
    }
    else if (global.registerUserName == "") {
      this.setState({message: 'Please enter a username.' });
      return;
    }
    else if (global.registerEmail.match(regex) == null) {
      this.setState({message: 'Please enter a valid email.' });
      return;
    }
    else if (global.registerPassword == "") {
      this.setState({message: 'Please enter a password.' });
      return;
    }
    else if (global.confirmPassword == "") {
      this.setState({message: 'Please confirm a password.' });
      return;
    }
    if (global.confirmPassword != global.registerPassword) {
      this.setState({message: 'Passwords must match' });
      return;
    }
    var obj = {username: global.registerUserName, displayName: global.registerName, password: global.registerPassword, email: global.registerEmail};
    var js = JSON.stringify(obj);
    console.log(js);
    var res;
    try {
      //Send register request
      const response = await fetch('https://processes-recipe.herokuapp.com/user/register',
       {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
       res = response;
       if(res.status == 200) { //Registration successful
         localStorage.setItem("username",res.username);
         this.props.navigation.navigate('Search');
       }
       else if (res.status == 409) { //something problably already exist
        this.setState({message: 'An account with this email already exists.' });
      }
      else{
        this.setState({message: res.status });
      }
    }
    catch (error) { //Unexpected status code
      this.setState({message: res.status});
    }
  }
}
function getWidth() {
  if (Dimensions.get('window').width > Dimensions.get('window').height) {
      return Dimensions.get('window').width;
  }
  else {
      return Dimensions.get('window').height;
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
        height: '8%',
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
      registerBox: {
        flex: 1,
        marginTop: getWidth() * 0.1,
        width: getWidth(),
        height: getHeight(),
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
  
