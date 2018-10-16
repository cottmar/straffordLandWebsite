import React, { Component } from 'react';
// import '../info/info.css';

// placehold for all other Components, can put inside the Div

class Info extends Component {
  // can only have one div, but as many elements inside of the div as you'd want.
  render() {
    return (
      <div className="InfoDiv">
        <div className="details">
        Peaceful plot of 75 acres close to I-44 and convenient to Springfield. Property is located off Stan Harriman Blvd, situated on the North side between Vermillion and Old Orchard. 
        <br></br>
        City of Strafford planning a 12-inch water main on the north side of Stan Harriman Blvd between the Fire Station and Vermillion Drive.
        <br></br>
        City owned and operated Sanitary Sewer Lift Station is located in the Southeast corner of the intersection of Old Orchard Drive and Stan Harriman Blvd.
        <br></br>
        $8,000/acre
        For more information, contact Duane Ottmar (phone number, email) 
        {this.props.test}
        </div>
      </div>
    );
  }
}

export default Info;