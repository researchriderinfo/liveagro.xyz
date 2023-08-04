import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import style from "./review.module.css";


const Review = () => {


const clientReviews = [
  {
    name: "John Doe",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "client1.jpg",
  },
  {
    name: "Jane Smith",
    review: "Nullam luctus cursus neque quis posuere.",
    image: "client2.jpg",
  },
  // Add more review objects as needed
];

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    
  return (
    <Container>
    <Carousel className="pb-lg-5" id="home">
     <Carousel.Item>
        <Carousel.Caption
          className={style["carousel-caption"]}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <h3>Innovative Farming for a Sustainable Tomorrow</h3> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
};

export default Review;
