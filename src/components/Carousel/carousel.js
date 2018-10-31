import React from 'react';
import one from '../../assets/FortyPics/one';

class Carousel extends React.Component {
  render() {
    retrun (
      <div className="carousel">
        <ImageSlide url={ imgUrl } />
      </div>
    );
  }

  const Arrow = ({ direction, clickFunction, glyph }) => {
    <div
      className={`slide-arrow ${direction}`}
      onclick={ clickFunction }>
      { glyph }
      </div>
  };
}

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: {one},
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}