import React from 'react';
import CarouselII from '../SecondCarousel/secondCarousel';
import '../75/seventyFive.css';

class SeventyFive extends React.Component {
  render() {
    return (
      <div className='seventyDesc'>
        <CarouselII/>
        <p>75 INFO GOES HERE</p>
      </div>
    )
  }
}

export default SeventyFive;