import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../Info/info';
import Map from '../Map/map';
import Footer from '../Footer/footer';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
          <Info />
          <Landing/>
          <Map/>
          <Footer/>
          <Link to="/Forty">Forty Acres</Link>
          <p>DSJKGKLSDJFKL</p>
      </div>

    )
  }
}

export default Landing;