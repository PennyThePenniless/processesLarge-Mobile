import React, {Component, useState} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View } from 'react-native';


export default class SearchScreen extends Component {

    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style= {{margin: 50, padding: 50}}>
                <Button onPress={() => this.props.navigation.navigate('Login')}
                title= "Logout"></Button>
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
    box: {
        backgroundColor: '#CCD5AE',
        alignItems: 'center',
      }
});
  