import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

export default class SignUp extends Component {
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
                            />
                            <TextInput style={styles.input}
                                placeholder="Enter password"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='next'
                                secureTextEntry
                                autoCorrect={false}
                                ref={"txtPassword"}
                                onSubmitEditing={()=> this.refs.retxtPassword.focus()}
                            />
                            <TextInput style={styles.input}
                                placeholder="ReEnter password"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                                ref={"retxtPassword"}
                            />

                            <TouchableOpacity style={styles.buttonContainer} >
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

