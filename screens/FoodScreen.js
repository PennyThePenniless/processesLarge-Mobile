
import React, {Component, useState} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';


export default class FoodScreen extends Component {

    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style={styles.rowBox}>
                <View style={styles.box2}>
                    <Button onPress={() => this.props.navigation.navigate('Search')}
                    title= "Go back"></Button>
                    <View style={styles.picture}>
                    </View>
                    <Text style={{flex: 1}}>Food Name</Text>
                    <Text style={{flex: 1}}>rating</Text>
                    <Text style={{flex: 1}}>You made this recipe</Text>
                    <Text style={{flex: 1}}>You saved this recipe</Text>
                </View>
                <View style={styles.box3}>
                    <ScrollView>
                        <TouchableOpacity style={styles.foodBox} onPress={() => this.props.navigation.navigate('Food')}>
                            <View style={styles.picture}>
                                <Text>[Image]</Text>
                             </View>
                            <View style={{flex:1}}>
                                <View style={styles.foodName}>
                                    <Text>Food Name</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text>3/3 ingredients</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={styles.cookTime}>
                                    <Text>1 hour</Text>
                                </View>
                                <View style={styles.rating}>
                                    <Text>5 stars</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.foodBox}>
                            <View style={styles.picture}>
                                <Text>[Image]</Text>
                             </View>
                            <View style={{flex:1}}>
                                <View style={styles.foodName}>
                                    <Text>Food Name</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text>3/3 ingredients</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={styles.cookTime}>
                                    <Text>1 hour</Text>
                                </View>
                                <View style={styles.rating}>
                                    <Text>5 stars</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.foodBox}>
                            <View style={styles.picture}>
                                <Text>[Image]</Text>
                             </View>
                            <View style={{flex:1}}>
                                <View style={styles.foodName}>
                                    <Text>Food Name</Text>
                                </View>
                                <View style={styles.info}>
                                    <Text>3/3 ingredients</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={styles.cookTime}>
                                    <Text>1 hour</Text>
                                </View>
                                <View style={styles.rating}>
                                    <Text>5 stars</Text>
                                </View>
                            </View>
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
    rowBox: {
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
        height: 120,
        flexDirection: 'row',
        padding: 5,
        },
    picture: {
        flex: 1,
        backgroundColor: 'pink'
    },
    foodName: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    info: {
       flex: 1,
    backgroundColor: 'blue'
    },
    cookTime:{
        flex: 1,
        backgroundColor: 'yellow'
        },
    rating: {
        flex: 1,
        backgroundColor: 'brown'
    },
    row: {
        flexDirection: 'row'
    }
    

});
