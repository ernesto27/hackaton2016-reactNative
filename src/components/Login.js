import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar,
  ToolbarAndroid
} from 'react-native';

import {
  Button,
  FormLabel,
  FormInput
} from 'react-native-elements'



class Login extends Component{
    _navigate(){
      this.props.navigator.push({
        name: 'Posts', // Matches route.name
      })
    }

    render(){
        return(
            <View >
                <ToolbarAndroid
                        style={{ height: 35, backgroundColor: 'black'}}
                        title='Login'
                        titleColor={'#FFF'}/>

                <Text style={styles.loginTitle}>HACKATON 2016 - LOGIN</Text>

                <FormLabel>Username</FormLabel>
                <FormInput/>

                <FormLabel>Password</FormLabel>
                <FormInput/>

                <Button
                  raised
                  icon={{name: 'done'}}
                  title='SUBMIT'
                  backgroundColor='#03A9F4'
                  onPress={ () => this._navigate() }
                   />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  loginTitle:{
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold'

  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = Login
