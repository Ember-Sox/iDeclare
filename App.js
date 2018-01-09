/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  Image,
  ScrollView
} from 'react-native';

const remote = 'https://cdn.pixabay.com/photo/2016/09/19/16/17/colorado-1680631_1280.jpg';

export default class App extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Howdy!',
      description: 'Welcome to I Declare! If you need any southern style colloqualisms, feel free to click that button down yander. Don\'t click it too fast, ya hear? If you do, the app will be madder than a wet hen and toss some errors your way.'
    };
  }
  async _onPressButton() {
    var response = await fetch('https://calm-everglades-65247.herokuapp.com/random')
    var phrase = await response.json()
    this.setState({phrase: phrase[0].saying, description: phrase[0].description});
  };

  render() {
    const resizeMode = 'cover';
    return (
    //trying
    <View style={{
        flex: 1,
        backgroundColor: '#eee'
      }}>
      <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}>
        <Image style={{
            flex: 1,
            resizeMode
          }} source={{
            uri: remote
          }}/>
      </View>
      <View style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center'
        }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            iDeclare!
          </Text>
          <Text style={styles.saying}>
            {this.state.phrase}
          </Text>
          <ScrollView style={styles.scroll}>
            <Text style={styles.description}>
              {this.state.description}
            </Text>
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <View style={styles.button} onPress={this._onPressButton.bind(this)}>
              <Text style={styles.text} onPress={this._onPressButton.bind(this)}>
                Let's get it
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  welcome: {
    backgroundColor: 'black',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5,
    fontSize: 40,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  saying: {
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5,
    fontFamily: 'Didot',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 30,
    position: 'absolute',
    top: '15%',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    overflow: 'scroll'
  },
  description: {
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5,
    fontFamily: 'Didot',
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  buttonWrapper:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    width: '100%',
    height: '15%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 10,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
  },
  text: {
    textShadowColor: 'grey',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5,
    padding: 10,
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: 'white'
  },
  scroll: {
    position: 'absolute',
    top: '30%',
    height: '45%'
  }
});
