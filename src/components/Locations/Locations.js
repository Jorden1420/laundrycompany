import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../common/Footer";

const Locations = () => {
  let navigate = useNavigate();

  function handleLink() {
    window.location.href = "https://www.thelaundrycocarmichael.com/";
  }

  function handleClick() {
    navigate("/home");
  }
  //test change
  return (
    <div className="locationsContainer">
      <div className="container-fluid" id="locationHeader">
        <h1 className="text-center">Super Wash n Dry</h1>
      </div>
      <div className="container-fluid" id="pushTop">
        <div className="textHeader text-center">
          <h1 style={{ color: "#be3127" }}>Please Choose a Location</h1>
          <div className="row justify-content-center">
            <div
              className="col-md-5 riolinda"
              data-aos="fade-right"
              onClick={handleLink}
            >
              <div className="overlay">
                <div className="content">
                  <h2>Carmichael Location</h2>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 rancho"
              data-aos="fade-left"
              onClick={handleClick}
            >
              <div className="overlay">
                <div className="content">
                  <h2>Del Paso Location</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Locations;
