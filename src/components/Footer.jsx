import React from "react";
import "../Styles/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-column logo-col" data-aos="fade-right">
          <h2 className="footer-logo">FLAT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis nulla placerat amet amet congue.</p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-column" data-aos="fade-up">
          <h4>Quick Link</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column" data-aos="fade-up">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Seo Optimization</a></li>
            <li><a href="#">Blog Writing</a></li>
          </ul>
        </div>
        <div className="footer-column" data-aos="fade-left">
          <h4>Help & Support</h4>
          <ul>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-bottom">Design and Developed by Amira,Adham,Sally,Hussien,Mohamed</p>
    </footer>
  );
}

export default Footer;
