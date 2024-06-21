import { useState, useEffect } from 'react';
import './CarouselBrands.css';
import images from './images'

const CarouselBrands = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ visibleImages, setVisibleImages ] = useState(4)
  const interval = 3000
  const screem = window.innerWidth

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1))
  };
  
  useEffect(()=>{ 
    if(screem <= 500){
      setVisibleImages(1)
    }
  },[screem])

  useEffect(() => {
    const autoPlay = setInterval(goToNextSlide, interval)
    return () => clearInterval(autoPlay)
  }, [currentIndex, interval])

  const displayedImages = images.slice(currentIndex, currentIndex + visibleImages)

  return (
    <div className="carousel">
      <div className="slide-container">
        {displayedImages.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${currentIndex + index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselBrands

