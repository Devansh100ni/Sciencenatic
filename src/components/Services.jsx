import React from "react";
import "../styles/Services.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/m1.jpg";
import img2 from "../assets/m2.jpg";
import img3 from "../assets/m3.jpg";

const Services = () => {
  return (
    <div className="serv-main">
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          interval={1500}
          showThumbs={true}
          showStatus={false}
        >
          <div>
            <img src={img1} alt="Item1" />
            <p className="legend">Biology Facts</p>
          </div>

          <div>
            <img src={img2} alt="Item2" />
            <p className="legend">Physics Facts</p>
          </div>

          <div>
            <img src={img3} alt="Item3" />
            <p className="legend">Chemistry Facts</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
