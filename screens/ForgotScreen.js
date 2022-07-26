import React, {Component, useState} from 'react';
import { StyleSheet, Dimensions, StatusBar, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
global.email = "";
export default class ForgotScreen extends React.Component {
    constructor() 
  {
    super()
    this.state = 
    {
      isRequest: false,
      message: ''
    }
  }
    render() {
        const RequestPassword = () => {
            const [email, isEmailFocus] = useState(false);
                //If Request has been sent
            if (this.state.isRequest) {
                return (
                    <View style= {{margin: '3%'}}>
                        <Text style={[styles.text, {textAlign: 'center', fontSize: 20, margin: '5%', flexWrap: 'wrap'}]}>{this.state.message} </Text>
                    </View>
                )
            }
            else { //Not sent yet
                return (
                    <View style= {{margin: '3%'}}>
                                <Text style= {styles.text}>Enter your email below.</Text>
                                <TextInput style={[styles.textInput, {backgroundColor: email ? '#FEFAE0' : '#9aa871'}]}
                                onFocus={() => {
                                    isEmailFocus(true)
                                }}
                                onBlur={() => {
                                    isEmailFocus(false);
                                }}
                                onChangeText={(val) => {
                                    global.email = val;
                                }}/>                                
                                <View style= {{alignItems: 'center'}}>
                              <TouchableOpacity 
                                style= {styles.signButton}
                                onPress={this.handleForgot}>
                                <Text style= {{color: '#FEFAE0', fontSize: 20, textAlign: 'center'}}>Submit</Text>
                              </TouchableOpacity>
                              <Text style={[styles.text, {textAlign: 'center', color: '#EF5120', fontSize: 16, marginBottom: '2%', flexWrap: 'wrap'}]}>{this.state.message} </Text>
                            </View>
                    </View>
                )
            }
        }
        return (
            <View style= {styles.mainContainer}>
        <ScrollView>
        <View style= {{margin: 5, marginTop: 30}}>
            <TouchableOpacity style= {{flexDirection: 'row'}}
            onPress= {() => this.props.navigation.navigate('Login')}>
            <Icon style={{margin: 0, position: 'absolute'}}
            name='chevron-back-outline'
            color= '#7C5227'
            size={30} />
            <Text style= {{fontSize: 20, color: '#7C5227', fontWeight: '600', marginLeft: 28, margin: 3.5}}>Back</Text>
            </TouchableOpacity>
        </View>
        <View style= {styles.container}>
            <View style= {styles.loginBox}>
                <Text style={styles.login}>Forgot Password</Text>
                <RequestPassword/>
            </View>
            </View>
            </ScrollView>
        </View>
        )
    }

    handleForgot = async () => {
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g; //copying this from schema
        if (global.email.match(regex) == null) {
            this.setState({message: 'Please enter a valid email' });
            return;
        }
        this.setState({isRequest: true, message: "An email has been sent to you."});
        /*
        var obj = {email: global.email};
        var js = JSON.stringify(obj);
        var res;

        try {
            const response = await fetch('https://processes-recipe.herokuapp.com',
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            res = response;
            var _results = JSON.parse(await res.text());

            if( res.status != 200 )
            {
                console.log('Something went wrong. Please try again later.');
                this.setState({message: 'Something went wrong. Please try again later.'});
            }
            else //Success
            {
                isRequest = true;
                this.state.isRequest = true;
                console.log('If your account exists, an email has been sent to your email.');
                this.setState({message: 'If your account exists, an email has been sent to your email.' });
                
            }
        }
        catch {
            this.setState({message: 'Something went wrong. Please try again later.'});
        }*/
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
        fontSize: 50,
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
        height: '20%',
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
        marginTop: getWidth() * 0.02,
        width: getWidth(),
        height: getHeight() / 1.7,
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