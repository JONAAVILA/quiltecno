import { useState } from 'react';

const Carrusel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel">
        <button onClick={goToPrevSlide}>Prev</button>
        <div className="slide-container">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    );
};

export default Carrusel;

