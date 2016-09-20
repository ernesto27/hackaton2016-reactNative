import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar
} from 'react-native';

var Login = require('./src/components/Login');
var Posts = require('./src/components/Posts');


class hackaton2016 extends Component {
    renderScene(route, navigator) {
       if(route.name == 'Login') {
         return <Login navigator={navigator} />
       }
       if(route.name == 'Posts') {
         return <Posts navigator={navigator} />
       }
    }

    render() {
        return (
            <Navigator
              style={{ flex:1 }}
              initialRoute={{ name: 'Login' }}
              renderScene={ this.renderScene } />

            );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('hackaton2016', () => hackaton2016);
