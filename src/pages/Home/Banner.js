import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import street from '../../photoes/banner/street.png'
import banner from '../../photoes/banner/banner.jpeg'
import banner2 from '../../photoes/banner/banner2.png'

const Banner = () => {
   return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h1 className='fw-bold'>Pictursque</h1>
        <p>The picturesque serves the best shoot of nature.The most uncommon valuable and attractable frame will catch your eye here.</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={street}
          alt="Second slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h1  className='fw-bold'>Pictursque</h1>
        <p>The picturesque serves the best shoot of nature.The most uncommon valuable and attractable frame will catch your eye here.</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="Third slide"
        />
        <div class="carousel-caption d-none d-md-block">
        <h1  className='fw-bold'>Pictursque</h1>
        <p>The picturesque serves the best shoot of nature.The most uncommon valuable and attractable frame will catch your eye here.</p>
      </div>
      </Carousel.Item>
    </Carousel>
   );
};

export default Banner;