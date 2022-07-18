import React, {Component} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class RegisterScreen extends Component {

    render() {
        return (
        <View style={styles.container}>
            <Text style={{fontSize:30,padding:20,color:'#7C5227'}}>Recipe Research App</Text>
            <View style={styles.register_box}>
                <View style={{flexDirection: 'row',  alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'#7C5227'}}>Sign Up</Text>
                </View>
                <Text style={styles.default}>Display Name:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.default}>Username</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.default}>Email</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.default}>Password</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.default}>Confirm Password</Text>
                <TextInput style={styles.input}/>
                <Button title="Sign Up"></Button>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
            	<Text style= {{color: '#7C5227', fontSize: 15, textDecoration: 'underline'}}>Already have an account? Click here to Log in</Text>
            </TouchableOpacity>
            </View>
      <StatusBar style="auto" />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FEFAE0',
    alignItems: 'center',
    justifyContent: 'top',
  },
  register_box: {
    backgroundColor: '#CCD5AE',
	  margin: 6,
    padding: 4,
  	textAlign: 'center',
  	alignContent: 'center',
  	alignItems: 'center',
  	minWidth: 10,
  	maxWidth: 'max',
  	maxHeight: 'max',

  },
  input: {
    height: 20,
    width: 200,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#9aa871',
    borderColor: 'transparent',
  },
  default: {
    color:'#7C5227',
  }
});
  
