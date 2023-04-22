import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../imagen/acuario2.jpg';
import foto2 from '../imagen/acuario3.jpg';
import foto3 from '../imagen/Hogar.jpg';
import carusel from '../carusel/carusel.css';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="flex w-80 slide"
          src={foto1}
          alt="First slide"
          style={{ width:750}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="flex w-80 slide"
          src={foto2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="flex w-80 slide"
          src={foto3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;