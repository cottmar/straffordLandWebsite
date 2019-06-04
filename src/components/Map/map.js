import React from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from 'react-google-maps';

// withGoogleMap is a Higher Order Component
// GoogleMap is going to take in map properties

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  handleInfoOpen = () => {
    this.setState({
      isOpen: true
    });
  }

  handleInfoClose = () => {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const sevfiveCoords = [
      { lat: 37.285223, lng: -93.121236 },
      { lat: 37.285153, lng: -93.117771 },
      { lat: 37.292296, lng: -93.117594 },
      { lat: 37.292423, lng: -93.122062 },
      { lat: 37.287212, lng: -93.122237 },
      { lat: 37.287167, lng: -93.121189 },
      { lat: 37.285223, lng: -93.121236 }
    ];

    const fortyCoords = [
      { lat: 37.292423, lng: -93.122062 },
      { lat: 37.292554, lng: -93.126719 },
      { lat: 37.288869, lng: -93.126759 },
      { lat: 37.288831, lng: -93.122252 },
      { lat: 37.292423, lng: -93.122062 }
    ]

    const easeCoords = [
      { lat: 37.2888893, lng: -93.126640 },
      { lat: 37.288876, lng: -93.126788 },
      { lat: 37.285302, lng: -93.126816 },
      { lat: 37.285316, lng: -93.126663 },
      { lat: 37.2888893, lng: -93.126640 }
    ]

    const GoogleMapExample = withGoogleMap(props => (
      <div className='map'>
        <GoogleMap 
          defaultCenter = {{ lat: 37.285209, lng: -93.119380 }}
          defaultZoom = { 15 }
          mapTypeId='satellite'
        >
          <Marker
              position={{ lat: 37.285972 , lng: -93.119464 }}
              defaultLabel='75'
              onClick={() => this.handleInfoOpen()}
            >
            {
              this.state.isOpen && 
                <InfoWindow
                  onCloseClick={this.props.handleInfoClose}
                >
                  <h1 style={{color: "black", fontSize: "15px"}}>75 Acres</h1>
              </InfoWindow>
            }
          </Marker>
          <Marker
              position={{ lat: 37.289759 , lng: -93.123170 }}
              defaultLabel='40'
              onClick={() => this.handleInfoOpen()}
            >
            {
              this.state.isOpen && 
                <InfoWindow
                  onClick={() => this.handleInfoClose()}
                >
                  <h1 style={{color: "black", fontSize: "15px"}}>40 Acres</h1>
              </InfoWindow>
            }
          </Marker>
          <Marker
              position={{ lat: 37.285478 , lng: -93.126769 }}
              onClick={() => this.handleInfoOpen()}
            >
            {
              this.state.isOpen && 
                <InfoWindow
                  onCloseClick={this.props.handleInfoClose}
                >
                  <h1 style={{color: "black", fontSize: "15px"}}>40 foot easement</h1>
              </InfoWindow>
            }
          </Marker>
          <Polyline
            path={sevfiveCoords}
            geodesic={true}
            options={{
              strokeColor: "#ff2527",
              strokeOpacity: 0.75,
              strokeWeight: 2
            }}
          />
            <Polyline
            path={fortyCoords}
            geodesic={true}
            options={{
              strokeColor: "lime",
              strokeOpacity: 0.75,
              strokeWeight: 2
            }}
          />
            <Polyline
            path={easeCoords}
            geodesic={true}
            options={{
              strokeColor: "lightblue",
              strokeOpacity: 0.75,
              strokeWeight: 2
            }}
          />
        </GoogleMap>
      </div>
    ));

    return (
      <div id='google-Map'>
        <GoogleMapExample
          containerElement={ <div id="mapHeight" style={{ height: `600px`, width: `100%` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
    
  }
};

export default Map;