import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import FoodScreen from './screens/FoodScreen';
import HomeScreen from './screens/HomeScreen';
import ForgotScreen from './screens/ForgotScreen';

export default class App extends React.Component {
  
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false,
      detachInactiveScreen: true,
      detachPreviousScreen: true
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false,
      detachInactiveScreen: true,
      detachPreviousScreen: true
    }
  },
  Forgot: {
    screen: ForgotScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: true,
      detachInactiveScreen: true,
      detachPreviousScreen: true
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false
    }
  },
  Food: {
    screen: FoodScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false
    }
  },
  
},{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);
