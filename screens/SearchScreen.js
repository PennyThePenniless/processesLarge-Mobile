import React, {Component, useState} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, ScrollView, TouchableOpacity, Alert, FlatList,Image } from 'react-native';


import {RegularList} from "../assets/Regularlist.js";
import {Ingredient} from "../assets/Ingredients.js";


global.showResults = false, global.setShowResults = false;
global.strInput = "", global.setInput = "";






export default class SearchScreen extends Component {
   
   this.state = {
      
      data: [],

    };
  }
   
    handleSearch = (event) => {

       /* event.preventDefault();
        setShowResults(true)*/
        const arr = strInput.split(' ').join('')
        const jsonArr = arr.split(',');
         
        const obj = {"ingredients":jsonArr};
    var js = JSON.stringify(obj);
    try {
      //Send Login request
      const response = await fetch('https://processes-recipe.herokuapp.com/findByIngredients',
      {method:'POST',body:obj,headers:{'Content-Type': 'application/json'}});

      res = response;
      var _results = JSON.parse(await res.text());
      if( res.status != 200 )
      {
        Alert.alert('something went wrong');
      }
      else{
         Alert.alert(res.body);
      }
                
                


        
    }
    handleChange = (text) => {
        strInput = text;
        //setInput(strInput);
    }
getSearchResults = () => {
    //TODO: Hit API for recipes
    return [{
        title: 'Pasta',
        rating: 4.5,
        ingredients: [
            'flour', 'cheese', 'eggs'
        ],
        image: "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        id: 632660,
        numMade: 5,
        numSaved: 3
    }, {
        title: 'Bread',
        rating: 3.5,
        ingredients: [
            'flour', 'eggs', 'butter'
        ],
        image: "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        id: 12312,
        numMade: 7,
        numSaved: 1
    }, {
        title: 'Bread',
        rating: 3.5,
        ingredients: [
            'flour', 'eggs', 'butter'
        ],
        image: "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        id: 12312,
        numMade: 7,
        numSaved: 1
    }, {
        title: 'Bread',
        rating: 3.5,
        ingredients: [
            'flour', 'eggs', 'butter'
        ],
        image: "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        id: 12312,
        numMade: 7,
        numSaved: 1
    }, {
        title: 'Bread',
        rating: 3.5,
        ingredients: [
            'flour', 'eggs', 'butter'
        ],
        image: "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        id: 12312,
        numMade: 7,
        numSaved: 1
    }];
}

    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style={styles.box1}>
                <TextInput style={styles.textInput}
                onChangeText={this.handleChange} placeholder="type ingredients seperated by a comma..."></TextInput>
                <Button onPress={this.handleSearch}
                title= "Search"></Button>
                <Button onPress={() => this.props.navigation.navigate('Login')}
                title= "Logout"></Button>
                </View>
                <View style={styles.rowBox}>
                <View style={styles.box2}>
                    <Text>Ingredients</Text>
                     
                     <FlatList
                       
                      />
                     
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
              <View style={styles.navigator}>
                 <View style={{borderWidth: 1,flex:1,justifyContent:'center'}}>
                  <TouchableOpacity>
                    <Text>Search</Text>
                  </TouchableOpacity>
                 </View>
                 <View style={{borderWidth: 1,flex:1,justifyContent:'center'}}>
                    <TouchableOpacity style={{borderWidth: 1,flex:1,justifyContent:'center'}} onPress={() => this.props.navigation.navigate('Account')}>
                      <Text>Account</Text>
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
    },
   navigator: {
      flex: .4,
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
  
