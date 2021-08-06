import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-about">
            <h3>About Us</h3>
            <p></p>
            <div class="footer-social">
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="footer-contact">
            <h3>Get In Touch</h3>
            <p> Tunis </p>
            <p> City: Sfax</p>
            <p> Zip Code: </p>
            <p> Phone Number:</p>
            <p>Mobile Number:</p>
          </div>
        </div>
      </div>
      <div class=" row footer-newsletter">
    {/* <h3> Our Newsletter </h3> */}
        <div className="row">
          <input class="form-control" placeholder=" Your Name" />

          <input class="form-control" placeholder=" Your Email" />
           
            <button class="bttn">Subscribe</button>
          
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div>
            <div class="copy-text">
              <p>Your privacy is our priority .&copy; All Rights Reserved</p>
            </div>
            <div>
              <div class="copy-menu">
                <a href="">About</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
