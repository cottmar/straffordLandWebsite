import React from 'react';
import { ReactDOM, Component } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import one from '../../assets/SeventyFivepics/one/IMG_20180705_154227.jpg';
import two from '../../assets/SeventyFivepics/two/IMG_20180705_154249.jpg';
import three from '../../assets/SeventyFivepics/three/IMG_20180705_154259.jpg';
import four from '../../assets/SeventyFivepics/four/image.jpg';

class CarouselII extends React.Component {
  render() {
      return (
            <Carousel autoPlay>
              <div>
                  <img src={one} alt="landPic" />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src={two} alt="landPic" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src={three} alt="landPic" />
                  <p className="legend">Legend 3</p>
              </div>
              <div>
                  <img src={four} alt="landPic" />
                  <p className="legend">Legend 4</p>
              </div>
          </Carousel>
      );
  }
};

export default CarouselII;