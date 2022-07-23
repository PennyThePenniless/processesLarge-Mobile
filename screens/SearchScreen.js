import React, {Component, useState} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, ScrollView } from 'react-native';


export default class SearchScreen extends Component {

    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style={styles.box1}>
                <TextInput style={styles.textInput} placeholder="Search for recipes by ingredients"></TextInput>
                <Button onPress={() => this.props.navigation.navigate('Login')}
                title= "Logout"></Button>
                </View>
                <View style={styles.columnBox}>
                <View style={styles.box2}>
                    <Text>Ingredients</Text>
                    <Text>Exclude:</Text>
                </View>
                <View style={styles.box3}>
                    <ScrollView>
                        <View style={styles.foodBox}>
                        <Text>test</Text>
                        </View>
                    </ScrollView>
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
        
    },
    box1: {
        backgroundColor: 'blue',
        alignItems: 'center',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
       
      },
    box2: {
        backgroundColor: 'red',
        alignItems: 'center',
        flex: 1,
        
    },
    box3: {
        backgroundColor: 'green',
        flex: 3,
        
    },
    textInput: {
        height: 40,
        width: 300,
        color: '#7C5227',
        padding: 15,
        fontSize: 15,
        fontWeight: '600',
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: 'white',
      },
    foodBox: {
        backgroundColor: 'purple',
        height: 60,
        
    }

});
  
