import React from "react";
import "../Styles/Services.css";
import ServiceImage from "../assets/feature-2-1.svg";
function Services() {
  return (
    <div className="serviceSection  position-relative">
    <div className="container pt-5">
      <div className="title-service py-4">
        <h2 className=" my-3">
          The future of <br /> designing starts here
        </h2>
        <p>
          Stop wasting time and money designing and managing a website that
          doesn’t get results. Happiness guaranteed!
        </p>
      </div>
      <div className="row flex-wrap">
        <div className="col-md-4">
          <div className="feature-box">
            <div className="icon">
              <i class="fa-solid fa-code-merge"></i>
            </div>
            <div className="content">
              <h3 className="my-3 fw-bolder">Graphics Design</h3>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="icon">
              <i class="fa-solid fa-laptop-code"></i>
            </div>
            <div className="content">
              <h3 className="my-3 fw-bolder">Web Design</h3>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-box">
            <div className="icon">
              <i class="fa-solid fa-window-restore"></i>
            </div>
            <div className="content">
              <h3 className="my-3 fw-bolder">UI/UX Design</h3>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="icon">
              <i class="fa-solid fa-file-code"></i>
            </div>
            <div className="content">
              <h3 className="my-3 fw-bolder">Web Development</h3>
              <p>Short description for the ones who look for something new.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-img">
        <img src={ServiceImage} alt="" />
      </div>
    </div>
    </div>
  );
}
export default Services;
