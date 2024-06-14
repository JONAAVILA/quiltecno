import { useState, useEffect } from 'react'
import './CarouselServices.css';

const CarouselServices = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 1

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - visibleImages : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const autoPlay = setInterval(goToNextSlide, interval);
    return () => clearInterval(autoPlay);
  }, [currentIndex, interval]);

  const displayedImages = images.slice(currentIndex, currentIndex + visibleImages);

  return (
    <div className="carousel_services">
      <button onClick={goToPrevSlide}>Prev</button>
      <div className="slide-container_services">
        {displayedImages.map((image, index) => (
          <div key={index} className="slide_services">
            <img src={image} alt={`Slide_services ${currentIndex + index}`} />
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default CarouselServices;
