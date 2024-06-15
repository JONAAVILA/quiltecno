import { useState, useEffect } from 'react'
import images from './images.js'
import './CarouselServices.css';

const CarouselServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const interval = 4000
  const visibleImages = 1

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1))
  };

  useEffect(() => {
    const autoPlay = setInterval(goToNextSlide, interval)
    return () => clearInterval(autoPlay)
  }, [currentIndex, interval]);

  const displayedImages = images.slice(currentIndex, currentIndex + visibleImages)

  return (
    <div className="carousel_services">
      <div className="slide-container_services">
        {displayedImages.map((image, index) => (
          <div key={index} className="slide_services">
            <img src={image.img} alt={`Slide_services ${currentIndex + index}`} />
            <h3 className='text_services' >{image.text}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselServices;
