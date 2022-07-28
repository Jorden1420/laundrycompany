import React from "react";

import { Button, Image } from "react-bootstrap";

const Header = (props) => {
  const scrollToNode = () => {
    const node = props.node;
    node.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToChildNode = () => {
    const childNode = props.childNodes;
    // console.log("the node is...", node);
    childNode.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricingNode = () => {
    const childNode = props.pricingNodes;
    // console.log("the node is...", node);
    childNode.scrollIntoView({ behavior: "smooth" });
  };

  // console.log("props are...", props);
  return (
    <header
      className="app-header"
      style={{
        backgroundImage: `url("/images/laundrycompanycover.jpg")`,
      }}
    >
      <div className="container">
        <nav className="navigation-bar">
          <div className="logo">
            <a className="app-link" href="/">
              The <br /> Laundry <br /> Company
            </a>
          </div>
          <div className="menu-items">
            <ul>
              <li onClick={() => scrollToPricingNode()}>Pricing</li>
              <li onClick={() => scrollToChildNode()}>Gallery</li>
              <li onClick={() => scrollToNode()}>Contact Us</li>
            </ul>
          </div>
        </nav>

        <div className="sub-header">
          <div className="call-to-action-container">
            <div className="call-to-action">
              <h1 className="text-white" style={{ fontSize: "50px" }}>
                Start Saving Today!
              </h1>
              <h2 className="text-white pb-2">With The Laundry Company</h2>
              <a href="tel:19164841180">
                <Button
                  // variant="dark"
                  size="lg"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#187035",
                    border: "none",
                  }}
                >
                  Get in Contact
                </Button>
              </a>
            </div>
            <div className="call-to-action-image">
              <Image src="/images/cover-photo.jpg" rounded />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
