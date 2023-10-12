import React from "react";
import { Carousel, Image } from "react-bootstrap";

const CoffeeCarousel = ({ data }) => {
  return (
    <Carousel>
      {data.map((coffee, index) => {
        return (
          <Carousel.Item key={index}>
            <Image
              className="carrossel-img"
              fluid
              src={coffee.image}
              alt={coffee.alt}
            />
            <Carousel.Caption>
              <h3>{coffee.title}</h3>
              <p>{coffee.label}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CoffeeCarousel;
