import React from 'react';
import { ReactDOM, Component } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './ImgCarousel.css';
import one from '../../assets/FortyPics/one/one.jpg';
import two from '../../assets/FortyPics/two/two.jpg';
import three from '../../assets/FortyPics/three/three.jpg';
import four from '../../assets/FortyPics/four/four.jpg';
import five from '../../assets/FortyPics/five/five.jpg';

class ImgCarousel extends React.Component {
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
              <div>
                  <img src={five} alt="landPic" />
                  <p className="legend">Legend 5</p>
              </div>
          </Carousel>
      );
  }
};

export default ImgCarousel;