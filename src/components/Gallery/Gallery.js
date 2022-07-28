import React, { useState } from "react";

const Gallery = (props) => {
  const [scrollDiv, setScrollDiv] = useState();
  let mappedImages;

  props.galleryNode(scrollDiv);

  const imageArray = [
    "/images/galleryphotos/galleryimage (1).jpg",
    "/images/galleryphotos/galleryimage (2).jpg",
    "/images/galleryphotos/galleryimage (3).jpg",
    "/images/galleryphotos/galleryimage (4).jpg",
    "/images/galleryphotos/galleryimage (5).jpg",
    "/images/galleryphotos/galleryimage (6).jpg",
    "/images/galleryphotos/galleryimage (7).jpg",
  ];
  return (
    <div className="gallery-container" ref={(node) => setScrollDiv(node)}>
      <h1 className="text-center py-4" id="unique">
        Gallery
      </h1>
      <div className="gallery-photos">
        <div className="row justify-content-center">
          {
            (mappedImages = imageArray.map((rows, index) => (
              <div
                className="col-sm-12 text-center col-md-4 shadow-sm p-3 border h-100"
                key={index}
              >
                <img src={rows} className="img-thumbnail" alt="Gallery" />
              </div>
            )))
          }
        </div>
      </div>
    </div>
  );
};

export default Gallery;
