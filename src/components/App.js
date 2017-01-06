import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import Main from './Main'
import Map from './Map'

export default class App extends Component {
  render() {
    return (
        <Router>
            <Scene
                key="main"
                component={Main}
                title="Main" />
            <Scene
                key="map"
                component={Map}
                title="Map"
                type={ActionConst.PUSH} />
        </Router>
    );
  }
}

