import React from 'react';
import one from '../../assets/FortyPics/one';


class Carousel extends React.Component {
  render() {
    return (
      // carousel is wrapper class that will be responsible for logic
      // render method will be returning the markup for layout
      <div className='carousel'>
        const ImageSlide = ({ url }) => {
          const syles = {
            backgroundImage: {one},
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          };
          return (
            <div className='image-slide' styles={styles}></div>
          );
        }
      
      </div>
    );
  }
}