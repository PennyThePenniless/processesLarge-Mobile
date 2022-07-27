
import React, {Component, useState} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';


const getRecipe = (id) => {
    // TODO: API call
    return({
        title: 'Pizza',
    spoonacularID: 123123,
    instructions: 'Do this then do that',
    recipePhoto: 'temp',
    ingredients: ['cheese','potato'],
    numMade: 1,
    numRatings: 12,
    numSaved: 3,
    rating: 4,
    })
};

global.object = getRecipe();

export default class FoodScreen extends Component {
   
 
constructor() 
  {
    super()
    this.state = 
    {
      title: object.title,
    spoonacularID: 0 ,
    instructions: '',
    recipePhoto: '',
    ingredients: ['','',''],
    numMade: 0,
    numRatings:0 ,
    numSaved:0 ,
    rating:0 ,
    }
  }


    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style={styles.rowBox}>
                <View style={styles.box2}>
                    <Button onPress={() => this.props.navigation.navigate('Search')}
                    title= "Go back"></Button>
                    <Text style={{flex: 1}}>{object.rating}</Text>
                    <Text style={{flex: 1}}>You made this recipe</Text>
                    <Text style={{flex: 1}}>You saved this recipe</Text>
                </View>
                <View style={styles.box3}>
                    
                        <View style={styles.nutrition}>
                             <Text style={{textAlign: 'center'}}>{object.title}</Text>
                             <View style={styles.picture}>
                               <Text>[Image]</Text>
                    </View>
                        </View>
                        <View style={styles.recipe}>
                             <Text style={{textAlign: 'center'}}>Recipe</Text>
                        </View>
                        
                        <View style={styles.ingredients}>
                            <FlatList
        data={object.ingredients}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
                        </View>
                        <View style={styles.instructions}>
                           <Text>{object.instructions}</Text>
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
    item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
    

});
