/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class AwesomeProject extends Component {
  constructor() {
    super();
    this.state = {
      markers: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        markers: [{
          latlng: {
            latitude: 20,
            longitude: -120,
          },
          id: 1
        }]
      })
    }, 100);

  }

  render() {
    return (
      <MapView
        style={{width: '100%', height: 500}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.latlng}
            image="https://cdn3.iconfinder.com/data/icons/flat-icons-small-version/64/location-pin-512.png"
          />
        ))}
      </MapView>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
