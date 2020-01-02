import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/Login';
import SignUp from './components/SignUp';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){  
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Back',
      headerStyle: {
        backgroundColor: '#6495ed',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      }
    }
  }
},{
  initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);
