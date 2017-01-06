import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text>
          To reproduce the memory leak on Android, click on "Go to Map", see
          the map load, click the back button, and repeat. With the Android Memory Monitor
          running, the memory leak is pretty obvious after about 10 times of loading the map.
        </Text>
        <Text> </Text>
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
            <Text onPress={() => Actions.map()}>Go To Map -></Text>
        </View>
      </View>
    );
  }
}