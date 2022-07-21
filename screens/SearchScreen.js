import React, {Component, useState} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View } from 'react-native';


export default class SearchScreen extends Component {

    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style={styles.box1}>
                <TextInput style={{backgroundColor: 'green'}}></TextInput>
                <Button onPress={() => this.props.navigation.navigate('Login')}
                title= "Logout"></Button>
                </View>
                <View style={styles.columnBox}>
                <View style={styles.box2}>
                </View>
                <View style={styles.box3}>
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
      flexDirection: 'column',
    },
    columnBox: {
        flexDirection: 'row',
        flex: 5,
        paddingTop: 25,
        justifyContent: 'space-around',
    },
    box1: {
        backgroundColor: 'blue',
        alignItems: 'center',
        flex:1,
        flexDirection: 'row',
       
      },
    box2: {
        backgroundColor: 'red',
        alignItems: 'center',
        flex: 1,
        
    },
    box3: {
        backgroundColor: 'green',
        alignItems: 'center',
        flex: 3,
        
    }
});
  
