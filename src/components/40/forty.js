import React from 'react';
import ImgCarousel from '../Carousel/carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../40/forty.css';

class Forty extends React.Component {
  render() {
    return (
      <div className='fortyDesc'>
        <p> 40 INFO GOES HERE</p>
        <ImgCarousel/>
      </div>
    )
  }
}

export default Forty;