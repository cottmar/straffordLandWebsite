import React from 'react';
import DemoCarousel from '../Carousel/carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../40/forty.css';

class Forty extends React.Component {
  render() {
    return (
      <div className='fortyDesc'>
        <p> 40 INFO GOES HERE</p>
        <DemoCarousel/>
      </div>
    )
  }
}

export default Forty;