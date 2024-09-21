import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div className="h-[50vh] lg:h-[85vh]">
        <img src="/img-car-1.jpeg" alt="Slide 1" className="h-full" />
        
      </div>
      <div className="h-[50vh] lg:h-[85vh]">
        <img src="/img-car-2.jpeg" alt="Slide 2" className="h-full" />
        
      </div>
      <div className="h-[50vh] lg:h-[85vh]">
        <img src="/img-car-3.jpeg" alt="Slide 3" className="h-full" />
        
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
