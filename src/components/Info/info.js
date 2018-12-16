import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from '../Map/map';
import '../Info/info.css';


class Info extends Component {
  render() {
    return (
      <div className="InfoDiv">
      <div id="bold">
      <p>Strafford, Missouri</p>
      </div>
        <div className="details">
        <ul>Peaceful plot of 75 acres close to I-44 and convenient to Springfield. Property is located off Stan Harriman Blvd, situated on the North side between Vermillion and Old Orchard. 
        <br></br>
        </ul>
        <ul>
        City of Strafford planning a 12-inch water main on the north side of Stan Harriman Blvd between the Fire Station and Vermillion Drive.
        <br></br>
        </ul>
        <ul>
        City owned and operated Sanitary Sewer Lift Station is located in the Southeast corner of the intersection of Old Orchard Drive and Stan Harriman Blvd.
        <br></br>
        </ul>
        <ul>
        $8,000 per acre.
        For more information, contact Duane Ottmar (phone number, email) 
        {this.props.test}
        </ul>
        </div>
        <Map/>
      </div>
    );
  }
}

export default Info;