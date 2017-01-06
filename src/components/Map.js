import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps'
import { Actions, ActionConst } from 'react-native-router-flux'

export default class Map extends Component {
    render() {
        return (
            <View>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> 
                    If the map isn't loading, take your Google Maps API Key and put it in 
                    Android Manafest: android/app/src/main/AndroidManafest.xml
                </Text>
                <Text> </Text>
                <Text>Now go back and do it again... and again... and again...</Text>

                <View style={{
                    position: 'absolute',
                    top: 200,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: 500
                }}>
                    <MapView
                        key="histmap"
                        ref="histmap"
                        pitchEnabled={false}
                        showsIndoors={false}
                        showsTraffic={false}
                        showsBuildings={false}
                        showsCompass={false}
                        showsPointsOfInterest={false}
                        mapType='standard'
                        rotateEnabled={false}
                        zoomEnabled={true}
                        toolbarEnabled={false}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: 300
                        }}
                        loadingEnabled={true} >
                    </MapView>
                </View>
            </View>
        );
  }
}
