import { useState, useEffect } from 'react';
import './CarouselBrands.css';

const CarouselBrands = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    '../../brands/Quiltecno-LG.png',
    '../../brands/Quiltecno-Apple.png',
    '../../brands/Quiltecno-Motorola.png',
    '../../brands/Quiltecno-Nokia.png',
    '../../brands/Quiltecno-Sony.png',
    '../../brands/Quiltecno-Xiaomi.png',
    '../../brands/Quiltecno-Samsung.png',
  ]
  const interval = 3000
  const visibleImages = 4

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1))
  };

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

