import React from 'react';
import { Link } from 'react-router-dom';
import '../landing/landing.css';
// import Map from '../Map/map';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div className='forSale'>
        <h1>A C R E A G E&emsp;F O R&emsp;S A L E</h1>
        <p>For Sale by Owner</p>
        <Link to='/info'><button>Details</button></Link>
        </div>
      </div>
    )
  }
}

export default Landing;