import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 3; 

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === totalImages) {
      setLoading(false);
    }
  }, [loadedImages]);

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center h-[50vh] lg:h-[85vh]">
          <div className="loader">Loading...</div> 
        </div>
      )}
      {!loading && (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div className="h-[50vh] lg:h-[85vh]">
            <img src="/img-car-1.jpeg" alt="Slide 1" className="h-full" onLoad={handleImageLoad} />
          </div>
          <div className="h-[50vh] lg:h-[85vh]">
            <img src="/img-car-2.jpeg" alt="Slide 2" className="h-full" onLoad={handleImageLoad} />
          </div>
          <div className="h-[50vh] lg:h-[85vh]">
            <img src="/img-car-3.jpeg" alt="Slide 3" className="h-full" onLoad={handleImageLoad} />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default ImageCarousel;
