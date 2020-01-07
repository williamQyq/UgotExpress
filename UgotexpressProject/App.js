import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/Login';
import SignUp from './components/SignUp';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

import firebase from 'firebase';
//import {db} from './components/config';



export default class App extends React.Component {

  componentDidMount() {
    // Your web app's Firebase configuration
    // firebase.database().ref('users/001').set(
    //   {
    //     name: 'yuqing',
    //     age:21

    //   }
    // ).then((data)=>{
    //   console.log('inserted');
    // }).catch((error)=> {
    //   console.log(error);
    // });
    console.log("App started=================");

  }


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
