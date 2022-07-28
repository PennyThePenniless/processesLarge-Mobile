import React, {Component, useState} from 'react';
import { Dimensions, StyleSheet, Switch, FlatList, Text, TextInput, View, SectionList,ScrollView} from 'react-native';
import {Ingredient} from "../assets/Ingredients.js";
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import IoIcon from 'react-native-vector-icons/Ionicons'
import OctIcon from 'react-native-vector-icons/Octicons'
global.showResults = false, global.setShowResults = false;
global.strInput = "", global.setInput = "";

export default class SearchScreen extends Component {
   
    handleAdd = (event) => {

       /* event.preventDefault();
        setShowResults(true)*/
        const arr = strInput.split(' ').join('')
        const jsonArr = arr.split(',');
       

        // VALIDATE INGREDIENT (or maybe move this to search bar)

        // IF VALID
        // State variable are asynchronous, so we make a copy to get the updated value
        const newIngredients = {"ingredients":jsonArr};
        
        this.addToObject(jsonArr)
    }

    handleChange = (text) => {
        strInput = text;
        //setInput(strInput);
    }

getIngridients = [{title: "Ingredients", 
id: 1, data: []},
 {title: 'Exclude', id: 1, data: []}];
   

    constructor() {
        super()
        this.state = {
            isExcluded: false,
            includeList: 0,
            excludeList: 0,
            foodList: this.getIngridients
        }
    }
    listItem = ({item, index}) => {
        //this.setState({includeList: this.state.includeList + 1});
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: '10%', margin: '3%'}}>
                <TouchableOpacity style= {{flex: 1}}onPress= {() => this.deleteItemById(item, index)}>
                <OctIcon style={{flex: 1/5}}
                        name='x'
                        color={"#FEFAE0"}
                        size= {45}/>
                </TouchableOpacity>
                <Text numberOfLines={2} ellipsisMode= 'tail' style={{flex: 4/5, marginLeft: '5%', alignItems: 'center', textAlign: 'center', color: '#7C5227', fontSize: 26, fontWeight: '600'}}>{item}</Text>
            </View>
        )
    
    }

    addToObject = (newList) => {
        if (this.state.isExcluded) {

            //Check to see if items are on the other
                let arr = this.state.foodList.at('1').data.concat(newList);

                let uniqueArr = [...new Set(arr)];
                let newFoodList = this.state.foodList;

                if (uniqueArr.length == 0) {
                    return;
                }

                let notExist = uniqueArr.every(element => {
                    if (newFoodList.at(0).data.includes(element)) { //checks excluded
                        console.log(element + " is in the Ingredients List!");
                        return false;
                    }
                    return true;
                });
                
                if(!notExist) {
                    return;
                }

                newFoodList.at(1).data = uniqueArr.slice(0);
                let length = newFoodList.at(1).data.length
                this.setState({foodLis: newFoodList, excludeList: length});
        } else {
            if(newList != "") {
                let arr = this.state.foodList.at('0').data.concat(newList);

                let uniqueArr = [...new Set(arr)];

                if (uniqueArr.length == 0) {
                    return;
                }

                let newFoodList = this.state.foodList;

                let notExist = uniqueArr.every(element => {
                    if (newFoodList.at(1).data.includes(element)) { //checks excluded
                        console.log(element + " is in the Exclude List!");
                        return false;
                    }
                    return true;
                });
                
                if(!notExist) {
                    return;
                }
                newFoodList.at(0).data = uniqueArr.slice(0);
                let length = newFoodList.at(0).data.length;
                this.setState({foodLis: newFoodList, includeList: length});
            }

        }
    }

    deleteItemById = (id, index) => {
        let title = "";
        const filteredData = this.state.foodList.filter(item => {
            if (item.data[index] == id) {
                item.data.splice(index, 1);
                title = item.title;
            }
            return item;
        });
        if (title == "Ingredients") {
            this.setState({ foodList: filteredData, includeList: this.state.includeList - 1});
        }
        else {
            this.setState({ foodList: filteredData, excludeList: this.state.excludeList - 1});
        }
      }

    render() {
         
        return(
            <View style={styles.mainContainer}>
                <View style= {styles.container}>
                    <View style= {{height: getHeight() * 0.25, width: '100%', backgroundColor: '#FEFAE0'}}>
                    <View style={styles.header}>
                        <View style= {{ flex: 3/5}}>
                            <View style= {{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput style={[styles.textInput]} 
                                onChangeText={this.handleChange} 
                                placeholder="Seperate ingredients with a comma"/>
                            <TouchableHighlight style= {[styles.addButton, { justifyContent: 'center', alignItems: 'center', padding: 10}]} onPress={this.handleAdd}>
                                <IoIcon style= {{ textAlign: 'center'}}
                                        name= "add-outline"
                                        color= "#FEFAE0"
                                        size= {32}/>
                            </TouchableHighlight> 
                            </View>
                        </View>
                        <View style= {{flex: 2/5, flexDirection: 'row', margin: '2%', marginRight: '8%', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style= {{fontSize: 15, margin: '0.5%', color: this.state.isExcluded ? 'rgba(239,81,32, 0.80)' : '#A5B082', fontWeight: '600'}}>{this.state.isExcluded ? "Exclude" : "Include"}</Text>
                            <Switch
                                onValueChange={(val) => {
                                    console.log(val)
                                    this.setState({isExcluded: val});
                                }}
                                value={this.state.isExcluded}
                                trackColor={{true: "rgba(239,81,32, 0.60)", false: "#CCD5AE"}}
                                ios_backgroundColor="#CCD5AE"
                                thumbColor={"#7C5227"}/>
                        </View>
                    </View>
                    </View>
                    <View style={styles.list}>
                        <View style= {{alignItems: 'center'}}>
                        <TouchableHighlight style= {styles.searchButton} onPress={this.getRecipes}>
                                <Text style= {{fontSize: 20, width: '100%', fontWeight: '700', textAlign: 'center', color: '#FEFAE0'}}>Search for Recipes</Text>
                            </TouchableHighlight> 
                        </View>
                        <View style= {{flex: 1, width: getWidth() * 0.95, flexDirection: 'column', margin:'3%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style= {{flex: 1, width: '100%'}}>
                            <SectionList
                                    sections={this.state.foodList}
                                    renderItem={this.listItem}
                                    renderSectionHeader={({ section: { title } }) => (
                                        <Text style={{fontSize: 32, fontWeight: '700', textAlign: 'center', margin:'5%', color: '#7C5227'}}>{ title == "Exclude" && this.state.excludeList == 0 ? "" : title}</Text>
                                      )}
                                    keyExtractor={(item, index) => item + index}
                                    stickySectionHeadersEnabled= {false}
                                    extraData={this.state}
                                    />
                            </View>
                        </View>
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



getRecipes = async () => {
    var obj = {ingredients: this.state.foodList.at(0).data.toString()};
    var js = JSON.stringify(obj);
    var res;
    try {
        //Send Login request
        const response = await fetch('https://processes-recipe.herokuapp.com/homepage/findByIngredients',
        {method:'POST', body:js,headers:{'Content-Type': 'application/json'}});
        res = response;
        var _results = JSON.parse(await res.text());
        if( res.status == 200 ) //Success
        {
          this.props.navigation.navigate('ResultsList', {
            recipe: _results, length: _results.length
          });
        }
      }
      catch (error) { //Falls here if status code is not 200
          console.log(res.status);        
      }
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
      backgroundColor: '#BBC893',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flex: 1,
        marginTop: getHeight() * 0.08,
        backgroundColor: '#FEFAE0',
        width: '100%',
        flexDirection:'column',
        justifyContent: 'center'
    },
    list: {
        flex: 1,
        backgroundColor: "#BBC893",
        width: getWidth() * 0.95,
        alignItems: 'center' 
    },
    textInput: {
        height: '80%',
        width: '80%',
        color: '#7C5227',
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
        fontWeight: '600',
        borderWidth: 0,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'white'
      },
      addButton: {
        backgroundColor: '#7C5227',
        height: '80%',
        width: '100%',
        borderWidth: 0,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
      },
      searchButton: {
        justifyContent: 'center',
        margin: '1%',
        padding: 10,
        backgroundColor: "#7C5227",
        width: '80%',
        borderRadius: 5
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
