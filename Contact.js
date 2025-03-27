import React from "react";
import "./ContactUs.css"; // Create a new CSS file for styling
import "./Home.css"; // Create a new CSS file for styling
// import contactBackground from "https://i.pinimg.com/736x/bd/46/a4/bd46a42f33f6c7cb09b0ee618aa770b8.jpg"; // Replace with your uploaded background image path

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div
        className="contact-header"
        // style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us for any queries or collaboration. We're
          here to help!
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>WhatsApp:</strong> 97019 55533 <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:passination2016@gmail.com">
              passination2016@gmail.com
            </a>{" "}
            <br />
            <strong>Phone:</strong> 97019 55533 <br />
            <strong>Facebook:</strong>{" "}
            <a href="https://facebook.com/company" target="_blank" rel="noopener noreferrer">
              facebook.com/company
            </a>
            <br />
            <strong>Address:</strong> H.NO.1-112/2/23, SRI LAKSHMI NAGAR COLONY, 500049, MIYAPUR, RANGA REDDY, TELANGANA.
          </p>
        </div>
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <label>
            Name:
            <input type="text" name="name" placeholder="Your Name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Your Email" />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" placeholder="Subject" />
          </label>
          <label>
            Message:
            <textarea name="message" placeholder="Your Message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

    
<footer>
<div className="footer-container">
  {/* Left Section */}
  <div className="footer-left">
    <h3>Prema Ananda Spiritual Society</h3>
    <p>Working towards building a democratic society through cultural transformation and humanistic values.</p>
    <p><strong>Satyameva Jayate!</strong> - Truth Alone Triumphs!</p>
  </div>

  {/* Center Section */}
  <div className="footer-center">
    <h4>Quick Links</h4>
    <ul>
      <li><a href="Home.js">Home</a></li>
      <li><a href="About.js">About Us</a></li>
      <li><a href="Programs.js">Events</a></li>
      <li><a href="contact.js">Contact Us</a></li>
    </ul>
  </div>

  {/* Right Section */}
  <div className="footer-right">
    <h4>Contact Us</h4>
    <p><strong>Address:</strong> Miyapur, Hyderabad, Telangana, India</p>
    <p><strong>Email:</strong> info@premaanandaspiritualsociety.org</p>
    <p><strong>Phone:</strong> +91 12345 67890</p>
    <div className="social-icons">
      <a href="https://www.facebook.com/premaanandasociety" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</div>

{/* Footer Bottom Section */}
<div className="footer-bottom">
  <p>&copy; 2024 Prema Ananda Spiritual Society. All rights reserved.</p>
</div>
</footer>
</div>
  );
};

export default ContactUs;
