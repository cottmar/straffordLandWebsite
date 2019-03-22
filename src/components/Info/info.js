import React, { Component } from 'react';
import Map from '../Map/map';
import { Link } from 'react-router-dom';
import '../Info/info.css';


class Info extends Component {
  render() {
    return (
      <div className="InfoDiv">
      <div id="bold">
      <p>Strafford, Missouri</p>
      </div>
        <div className="details">
        <ul>Peaceful plot of acreage adjoining Strafford City Limits. Property is in the Strafford R-VI School District which has earned the highest level of accreditation given to Missouri Public Schools. Located less than 1 mile from US I-44 and less than 6 miles from the Springfield City Limits. 
        <br></br>
        </ul>
        <ul>
        The property adjoins a fire station operated by the Strafford Fire Protection District. A Strafford owned and operated municipal sanitary sewer lift station is located via public right-of-way less than 500 feet from the property. Easement has been granted to the City of Strafford to construct a new 12-inch water main across the south end of the property.
        <br></br>
        </ul>
        <ul>
        $8,000 per acre. The <Link to="/forty" className="links">40</Link> and <Link to="/seventyFive" className="links">70</Link> can be sold together or separately.<br></br><br></br>
        For more information, contact Duane Ottmar ( <a className="phone" href="tel:1-417-299-3300">417-299-3300</a> or <a className="email" href="mailto:ottmar19@yahoo.com">by email</a> ) 
        {this.props.test}
        </ul>
        </div>
        <Map/>
      </div>
    );
  }
}

export default Info;