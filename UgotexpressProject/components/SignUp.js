import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {db} from './config';

export default class SignUp extends Component {
    state = {
        email: "",
        password:"",
        errorMessage: null
    }

    
    SignUp = () => {
        console.log("SignUp================================>");
        //const { email,password} = this.state;
        //firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then( () => this.props.navigation.navigate('Login')).catch(error => this.setState({errorMessage: error.message}))
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(user => { 
                       console.log(user);
                 });
      } catch (error) {
            console.log(error.toString(error));
          }
    };
       

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}
                            onPress={Keyboard.dismiss}>
                    <View style={styles.logoContainer}>
                        
                        <View style={styles.infoContainer}>
                            <TextInput style={styles.input}
                                placeholder="Enter your name"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='next'
                                autoCorrect={false}
                                onSubmitEditing={()=> this.refs.emailAddress.focus()}
                            />
                            <TextInput style={styles.input}
                                placeholder="Enter username/email"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={"emailAddress"}
                                onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                onChangeText={email => this.setState({email})}
                                value={this.state.email}
                            />
                            <TextInput style={styles.input}
                                placeholder="Enter password"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='next'
                                secureTextEntry
                                autoCorrect={false}
                                ref={"txtPassword"}
                                onSubmitEditing={()=> this.refs.retxtPassword.focus()}
                                onChangeText={password => this.setState({password})}
                                value={this.state.password}
                            />
                            <TextInput style={styles.input}
                                placeholder="ReEnter password"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                                ref={"retxtPassword"}
                            />

                            <TouchableOpacity style={styles.buttonContainer} onPress={this.SignUp}>
                                <Text style={styles.buttonText}>SIGN UP</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    flexDirection: 'column'
  },
  logoContainer: {
    flex:1,
    alignItems: 'center',
    paddingBottom: 100,
    justifyContent: 'center'
  },
  logoFont: {
      fontFamily: 'Roboto',
      fontSize: 40,
      fontWeight: 'bold',
      color: 'gold'
  },
  title: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      marginTop:5,
      opacity:0.8
  },
  infoContainer:{
    position:'absolute',
    left: 0,
    right: 0,
    height: 250,
    padding:20,
    //backgroundColor: 'red',

  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      color: '#fff',
      marginBottom: 20,
      paddingHorizontal: 10
  },
  buttonContainer:{
      backgroundColor: '#f7c744',
      paddingVertical: 15
  },
  buttonText:{
      textAlign:'center',
      color:'#fff',
      fontWeight: 'bold',
      fontSize:18
  },
  bottomContainer:{
   paddingVertical:15
  },
  bottomFont:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#fff'
  },
});

