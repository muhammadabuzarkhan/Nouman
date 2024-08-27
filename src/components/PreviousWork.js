import React, { useState } from 'react';
import './styles/PreviousWork.css';
import image1 from './images/arrow.png'
import image2 from './images/audioengineer.jfif'
const PreviousWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { id: 1, name: 'Avery Davis', img: image2 },
    { id: 3, name: 'Neil Tran', img:image2 },
    { id: 4, name: 'Cahaya Dewi', img:image2},
  ];

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="previous-work-container">
      <button className="arrow left-arrow" onClick={goPrevious}>
        &#10094;
      </button>

      <div className="carousel">
        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          const isSideCard =
            index === (currentIndex + 1) % projects.length ||
            index === (currentIndex - 1 + projects.length) % projects.length;

          return (
            <div
              key={project.id}
              className={`carousel-card ${isActive ? 'active' : ''} ${isSideCard ? 'side-card' : ''}`}
            >
              <img src={project.img} alt={project.name} />
              {isActive && <h3>{project.name}</h3>}
            </div>
          );
        })}
      </div>

      <button className="arrow right-arrow" onClick={goNext}>
        &#10095;
      </button>
    </div>
  );
};

export default PreviousWork;
