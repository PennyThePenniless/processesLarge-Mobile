
import React, {Component, useState} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, ScrollView, TouchableOpacity, Script } from 'react-native';



export default class FoodScreen extends Component {
   getRecipe = (id) => {
    // TODO: API call
    this.setState({title:'Pizza'})
};
    
constructor() 
  {
    super()
    this.state = 
    {
      title: '',
    spoonacularID: ,
    instructions: '',
    recipePhoto: '',
    ingredients: ['','',''],
    numMade: ,
    numRatings: ,
    numSaved: ,
    rating: ,
    }
  }


    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style={styles.rowBox}>
                <View style={styles.box2}>
                    <Button onPress={() => this.props.navigation.navigate('Search')}
                    title= "Go back"></Button>
                    <View style={styles.picture}>
                        <Text>[Image]</Text>
                    </View>
                    <Text style={{flex: 1}}>{this.state.title}</Text>
                    <Text style={{flex: 1}}>rating</Text>
                    <Text style={{flex: 1}}>You made this recipe</Text>
                    <Text style={{flex: 1}}>You saved this recipe</Text>
                </View>
                <View style={styles.box3}>
                    
                        <View style={styles.nutrition}>
                             <Text style={{textAlign: 'center'}}>Nutrition</Text>
                        </View>
                        <View style={styles.recipe}>
                             <Text style={{textAlign: 'center'}}>Recipe</Text>
                        </View>
                        <View style={styles.row}>
                             <View style={styles.prepTime}>
                                <Text>prep time:</Text>
                            </View>
                            <View style={styles.cookTime}>
                                <Text>cook time:</Text>
                            </View>
                        </View>
                        <View style={styles.ingredients}>
                            <Text>ingredients</Text>
                        </View>
                        <View style={styles.instructions}>
                           <Text>instructions</Text>
                        </View>
                        <View style={styles.userCreations}>
                                <Text style={{textAlign: 'center'}}>User Creations</Text>
                         </View>
                    
                       
                    
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
    nutrition: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    recipe: {
        //flex: 1,
        textAlign: 'center',
        backgroundColor: 'blue'
    },
    ingredients: {
        flex: 1,
        backgroundColor: 'purple'
    },
    instructions: {
        flex: 1,
        backgroundColor: 'brown'
    },
    userCreations: {
        flex: 1,
        backgroundColor: 'white'
    },
    prepTime: {
        flex: 1,
        backgroundColor: 'red'
    },
    cookTime: {
        flex: 1,
        backgroundColor: 'pink'
    },
    

});
