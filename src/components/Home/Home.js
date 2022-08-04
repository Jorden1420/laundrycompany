import React, { useState } from "react";

import Header from "../../common/Header";
import Footer from "../../common/Footer";

import Gallery from "../Gallery/Gallery";
// import Pricing from "../Pricing/Pricing";

import { Image, Card } from "react-bootstrap";

const Home = () => {
  const [scrollDiv, setScrollDiv] = useState();
  const [scrollChildDiv, setScrollChildDiv] = useState();
  const [scrollPricingDiv, setScrollPricingDiv] = useState();

  const galleryData = (data) => {
    setScrollChildDiv(data);
    // console.log("data...", data);
  };

  const pricingData = (data) => {
    setScrollPricingDiv(data);
    // console.log("data...", data);
  };

  return (
    <div className="App">
      <div className="home-container">
        <div className="container-fluid">
          <Header
            node={scrollDiv}
            childNodes={scrollChildDiv}
            pricingNodes={scrollPricingDiv}
          />
          <div className="container">
            <div className="clean-container">
              <h1 className="text-center py-4" id="unique">
                Welcome To The Laundry Company
              </h1>
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-md-12 order-2 text-center">
                  <p className="pt-4">
                    The Laundry Company is located in the Carmichael Oaks
                    Shopping Center at the corner of Fair Oaks Blvd and Marconi
                    Ave in Carmichael California. We offer self serve coin
                    laundry and drop off wash and fold service in a clean, safe,
                    well lit, family atmosphere. Fully staffed, our friendly
                    attendants are always available to answer any questions or
                    to offer help with any laundry related problems you may
                    have. Please feel welcome to stop by, do some laundry, enjoy
                    a free cup of coffee, free WiFi, view satellite TV on one of
                    our large flat screen TV's, or just relax in our comfortable
                    seating. Plus free parking in front and back.
                  </p>
                </div>
                <div className="col-lg-4 col-md-12 text-center order-1">
                  <Image
                    src="/images/Soap-Monochromatic.svg"
                    rounded
                    style={{
                      border: "3px solid #187035",
                      width: "100%",
                      padding: "30px",
                    }}
                  ></Image>
                </div>
              </div>
            </div>
            {/* Pricing Container */}
            {/* <Pricing node={scrollDiv} pricingNode={pricingData} /> */}
            <div className="super-wash-info">
              <h1 className="text-center py-4" id="unique">
                Why Super Wash n Dry?
              </h1>
              <div className="super-watch-content">
                <div className="row">
                  <div className="col-lg-4">
                    <Card>
                      <div className="icon-info text-center mt-5">
                        <i
                          className="fas fa-coins fa-4x"
                          style={{ color: "#589ca7" }}
                        ></i>
                      </div>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>
                          <h3 style={{ fontWeight: "bold", color: "#F4752C" }}>
                            Self Service Coin Laundry
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          The Laundry Company offers a large variety of
                          commercial size washers and dryers for all your coin
                          laundry needs in a clean friendly atmosphere. We
                          remain fully attended so help is only a few steps
                          away.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4">
                    <Card>
                      <div className="icon-info text-center mt-5">
                        <i
                          className="fas fa-walking fa-4x"
                          style={{ color: "#589ca7" }}
                        ></i>
                      </div>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>
                          <h3 style={{ fontWeight: "bold", color: "#F4752C" }}>
                            Wash Dry And Fold Service
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          The process is simple. You drop off your laundry. One
                          of our attendants does your laundry for you. You pick
                          up your laundry fresh, clean, and folded. Usually
                          within 24-48 hours.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4">
                    <Card>
                      <div className="icon-info text-center mt-5">
                        <i
                          className="fas fa-air-freshener fa-4x"
                          style={{ color: "#589ca7" }}
                        ></i>
                      </div>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>
                          <h3 style={{ fontWeight: "bold", color: "#F4752C" }}>
                            Excellent Quality
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          Our machines are always cleaned and have a vast amount
                          of selection options on how customers would like their
                          clothes cleaned and dryed to provide the highest
                          quality of cleasiness.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Gallery Component */}
              <Gallery node={scrollDiv} galleryNode={galleryData} />
              <div className="contact-container">
                <h1 className="text-center py-4" id="unique">
                  Contact us
                </h1>
                <div className="contact" ref={(node) => setScrollDiv(node)}>
                  <div className="row">
                    <div
                      className="col-lg-5 p-4 align-items-center"
                      style={{ backgroundColor: "#187035" }}
                    >
                      <h3
                        className="contact-info text-white"
                        style={{ fontWeight: "bold" }}
                      >
                        Contact Information
                      </h3>
                      <a
                        href="tel:9164841180"
                        className="phone text-white d-block pt-3"
                      >
                        <strong>Phone:</strong> (916) 484-1180
                      </a>
                      <a
                        href="https://www.google.com/maps/place/Super+Wash+n+Dry/@38.6091135,-121.4543434,17z/data=!3m2!4b1!5s0x809ad75a32d12153:0x676687962f893b99!4m5!3m4!1s0x809ad7ad236145d5:0x26da0d4c65efe610!8m2!3d38.6092226!4d-121.4521535"
                        className="address text-white d-block pt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Address:</strong> 6450 Fair Oaks Blvd,
                        Carmichael, CA 95608
                      </a>
                      <h3
                        className="contact-info py-3 text-white"
                        style={{ fontWeight: "bold" }}
                      >
                        Business Hours
                      </h3>
                      <p className="text-white">
                        <strong>
                          Open every day 7 day a week from 7AM - 10PM
                        </strong>
                      </p>
                      <p className="text-white">
                        <strong>Last Wash @ 8:30PM</strong>
                      </p>
                      <h3
                        className="contact-info pt-3 text-white"
                        style={{ fontWeight: "bold" }}
                      >
                        Social Media
                      </h3>
                      <div className="contact-social-media">
                        <a
                          href="https://www.google.com/maps/place/The+Laundry+Company/@38.6186845,-121.3296372,17z/data=!3m1!4b1!4m5!3m4!1s0x809adc3e55d15023:0xd76ec371e7438ae2!8m2!3d38.6186811!4d-121.3274392"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="The Laundry Company Carmichael Google Directions"
                          className="d-inline-block p-3"
                        >
                          <i className="fab fa-google fa-3x"></i>
                        </a>
                        <a
                          href="https://www.yelp.com/biz/the-laundry-company-carmichael"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="The Laundry Company Carmichael Yelp"
                          className="d-inline-block p-3"
                        >
                          <i className="fab fa-yelp fa-3x"></i>
                        </a>
                        <a
                          href="https://www.facebook.com/thelaundrycompanyofcarmichael/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="The Laundry Company Carmichael Facebook Page"
                          className="d-inline-block p-3"
                        >
                          <i className="fab fa-facebook fa-3x"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="map">
                        <Image
                          src="/images/swd-map.jpg"
                          className="w-100"
                          style={{ border: "3px solid #36567E" }}
                          rounded
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
