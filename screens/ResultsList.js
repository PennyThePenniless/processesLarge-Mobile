import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontIcon from 'react-native-vector-icons/FontAwesome'

export default class ResultsList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            recipe: populate(this.props.navigation.state.params.recipe),
            length: this.props.navigation.state.params.length
        }
    }
     Recipe = (recipe) => {
        return{
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            usedIngridientCount: recipe.usedIngridientCount,
            missingIngridients: recipe.missingIngridients,
            likes: recipe.likes,
            made: 0
        }
    }

    SavedRecipes = ({item}) => {
        return (
          <View style= {styles.shadowCard}>
            <TouchableHighlight style= {{borderRadius: 10}}activeOpacity={0.8}
                                underlayColor="#000000" onPress={() => this.props.navigation.navigate('FoodScreen', {
                                  recipe: item
                                })}>
            <View style= {styles.savedRecipes}>
            <View style= {{flex: 6/8, flexDirection: 'row', marginBottom: '3%'}}>
                <View style= {{flex: 3/6}}>
                  <Image
                    style={styles.foodImage}
                    source={{uri:item.image}}/>
                    <Text style={{textAlign: 'center', color: '#7C5227', fontSize: 16, fontWeight:'500'}}> {item.usedIngridientCount}/{item.usedIngridientCount + item.missingIngridients} Ingredients</Text>
                </View>
                <View style= {{flex: 3/6}}>
                  <View style= {{flex:3/6}}>
                    <Text 
                    ellipsizeMode= {'tail'}
                    numberOfLines= {3}
                    style={{flex: 1, margin: '3%', textAlign: 'center', fontSize: 24, fontWeight:'500', color: '#7C5227'}}>{item.title}</Text>
                  </View>
                    <View style= {{flex: 3/6}}>
                  </View>
                </View>
            </View>
            <View style= {{marginTop: '3%', marginBottom: '2%', flex: 1/8}}>
              <View style= {{flexDirection: 'row', marginBottom: '1%'}}>
                <MaterialIcon name='pot-steam'
                color= "#7C5227"
                size={30}/>
                <Text style={{padding: '2%',color: '#7C5227', fontSize: 16, fontWeight:'500'}}>{item.made} people made this recipe</Text>
              </View>
              <View style= {{flexDirection: 'row', marginBottom: '1%'}}>
                <Icon name='heart-outline'
                      color= "#7C5227"
                      size={28}/>
                <Text style={{padding: '1%', marginTop: '0.5%', marginLeft: '1%', color: '#7C5227', marginLeft:'1%', fontSize: 16, fontWeight:'500'}}>{item.likes == 1 ? item.likes + " person saved this recipe" : item.likes +  " people saved this recipe"}</Text>
              </View>
            </View>
          </View>
            </TouchableHighlight>
          </View>
        )
      }

    render() {
        return(
            <View style= {styles.mainContainer}> 
                  <View style= {{margin: 5, marginTop: 30}}>
              <TouchableOpacity style= {{flexDirection: 'row'}}
              onPress= {() => this.props.navigation.navigate('Search')}>
              <Icon style={{margin: 0, position: 'absolute'}}
              name='chevron-back-outline'
              color= '#7C5227'
              size={30} />
              <Text style= {{fontSize: 20, color: '#7C5227', fontWeight: '600', marginLeft: 28, margin: 3.5}}>Back</Text>
              </TouchableOpacity>
            </View>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.recipe}
                            renderItem= {this.SavedRecipes}
                            keyExtractor={item => item.id}
                            extraData= {this.state}
                        />
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
      backgroundColor: '#FEFAE0'
    },
      foodImage: {
        margin: '3%',
        width: '95%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 5
      },
      shadowCard: {
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: -1, height: -1},
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius: 10,
        marginBottom: '5%'
      },
      savedRecipes: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: '1%',
        height: getHeight() * 0.43,
        width: getWidth() * 0.99,
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1
      },
      madeButton: {
        alignContent: 'center',
        justifyContent: 'center',
        margin: '3%',
        height: '20%',
        width: '75%',
        padding: '10%',
        backgroundColor: '#7C5227',
        borderRadius: 10
      },
      savedButton: {
        alignContent: 'center',
        justifyContent: 'center',
        margin: '5%',
        height: '20%',
        width: '75%',
        padding: '10%',
        backgroundColor: '#7C5227',
        borderRadius: 10
      },
      signButton: {
        backgroundColor: '#7c5227',
        borderRadius: 10,
        width: '40%',
        padding:10,
        margin: 20,
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: -1, height: -1},
        shadowRadius: 1
      },
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getWidth() * 0.05,
        marginBottom: '5%'
      }
});

function populate (recipe) {
    console.log(recipe)
    let arr = [];
    for(let i = 0; i < recipe.length; i++) {
        let arrItem = {
            id: recipe[i].id,
            title: recipe[i].title,
            image: recipe[i].image,
            usedIngridientCount: recipe[i].usedIngredientCount >= 0 ? recipe[i].usedIngredientCount : 0,
            missingIngridients: recipe[i].missedIngredientCount >= 0 ? recipe[i].usedIngredientCount : 0,
            likes: recipe[i].likes,
            rawInput: recipe[i],
            made: 0
        };
        arr.push(arrItem);
    }

    console.log(arr);

    return arr;
}   