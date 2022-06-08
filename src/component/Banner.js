import React from "react";
import banner1 from "./banner1.jpg";
import banner2 from "./banner2.jpg";
import banner3 from "./banner3.jpg";
import banner4 from "./banner4.jpg";
import './Banner.css'

export default function Banner() {
  return (
    <div className="Banner">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100 bannerimg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100 bannerimg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 bannerimg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100 bannerimg" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev carousel-btn"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
