import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontIcon from 'react-native-vector-icons/FontAwesome'
export default class AccountListScreen extends Component {

    render() {

      const Stars = () => {
        return (
          <View style={{flexDirection: 'row'}}>
          <FontIcon style={{margin: '1%'}}
                    name='star-o'
                    color= "#7C5227"
                    size={28}/>
          <FontIcon style={{margin: '1%'}}
                    name='star-o'
                    color= "#7C5227"
                    size={28}/>
          <FontIcon style={{margin: '1%'}}
                    name='star-o'
                    color= "#7C5227"
                    size={28}/>
          <FontIcon style={{margin: '1%'}}
                    name='star-o'
                    color= "#7C5227"
                    size={28}/>
          <FontIcon style={{margin: '1%'}}
                    name='star-o'
                    color= "#7C5227"
                    size={28}/>
        </View>
        )
      }
      const SavedRecipes = (props) => {
        return (
          <View style= {styles.shadowCard}>
            <TouchableHighlight style= {{borderRadius: 10}}activeOpacity={0.8}
                                underlayColor="#000000" onPress={() => console.log('Pressed')}>
            <View style= {styles.savedRecipes}>
            <View style= {{flex: 6/8, flexDirection: 'row', marginBottom: '3%'}}>
                <View style= {{flex: 3/6}}>
                  <Image
                    style={styles.foodImage}
                    source={require('../assets/images/soup.jpg')}/>
                    <Text style={{textAlign: 'center', color: '#7C5227', fontSize: 16, fontWeight:'500'}}> {props.minRecipe}/{props.maxRecipe} Ingredients</Text>
                </View>
                <View style= {{flex: 3/6}}>
                  <View style= {{flex:3/6}}>
                    <Text 
                    ellipsizeMode= {'tail'}
                    numberOfLines= {3}
                    style={{flex: 1, margin: '3%', textAlign: 'center', fontSize: 24, fontWeight:'500', color: '#7C5227'}}>{props.name}</Text>
                  </View>
                    <View style= {{flex: 3/6}}>
                      <Text
                      ellipsizeMode= {'tail'}
                      numberOfLines= {3}
                      style={{flex: 1, margin: '1%', textAlign: 'center', fontWeight:'500', color: '#7C5227', fontSize: 16}}>Cooking Time: {'\n'} {props.time}</Text>
                      <View style={{flex: 1, margin: '1%', alignItems: 'center', justifyContent: 'center'}}>
                        <Stars/>
                      </View>
                    </View>
                </View>
            </View>
            <View style= {{marginTop: '3%', marginBottom: '2%', flex: 1/8}}>
              <View style= {{flexDirection: 'row', marginBottom: '1%'}}>
                <MaterialIcon name='pot-steam'
                color= "#7C5227"
                size={30}/>
                <Text style={{padding: '2%',color: '#7C5227', fontSize: 16, fontWeight:'500'}}>{props.made} people made this recipe</Text>
              </View>
              <View style= {{flexDirection: 'row', marginBottom: '1%'}}>
                <Icon name='heart-outline'
                      color= "#7C5227"
                      size={28}/>
                <Text style={{padding: '1%', marginTop: '0.5%', marginLeft: '1%', color: '#7C5227', marginLeft:'1%', fontSize: 16, fontWeight:'500'}}>{props.saved} people saved this recipe</Text>
              </View>
            </View>
          </View>
            </TouchableHighlight>
          </View>
        )
      }

        return(
            <View style= {styles.mainContainer}> 
                  <ScrollView>
                  <View style= {{margin: 5, marginTop: 30}}>
              <TouchableOpacity style= {{flexDirection: 'row'}}
              onPress= {() => this.props.navigation.navigate('Account')}>
              <Icon style={{margin: 0, position: 'absolute'}}
              name='chevron-back-outline'
              color= '#7C5227'
              size={30} />
              <Text style= {{fontSize: 20, color: '#7C5227', fontWeight: '600', marginLeft: 28, margin: 3.5}}>Back</Text>
              </TouchableOpacity>
            </View>
                    <View style={styles.container}>
                      <SavedRecipes name= 'Soup' time= '5 Hours' saved= '2' made= '8' minRecipe= '1' maxRecipe= '2'/>
                      <SavedRecipes name= 'Cake' time= '3000 Days' saved= '12' made= '5' minRecipe= '2' maxRecipe= '2'/>
                      <SavedRecipes name= 'isinisninionioni coepaicdinv posficnvi' time= '5 Hours' saved= '0' made= '3' minRecipe= '1' maxRecipe= '8'/>
                      <SavedRecipes name= 'Omnamonaperr' time= '50 Minutes'  saved= '0' made= '3' minRecipe= '5' maxRecipe= '5'/>
                      <SavedRecipes name= 'Krtldlo' time= '50 Hours' saved= '3' made= '3' minRecipe= '1' maxRecipe= '2'/>
                      <SavedRecipes name= 'cnixincinvinivni' time= '2 Days and 20 hours'  saved= '0' made= '3' minRecipe= '3' maxRecipe= '5'/>
                      <SavedRecipes name= 'AMOMOEMOEMROMF' time= '1 Minute' saved= '5' made= '3'  minRecipe= '8' maxRecipe= '50'/>
                    </View>
                </ScrollView>
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
        width: getWidth() * 0.95,
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
        margin: '5%'
      }
});