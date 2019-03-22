import React from 'react';
import ImgCarousel from '../Carousel/carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../40/forty.css';

class Forty extends React.Component {
  render() {
    return (
      <div className='fortyDesc'>
        <ImgCarousel/>
        
        <p>40-acre plot accessible through easement off of Farm Road 84 and adjoins the 75 acres on the West side. It is mostly cleared with several acres of timber. The 40 has a stock watering pond and is accessible from two sides. Fences are older, but in good condition.</p>
      </div>
    )
  }
}

export default Forty;