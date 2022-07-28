
import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Button, StatusBar, Text, TextInput, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Plate from '../images/plate.png';
import Pot from '../images/pot.png';
import PotClicked from '../images/potClicked.png';
import Heart from '../images/heart.png';
import HeartClicked from '../images/heartClicked.png';


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

    let recipeName = "Test";
    const [made, setMade] = useState();
    const [saved, setSaved] = useState();

    useEffect( () => {
        if(made) {
            madeSrc = PotClicked
            //add recipe to db
        }
        else {
            madeSrc = Pot
            //remove recipe from db
        }
    }, [made]);

    useEffect( () => {
        if(saved) {
            let savedSrc = HeartClicked
            //add recipe to db
        }
        else {
            let savedSrc = Heart
            //remove from db
        }
    }, [saved]);

    let madeSrc = PotClicked;
    let savedSrc = HeartClicked;

global.object = getRecipe();

let list = object.ingredients

list = list.map(x => {
  return ({ key: x });
})

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
                             <Text style={{textAlign: 'center',color: '#7c5227',}}>{object.title}</Text>
                             <View style={styles.picture}>
                               <Text style={{color: '#7c5227'}}>[Image]</Text>
                    </View>
                        <View style={styles.recipe}>
                                   <Text style={{textAlign: 'center',color:'#7c5227'}}>Recipe</Text>
                        </View>
                        </View>
                       <View style={styles.ingredients}>
                            <FlatList
        ListHeaderComponent={
     <>
        <Text style={{color: '#7c5227'}}>Ingredients:</Text>
     </> }
        data={list}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
ListFooterComponent={
        <Text style={{color: '#7c5227'}}>Instructions:{"\n"}{object.instructions}</Text>
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
    

});
