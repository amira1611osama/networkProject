import React from "react";
import "../Styles/OurTeam.css";
import Team1 from "../assets/team-1.png";
import Team2 from "../assets/team-2.png";
import Team3 from "../assets/team-3.png";
import Team4 from "../assets/team-4.png";
function OurTeam() {
  return (
    <div className="OurTeam-section py-5">
      <div className="container">
        <div className="title-ourTeam pb-4">
          <h3 data-aos="fade-right">Our Team</h3>
          <p data-aos="fade-left">
            Stop wasting time and money designing and managing a website that
            doesn’t get results. Happiness guaranteed!
          </p>
        </div>
        <div className="cards">
          <div className="card p-4" data-aos="fade-right">
            <div className="image-ourTeam">
              <img src={Team1} className="card-img-top rounded" alt="team1" />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Gray Simon</h5>
              <p className="card-text">Frontend Developer</p>
              <div className="icons-ourTeam d-flex justify-content-center gap-2">
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-github-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-4" data-aos="fade-up">
            <div className="image-ourTeam">
              <img src={Team2} className="card-img-top rounded" alt="team1" />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">John Doe</h5>
              <p className="card-text">Creative Designer</p>
              <div className="icons-ourTeam d-flex justify-content-center gap-2">
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-github-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-4" data-aos="fade-down">
            <div className="image-ourTeam">
              <img src={Team3} className="card-img-top rounded" alt="team1" />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">David Endow</h5>
              <p className="card-text">Product Designer</p>
              <div className="icons-ourTeam d-flex justify-content-center gap-2">
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-github-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-4" data-aos="fade-left">
            <div className="image-ourTeam">
              <img src={Team4} className="card-img-top rounded" alt="team1" />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Jonathon Smith</h5>
              <p className="card-text">Creative Designer</p>
              <div className="icons-ourTeam d-flex justify-content-center gap-2">
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="circle-icon">
                  <a href="#">
                    <i class="fa-brands fa-github-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
