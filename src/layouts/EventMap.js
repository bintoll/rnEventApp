import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import MapView from "react-native-maps";

import NavBar from 'components/NavBar'

class EventMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      markers: [{
        "title": 'Club 1',
        "city": 'Москва',
        "address": 'Адресс',
        "metro": 'Таганская',
        "image": {
          "url": ''
        },
        "latlng": {
          "latitude": 55.751244,
          "longitude": 37.618423
        },
        "description": 'descrpt',
        "like_count": 4,
        "hall_id": 12,
        "liked": 2
      }],
      activeMarker: {}
    }
  }

  searchTextHandle = (text) => {
    this.setState({searchText: text})
  }

  searchHandle = () => {
    console.log('search')
  }

  findMarker = (marker) => {
    const coordinate = marker.coordinate
    const foundMarker = this.state.markers.find(item => item.latlng.latitude == coordinate.latitude && item.latlng.longitude == coordinate.longitude)
    this.setState({activeMarker: foundMarker})
  }  

  render() {
      return(
          <View style={styles.container}>
            <StatusBar
                backgroundColor='#B076A0'
                barStyle="light-content"
            />
            <NavBar navName="map"
              handleBack={() => this.props.navigation.goBack()}
              searchHandle={() => this.searchHandle()}
              textChangeHandle={(text) => this.searchTextHandle(text)}/>
            <View style={styles.ViewMap}>  
              <MapView
                initialRegion={{
                  latitude: 55.751244,
                  longitude: 37.618423,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={{flex: 1}}>
                {this.state.markers.map(marker => (
                  marker.latlng.latitude != 0 && marker.latlng.longitude != 0 && <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    key={marker.hall_id}
                    onPress={e => this.findMarker(e.nativeEvent)}
                  />
                ))}
              </MapView>    
            </View>
          </View>
      );
  }

}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: Platform.OS == 'ios' ? 0 : 15,
    },
    ViewMap: {
      flex: 1,
    }

})
export default EventMap;