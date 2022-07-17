import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RegisterScreen = ( {navigation}) => {
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
        <Button color='#7C5227' title="Already have an account? Click here to log in"></Button>
        </View>
      <StatusBar style="auto" />
    </View>
    )
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
  
export default RegisterScreen;
