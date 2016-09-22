import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar,
  ScrollView,
  Dimensions
} from 'react-native';

import {
  Button,
  FormLabel,
  FormInput,
  Card,
  SocialIcon
} from 'react-native-elements'

import Camera from 'react-native-camera';



class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {
            showCamera: false
        }
    }

    showCamera(){
        //alert("Show camera")
        this.setState({ showCamera: true, pathFile: null });
    }

    takePicture() {
        var that = this;
        this.camera.capture()
            .then(function(data){
                that.setState({
                    showCamera: false,
                    pathFile: data.path
                })
                console.log(data)
            })
            .catch(err => console.error(err));
    }

    render(){
        var component = null;
        if(this.state.showCamera){
            component = <Camera
                  ref={(cam) => {
                    this.camera = cam;
                  }}
                  style={styles.preview}
                  aspect={Camera.constants.Aspect.fill}>
                  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURAR]</Text>
                </Camera>
        }else{
            var newCard = null;
            if(this.state.pathFile){
                newCard = <Card
                    title='HELLO WORLD'
                    image={{uri: this.state.pathFile}}>
                    <Text style={{marginBottom: 10}}>
                      The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                      small
                      icon={{name: 'code'}}
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW' />
                </Card>
            }

            component = <View>
              <SocialIcon
                type='instagram'
                onPress={this.showCamera.bind(this)}
              />

               {newCard}

                <Card
                    title='HELLO WORLD'
                    image={{uri: 'http://www.womenofgreen.com/wp-content/uploads/2015/11/i-am-ice-nature-is-speaking.jpg'}}>
                    <Text style={{marginBottom: 10}}>
                      The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                      small
                      icon={{name: 'code'}}
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW' />
                </Card>

                <Card
                    title='HELLO WORLD'
                    image={{uri: 'http://www.womenofgreen.com/wp-content/uploads/2015/11/i-am-ice-nature-is-speaking.jpg'}}>
                    <Text style={{marginBottom: 10}}>
                      The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                      small
                      icon={{name: 'code'}}
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={{uri: 'http://www.womenofgreen.com/wp-content/uploads/2015/11/i-am-ice-nature-is-speaking.jpg'}}>
                    <Text style={{marginBottom: 10}}>
                      The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                      small
                      icon={{name: 'code'}}
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={{uri: 'http://www.womenofgreen.com/wp-content/uploads/2015/11/i-am-ice-nature-is-speaking.jpg'}}>
                    <Text style={{marginBottom: 10}}>
                      The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                      small
                      icon={{name: 'code'}}
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW' />
                </Card>
                </View>
        }

        return(
            <ScrollView>
                {component}
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});



module.exports = Posts
