import React, { Component, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AccountListScreen extends Component {

    render() {
        return(
            <View style= {styles.mainContainer}> 
                  <ScrollView>
                  <View style= {{margin: 5, marginTop: 30}}>
            <TouchableOpacity style= {{flexDirection: 'row'}}
            onPress= {() => this.props.navigation.navigate('Account')}>
            <Icon style={{margin: 0, position: 'absolute'}}
            name='chevron-back-outline'
            color= '#7C5227'
            size={30} />
            <Text style= {{fontSize: 20, color: '#7C5227', fontWeight: '600', marginLeft: 28, margin: 3.5}}>Back</Text>
            </TouchableOpacity>
            </View>
                    <View style={styles.container}>

                    </View>
                </ScrollView>
            </View>
        )
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
      backgroundColor: '#FEFAE0'
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
      madeButton: {
        alignContent: 'center',
        justifyContent: 'center',
        margin: '3%',
        height: '20%',
        width: '75%',
        padding: '10%',
        backgroundColor: '#7C5227',
        borderRadius: 10
      },
      savedButton: {
        alignContent: 'center',
        justifyContent: 'center',
        margin: '5%',
        height: '20%',
        width: '75%',
        padding: '10%',
        backgroundColor: '#7C5227',
        borderRadius: 10
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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getWidth() * 0.1,
        margin: '5%'
      },
      loginBox: {
        flex: 1,
        marginTop: getWidth() * 1.5,
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