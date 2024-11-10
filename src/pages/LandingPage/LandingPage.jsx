import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Consulting Co.</h1>
          <p>Your trusted partner for business consulting services.</p>
          <a href="/consultants" className="cta-btn">
            Explore Consultants
          </a>
        </div>
        <div className="hero-image">
          <img src="path-to-hero-image.jpg" alt="Consulting illustration" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Business Strategy</h3>
            <p>
              Helping you plan and execute the best strategies for your business
              growth.
            </p>
          </div>
          <div className="service-item">
            <h3>Marketing Consulting</h3>
            <p>Boost your brand and reach with targeted marketing solutions.</p>
          </div>
          <div className="service-item">
            <h3>Operations Consulting</h3>
            <p>
              Improve your processes and operational efficiency with expert
              advice.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Consultants Section */}
      <section className="consultants-highlight">
        <h2>Meet Our Top Consultants</h2>
        <div className="consultants-list">
          <div className="consultant-card">
            <img src="consultant1.jpg" alt="Consultant 1" />
            <h3>John Doe</h3>
            <p>Specialization: Business Strategy</p>
          </div>
          <div className="consultant-card">
            <img src="consultant2.jpg" alt="Consultant 2" />
            <h3>Jane Smith</h3>
            <p>Specialization: Marketing Consulting</p>
          </div>
          <div className="consultant-card">
            <img src="consultant3.jpg" alt="Consultant 3" />
            <h3>Michael Brown</h3>
            <p>Specialization: Operations Consulting</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>
              "Consulting Co. transformed our business operations! Highly
              recommended."
            </p>
            <p>- Client Name</p>
          </div>
          <div className="testimonial-item">
            <p>
              "Our growth has been exponential thanks to their strategic
              insights."
            </p>
            <p>- Client Name</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to grow your business?</h2>
        <a href="/contact" className="cta-btn">
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
