import React, { Component, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class HomeScreen extends Component {

    render() {
      return (
        <View style= {styles.mainContainer}>
            <View style= {styles.container}> 
                <Text style= {styles.title}>Find My Recipe</Text>
                <View style= {styles.loginBox}>
                  <TouchableOpacity 
                  style= {styles.signButton}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style= {{color: '#FEFAE0', fontSize: Dimensions.get('window').width * 0.08}}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style= {styles.signButton}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style= {{color: '#FEFAE0', fontSize: Dimensions.get('window').width * 0.08}}>Register</Text>
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
      fontSize: Dimensions.get('window').width * 0.2,
        textAlign: 'center', 
        color: '#7C5227',
        padding: 10,
      },
      text: {
        //fontFamily: '',
        fontSize: 20,
        fontWeight: '600',
        color: '#7C5227',
        padding: 5,
      },
      signButton: {
        alignItems: 'center',
        backgroundColor: '#7c5227',
        borderRadius: 10,
        width: '80%',
        padding:10,
        margin: 30,
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 1
      },
      container: {
        flex: 1,
        marginTop: '10%',
        alignItems: 'center',
        margin: '5%',
        flexDirection: "column",
      },
      loginBox: {
        width: '80%',
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: 'wrap'
      }
});
  

