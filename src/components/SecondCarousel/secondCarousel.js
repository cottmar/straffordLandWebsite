import React from 'react';
// import { ReactDOM, Component } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import two from '../../assets/SeventyFivepics/two/75street.jpeg';
import three from '../../assets/SeventyFivepics/three/75land.jpeg';
import four from '../../assets/SeventyFivepics/four/image.jpg';

class CarouselII extends React.Component {
  render() {
      return (
            <Carousel autoPlay>
              <div>
                  <img src={four} alt="landPic" />
                  <p className="legend">View toward barn</p>
              </div>
              <div>
                  <img src={two} alt="landPic" />
                  <p className="legend">75 Acres</p>
              </div>
              <div>
                  <img src={three} alt="landPic" />
                  <p className="legend">View from Stan Harriman Rd</p>
              </div>

          </Carousel>
      );
  }
};

export default CarouselII;