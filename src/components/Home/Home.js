import React from "react";

import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel fade>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/images/home-image1.webp"
              alt="Picture of The Laundry Company"
            />
            <Carousel.Caption>
              <h3>Great Deals!</h3>
              <p>
                Ask About Our Freeloader And Dirty Dozen Cards And Start Saving
                Today!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="/images/home-image2.webp"
              alt="Inside the building"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/home-image3.webp"
              alt="Various laundry machines at work"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
