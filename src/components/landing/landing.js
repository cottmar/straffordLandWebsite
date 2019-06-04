import React from 'react';
import { Link } from 'react-router-dom';
import '../landing/landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div className='forSale'>
        <h1>S T R A F F O R D,&emsp;M I S S O U R I</h1>
        <p>For Sale by Owner</p>
        <Link to='/info'><button>Details</button></Link>
        </div>
      </div>
    )
  }
}

export default Landing;