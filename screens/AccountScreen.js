import React, { Component, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AccountScreen extends Component {

    render() {
        return(
            <View style= {styles.mainContainer}> 
                  <ScrollView>
                    <View style={styles.container}>
                      <View style= {{flexDirection:'row-reverse'}}>
                        <TouchableOpacity style= {styles.logoutButton}
                          onPress= {() => this.props.navigation.navigate('Login')}>
                          <Text style= {{fontSize: 20, marginLeft: '3%', color: '#7C5227', fontWeight: '600'}}>Logout</Text>
                        </TouchableOpacity>
                      </View>
                      <View style= {{ alignItems: 'center', justifyContent: 'center'}}>
                      <View style= {{alignContent: "center"}}>
                        <Icon name= "person-circle-outline"
                              size={280}
                              color='#FEFAE0'/>
                        <Text style={{textAlign: 'center', color: '#7C5227', fontWeight: '600', fontSize: 32, marginBottom: '5%' }}>&#123;Display Name&#125;</Text>
                        </View>
                        <TouchableOpacity 
                          onPress={() => {this.props.navigation.navigate('AccountList')}}
                          style={[styles.madeButton,{flexDirection: "row"}]}>
                          <Text style={{color: '#FEFAE0', fontWeight: '700', fontSize: 25}}>5 Made Recipes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {this.props.navigation.navigate('AccountList')}} 
                          style={[styles.savedButton,{flexDirection: "row"}]}>
                          <Text style={{color: '#FEFAE0', fontWeight: '700', fontSize: 25}}>3 Saved Recipes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {this.props.navigation.navigate('AccountList')}} 
                          style={[styles.changeButton,{flexDirection: "row"}]}>
                          <Text style={{color: '#FEFAE0', fontWeight: '700', fontSize: 25}}>Change Password</Text>
                        </TouchableOpacity>
                      </View>
                      </View>
                </ScrollView>
                <View style={styles.navigator}>
                 <View style={{borderWidth: 1,flex:1,justifyContent:'center'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                    <Text>Search</Text>
                  </TouchableOpacity>
                 </View>
                 <View style={{borderWidth: 1,flex:1,justifyContent:'center'}}>
                    <TouchableOpacity style={{borderWidth: 1,flex:1,justifyContent:'center'}} >
                      <Text>Account</Text>
                    </TouchableOpacity>
                 </View>
              </View>
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
      backgroundColor: '#BBC893'
    },
      login: {
        //fontFamily: '',
        fontSize: 54,
        textAlign: 'center',
        fontWeight: '500',
        color: '#7C5227',
        margin: '5%'
      },
      madeButton: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
        height: '13%',
        width: '60%',
        backgroundColor: '#7C5227',
        borderRadius: 10
      },
      savedButton: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%',
        height: '13%',
        width: '60%',
        backgroundColor: '#7C5227',
        borderRadius: 10
      },
      changeButton: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
        height: '13%',
        width: '60%',
        backgroundColor: 'rgba(239,81,32, 0.80)',
        borderRadius: 10
      },
      container: {

        marginTop: getWidth() * 0.08,
        margin: '5%'
      },
    navigator: {
      flex: .8,
      backgroundColor: 'white',
      flexDirection: 'row'
   },
   tinyLogo: {
    width: 50,
    height: 50,
    marginTop: 15,
    marginBottom: 15,
  },
});
