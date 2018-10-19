import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// withGoogleMap is a Higher Order Component
// GoogleMap is going to take in map properties

class Map extends React.Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap 
        defaultCenter = {{ lat: 37.285209, lng: -93.119380 }}
        defaultZoom = { 15 }
      >
        <Marker
           position={{ lat: 37.285209 , lng: -93.119380 }}
        />
  </GoogleMap>
  
    ));

    return (
      <div id='google-Map'>
        <GoogleMapExample
          containerElement={ <div id="mapHeight" style={{ height: `600px`, width: `960px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
};

export default Map;