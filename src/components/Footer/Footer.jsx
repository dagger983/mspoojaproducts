import React from "react";
import "./footer.css"; // Import the custom CSS file

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-section">
          <p className="footer-title">Address</p>
          <p className="footer-text">APA Complex, Egai Town, <br />Nagamangalam,Trichy-12</p>
        </div>

        {/* Phone Section */}
        <div className="footer-section2">
          <p className="footer-title">Phone</p>
          <p className="footer-text">+91 96 55 955 775</p>
        </div>

        {/* Email Section */}
        <div className="footer-section">
          <p className="footer-title">Email</p>
          <p className="footer-text">msnaturalpoojaproducts@gmail.com</p>
        </div>

        {/* Connect Section */}
        <div className="footer-section2">
          <img src="/mspoojalogo.png" alt="" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {currentYear} M.S. Natural Pooja Products, All Rights Reserved.</p>
        <p>Design & Developed By Rategle Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
