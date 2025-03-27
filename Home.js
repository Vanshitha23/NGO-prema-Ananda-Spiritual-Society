import React from 'react';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Amara Bhagat Singh Center for Young Leaders</h1>
        <p>"Jai Constitution!"</p>
        <button className="btn-primary">Ongoing Programs</button>
      </div>

      {/* Main Content */}
      <div className="home">
        {/* Cards Section */}
        <section className="hero-section">
          <div className="card education">
            <div className="overlay">
              <h3>Education Projects in Hyderabad</h3>
              <button className="donate-btn">Donate Now</button>
            </div>
          </div>
          <div className="card health">
            <div className="overlay">
              <h3>Health Access for Refugees Programme</h3>
              <button className="donate-btn">Donate Now</button>
            </div>
          </div>
          <div className="card food">
            <div className="overlay">
              <h3>Food Assistance for Refugees</h3>
              <button className="donate-btn">Donate Now</button>
            </div>
          </div>
        </section>

        <div className="home-container">
      {/* Mission Section */}
      <div className="section mission-section">
        <div className="content">
          <h2>Our Mission</h2>
          <p>
          Empowerment Through Education
Provide access to quality education for underprivileged children and adults.
Promote awareness of constitutional rights and responsibilities to encourage informed citizenship.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <img
          src="https://i.pinimg.com/736x/cf/ee/8c/cfee8ce07ddb8fa65b48d684efba3219.jpg"
          alt="Mission Image"
          className="image"
        />
      </div>

      {/* Vision Section */}
      <div className="section vision-section">
        <img
          src="https://i.pinimg.com/736x/18/d3/2d/18d32d60ab7448824c60ea4a2132c000.jpg"
          alt="Vision Image"
          className="image"
        />
        <div className="content">
          <h2>Our Vision</h2>
          <p>
          To build a democratic and inclusive society rooted in the principles of the Indian Constitution, where every individual is empowered with education, equality, and opportunity, fostering a community driven by love, peace, and mutual respect.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      <div className="section-container">
      {/* Left Content */}
      <div className="text-content">
        <h1>Together We Are Strengthening Humanity</h1>
        <p>
          We’ve been campaigning for a green and peaceful future for 40 years —
          and we’re not stopping now. It’s time to rise up like never before and
          fight for our climate and communities.
        </p>
        <button className="read-more-btn">Read About Us</button>
      </div>

      {/* Right Content */}
      <div className="image-grid">
        <img
            src="https://scontent.fixc2-1.fna.fbcdn.net/v/t39.30808-6/314907675_494358402722633_2295670893960601611_n.jpg?stp=dst-jpg_s720x720&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UKrFrzK8wuwQ7kNvgFBpwKD&_nc_zt=23&_nc_ht=scontent.fixc2-1.fna&_nc_gid=ACuHCQ4FcR7Zrsg8qMvUGhb&oh=00_AYCy5-HYSj3lLOC4DzXLtBzzWuMGv-8t96BPL6QeoewDmw&oe=674B3249"
            alt="Humanitarian Effort 1"
          className="grid-image"
        />
        <img
            src="https://scontent.fixc2-2.fna.fbcdn.net/v/t39.30808-6/305633863_1784663771900122_4848888548346968113_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=66peBgDeEWQQ7kNvgEQs9aW&_nc_zt=23&_nc_ht=scontent.fixc2-2.fna&_nc_gid=ACuHCQ4FcR7Zrsg8qMvUGhb&oh=00_AYCl6biXu4h2pF9qjOqEQMtfJgf_4bZCheY74j7aXOwxdA&oe=674B4C58"
            alt="Humanitarian Effort 2"
          className="grid-image"
        />
        <img
          src="https://scontent.fixc2-2.fna.fbcdn.net/v/t39.30808-6/356112656_646631797495292_6577770747145378818_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mMmaN_4s6poQ7kNvgE4Mg-X&_nc_zt=23&_nc_ht=scontent.fixc2-2.fna&_nc_gid=AbfPr4gEZG0TU10dch2eTc9&oh=00_AYBAHbliz83liKw6dMFgmM-HEfDBgiABAhlU1PJLd4QdCw&oe=674B4813" // Replace with your actual image path
          alt="Humanitarian Effort 3"
          className="grid-image"
        />
        <img
          src="https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-6/447414897_871188471706289_8669544505128161634_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aD1FoCkeGcIQ7kNvgF7zTPs&_nc_zt=23&_nc_ht=scontent.fdel27-1.fna&_nc_gid=A54mbwymoJS8Dr2SZ91nhc0&oh=00_AYAnmKbgqyVELqsslO5zIe-6mAVnlgpd9RLuDnO9x3N6iA&oe=674B39BA" // Replace with your actual image path
          alt="Humanitarian Effort 4"
          className="grid-image"
        />
      </div>
    </div>







    <div className="services-container">
      {/* Left Section */}
      <div className="services-content">
        <h4>What We Offer</h4>
        <h2>Let your house have a breath of fresh air.</h2>
        <p>
        Visit houses to interact with the residents. The length and nature of interaction will be decided spontaneously by the response, cooperation and interest of the residents. 
        </p>
        <div className="services-grid">
          <div className="service-card">
            <i className="icon icon-lawn"></i>
            <h3>Humanism is not just vague sentiments. A clear, concrete way of life.</h3>
            <p>
            Humanism is the only viable and economically beneficial way of life for citizens in a democratic system. Humanism is the only way of life that can give peace, freedom, equality and prosperity in public life! 
            </p>
            <a href="#!" className="read-more">
              Read More →
            </a>
          </div>
          <div className="service-card">
            <i className="icon icon-irrigation"></i>
            <h3>Social equality! All men are born equal!</h3>
            <p>
            Humanism is the foundation of work done for hundreds of years for the reduction of inequalities in the society, for 'Peace-Freedom-Equality'! Humanism is the essence and spirit of Buddha-Phule-Marx-Periyar-Babasaheb!
            </p>
            <a href="#!" className="read-more">
              Read More →
            </a>
          </div>
          <div className="service-card">
            <i className="icon icon-landscape"></i>
            <h3>Social equality! All men are born equal!</h3>
            <p>
            . Believing and practicing democratic spirit values! Participation in efforts to develop democratic spirit-values. Participating in continuous improvement of democracy, democratic system, processes and institutions. 
            </p>
            <a href="#!" className="read-more">
              Read More →
            </a>
          </div>
          <div className="service-card">
            <i className="icon icon-property"></i>
            <h3>Rights! </h3>
            <p>
            Believing and practicing democratic spirit values! Participation in efforts to develop democratic spirit-values. Participating in continuous improvement of democracy, democratic system, processes and institutions
            </p>
            <a href="#!" className="read-more">
              Read More →
            </a>
          </div>
        </div>
      </div>

      {/* Right Section
      <div className="services-image">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/8/x/h/large-preamble-of-indian-constitution-a3-wp233a3-peacockride-original-imagymhxhuncamsp.jpeg?q=90&crop=false" // Replace with the path to your image
          alt="Gardener"
        />
      </div> */}
    </div>




    </div>
      </div>

    
    <div className="missionsec">
      {/* Header */}
      <h2>OUR MISSION</h2>
      <p>Protecting the rights and wellbeing of EVERY child</p>

      {/* Icon Blocks */}
      <div className="mission-icons">
        <div className="icon-block">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/139/963/non_2x/ngo-icon-free-vector.jpg" // Replace with your heart icon path
            alt="Heart Icon"
            className="icon-image"
          />
          <p>
            Promoting the right and wellbeing of every child, in everything we
            do.
          </p>
        </div>
        <div className="icon-block">
          <img
            src="https://st2.depositphotos.com/5266903/8823/v/450/depositphotos_88237764-stock-illustration-international-insurance-icon.jpg" // Replace with your globe icon path
            alt="Globe Icon"
            className="icon-image"
          />
          <p>
            Supporting Hope programs for children in more than 150 countries and
            territories.
          </p>
        </div>
        <div className="icon-block">
          <img
            src="https://cdn-icons-png.freepik.com/512/8398/8398855.png" // Replace with your hand icon path
            alt="Hand Icon"
            className="icon-image"
          />
          <p>
            Focus on reaching the most vulnerable children, to benefit all
            children, everywhere.
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="learn-more-btn">Learn more about Hope →</button>
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
</div>
  );
};

export default Home;
