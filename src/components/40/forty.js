import React from 'react';
import ImgCarousel from '../Carousel/carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../40/forty.css';

class Forty extends React.Component {
  render() {
    return (
      <div className='fortyDesc'>
        <ImgCarousel/>
        
        <p>Forty acre plot accessible through easement off of Farm Road 84. Acreage has many mature trees, a pond, flat spots, and soft rolling hills. Surrounded by other acreage and very private.</p>
      </div>
    )
  }
}

export default Forty;