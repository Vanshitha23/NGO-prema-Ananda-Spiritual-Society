import React from "react";
import "./AboutUs.css";
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Header Section */}
      <div className="header">
        <h2>About us</h2>
        <p>
          Our society is dedicated to building a democratic nation based on the principles of the Constitution and the dream we envisioned in its Preamble.
        </p>
      </div>

      {/* Images Section */}
      <div className="images-section">
        <img
          src="https://scontent.fdel27-4.fna.fbcdn.net/v/t39.30808-6/460952734_2288524361514058_1257238024341791631_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=7E3Ue_SO7pgQ7kNvgFLFGCG&_nc_zt=23&_nc_ht=scontent.fdel27-4.fna&_nc_gid=AZvXD6Qh3rPwTivv592ltgL&oh=00_AYDfdnptbWRuBa9bfZj0A7n2s483G6fli1IX9MHkCytLAw&oe=674B78AE"
          alt="Team 1"
          className="team-image"
        />
        <img
          src="https://scontent.fdel27-7.fna.fbcdn.net/v/t39.30808-6/460464976_2284594531907041_1050476398945090912_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=dOMVhlgiIooQ7kNvgHQ_DOD&_nc_zt=23&_nc_ht=scontent.fdel27-7.fna&_nc_gid=AjB_nJF1mgPHp1WsYphCskv&oh=00_AYDtUJeSENNRiKXUCZUU7PXGFgvBheJ_BTxSz0VpdocC7Q&oe=674B75A9"
          alt="Team 2"
          className="team-image"
        />
        <img
          src="https://scontent.fdel27-6.fna.fbcdn.net/v/t39.30808-6/447399078_871187361706400_1280376326757633423_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TxbcGRAc1JIQ7kNvgFfXmsI&_nc_zt=23&_nc_ht=scontent.fdel27-6.fna&_nc_gid=AVXqZM3ySddNSIU1Vaq0tRZ&oh=00_AYBLUjP8K8kmscAntopX9pk69YbhZ0ttfZfv4VVU65WUFA&oe=674B6E25"
          alt="Team 3"
          className="team-image"
        />
        <img
          src="https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-6/305633863_1784663771900122_4848888548346968113_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=66peBgDeEWQQ7kNvgHnY6wg&_nc_zt=23&_nc_ht=scontent.fdel27-3.fna&_nc_gid=AhaywMFwg-N_5sZToirlilb&oh=00_AYBeKpH5dNn7ONdWhBlLlmoWELP8WSNp4P4qJEJZfDPyTg&oe=674B4C58"
          alt="Team 4"
          className="team-image"
        />
      </div>

      {/* Description Section */}
      <div className="content-section">
        <h3>We make sure your idea & creation are delivered properly</h3>
        <div className="content">
          <p>
            Our society envisions a nation built on humanistic values and democratic spirit. By fostering transparency and accountability in governance, we aim to make democracy work as dreamed in the Preamble of our Constitution.
          </p>
          <p>
            Change begins with culture. Transforming our socio-cultural public life is essential to build a transparent and accountable political structure.
          </p>
        </div>
      </div>



     {/* Quote Section */}
<div className="quote-section">
  {/* Left: Image */}
  <div className="quote-image">
    <img
      src="https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-9/42160568_707766576256519_6114337205184888832_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YJksfuu47WAQ7kNvgGIsrVv&_nc_zt=23&_nc_ht=scontent.fdel27-4.fna&_nc_gid=AHufLjvt4l_y9KScqLBY7uB&oh=00_AYAlqZH5au3c8M4aYpgb3l1Tz7td7zl4VA7MrYa6vyposw&oe=676CE8CF"
      alt="Founder"
    />
  </div>

  {/* Right: Text */}
  <div className="quote-content">
    <h3>"Making an Impact, Together"</h3>
    <p>
      Our society believes in fostering leadership and democratic values to
      build a better future. We strive to see our country among the top nations
      of the world by promoting cultural transformation and humanism.
    </p>
    <p className="highlighted">
      "The foundation of a great nation lies in the transformation of its
      people, their culture, and their values. We must celebrate humanism and
      work toward a transparent, accountable governance system."
    </p>
  </div>
</div>




<div className="empower-section">
  <h3 className="section-title">Building Leadership, Empowering Communities</h3>
  <div className="intro-paragraphs">
    <p>
    The biggest challenge facing our country today is the lack of effective leadership. Leadership is needed at every level, from villages to cities. Our youth have the potential to lead with vision, integrity, and dynamism.
    </p>
    <p>
    Through the Amara Bhagat Singh Youth Leadership Training, we offer young individuals the opportunity to develop leadership skills, foster democratic values, and drive community growth. This program encourages youth to act as change-makers while managing their time effectively without disrupting their daily routines
    </p>
  </div>
  <div className="feature-cards">
    <div className="card">
      <div className="card-icon">
        <img
          src="https://i.pinimg.com/736x/11/5d/ca/115dca2af9142b2d37063d8a36d74815.jpg"
          alt="Guarantee Icon"
        />
      </div>
      <h4>Transparent Governance</h4>
     
    </div>
    <div className="card">
      <div className="card-icon">
        <img
          src="https://i.pinimg.com/736x/96/2b/dd/962bdd4f448d0b11388621d4815901b2.jpg"
          alt="Finance Icon"
        />
      </div>
      <h4>Humanist Values</h4>
      
    </div>
    <div className="card">
      <div className="card-icon">
        <img
          src="https://i.pinimg.com/736x/89/5d/c5/895dc5335780d43a9c5f59f645a4046d.jpg"
          alt="Team Icon"
        />
      </div>
      <h4>Youth Leadership Training</h4>
     
    </div>
  </div>
  <div className="media-section">
    <img
      src="https://i.pinimg.com/736x/e4/2a/ab/e42aabc7bb474ccf326c01dd7f377e05.jpg"
      alt="Team Working"
      className="team-image"
    />
    <div className="video-placeholder">
      <img
        src="https://i.pinimg.com/736x/b3/fd/d6/b3fdd679c301eac6251469e30ca23b3e.jpg"
        alt="Video Preview"
        className="video-image"
      />
      <div className="play-button">&#9658;</div>
    </div>
  </div>
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
        <li><a href="index.php">Home</a></li>
        <li><a href="about.php">About Us</a></li>
        <li><a href="events.php">Events</a></li>
        <li><a href="contact.php">Contact Us</a></li>
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



    </section>


  );
};

export default AboutUs;
