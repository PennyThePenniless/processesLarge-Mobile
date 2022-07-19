import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false,
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: false, // Will hide header for HomePage
      animationEnabled: false
    }
  }
},{
  initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);