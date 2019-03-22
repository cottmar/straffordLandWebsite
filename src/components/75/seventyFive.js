import React from 'react';
import CarouselII from '../SecondCarousel/secondCarousel';
import '../75/seventyFive.css';

class SeventyFive extends React.Component {
  render() {
    return (
      <div className='seventyDesc'>
        <CarouselII/>
        <p>75-acres directly off of Farm Road 84 and adjacent to Strafford Fire Station. Acreage has current infrastructure of a private well, wellhouse, metal hay bard, corrals, and cattle handling equipment. The current zoning is agcricultural.</p>
      </div>
    )
  }
}

export default SeventyFive;