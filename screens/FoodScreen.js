
import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, ScrollView, TouchableOpacity, FlatList,Image } from 'react-native';
import Pot from '../assets/images/pot.png';
import PotClicked from '../assets/images/potClicked.png';
import Heart from '../assets/images/heart.png';
import HeartClicked from '../assets/images/heartClicked.png';


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

let list = object.ingredients

list = list.map(x => {
  return ({ key: x });
})

 

export default class FoodScreen extends Component {
    
   
 
constructor(props) 
  {
    super(props)
    this.state = 
    {
      recipe: this.props.navigation.state.params.recipe
    }
  }


    render() {
        return(
            <View style= {styles.mainContainer}>
                <View style={styles.rowBox}>
                <View style={styles.box2}>
                    <Button onPress={() => this.props.navigation.navigate('Search')}
                    title= "Go back"></Button>
                    <View style={{flex: 1}}>
                    <Text style={{flex: 1}}>{this.state.recipe.rating}</Text>
                    </View>
                    <View style={{flex: 1}}>
                    <Image style={styles.tinyLogo} source={require('../assets/images/pot.png')}/>
                    </View>
                    <View style={{flex: 1}}>
                    <Image style={styles.tinyLogo} source={require('../assets/images/heart.png')}/>
                    </View>
                   
                </View>
                <View style={styles.box3}>
                    
                        <View style={styles.nutrition}>
                             <Text style={{textAlign: 'center', fontSize: ' 22', fontWeight: '600', color: '#7c5227',}}>{this.state.recipe.title}</Text>
                             <View>
                                <Image 
                                style={{width: '100%', height: '80%', resizeMode: 'cover'}}
                                source={{uri:this.state.recipe.image}}></Image>
                    </View>
                        <View style={styles.recipe}>
                                   <Text style={{textAlign: 'center', fontSize: 20, color:'#7c5227'}}>Recipe</Text>
                        </View>
                        </View>
                       <View style={this.state.recipe.ingredients}>
                            <FlatList
        ListHeaderComponent={
     <>
        <Text style={{color: '#7c5227', fontSize: 15}}>Ingredients:</Text>
     </> }
        data={list}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
ListFooterComponent={
        <Text style={{color: '#7c5227'}}>Instructions:{"\n"}{this.state.recipe.instructions}</Text>
    }/>
      
            
                        
                            
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
        backgroundColor: '#CCD5AE',
        alignItems: 'center',
        flex: 1,
        
    },
    box3: {
        backgroundColor: '#FEFAE0',
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
        //backgroundColor: 'white',
      },
    foodBox: {
        //backgroundColor: 'purple',
        height: 120,
        flexDirection: 'row',
        padding: 5,
        },
    picture: {
        flex: 1,
        //backgroundColor: 'pink'
    },
    foodName: {
        flex: 1,
        //backgroundColor: 'white',
        
    },
    info: {
       flex: 1,
    //backgroundColor: 'blue'
    },
    cookTime:{
        flex: 1,
       // backgroundColor: 'yellow'
        },
    rating: {
        flex: 1,
        //backgroundColor: 'brown'
    },
    row: {
        flexDirection: 'row'
    },
    nutrition: {
        flex: 1,
        //backgroundColor: 'yellow',
    },
    recipe: {
        //flex: 1,
        textAlign: 'center',
        //backgroundColor: 'blue'
        borderTopWidth: 1,
        borderTopColor: '#7c5227',
        color: '#7c5227',
    },
    ingredients: {
        flex: 2,
        //backgroundColor: 'purple'
        borderTopWidth: 1,
        borderTopColor: '#7c5227',
        color: '#7c5227',
    },
    instructions: {
        flex: 1,
       // backgroundColor: 'brown'
        borderWidth: 1,
        borderColor: '#7c5227',
        fontColor: '#7c5227',
    },
    userCreations: {
        flex: 1,
        //backgroundColor: 'white'
    },
    prepTime: {
        flex: 1,
        //backgroundColor: 'red'
    },
    cookTime: {
        flex: 1,
        //backgroundColor: 'pink'
    },
    item: {
    padding: 10,
    fontSize: 12,
    height: 44,
    color: '#7c5227',
  },
    tinyLogo: {
    width: 50,
    height: 50,
    marginTop: 15,
    marginBottom: 15,
  },
    

});
