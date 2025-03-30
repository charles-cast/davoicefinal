import React from 'react';
import './AboutPage.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AboutPage = ({ onLogout }) => {
  const features = [
    {
      id: 1,
      title: "Transparent Feedback System",
    },
    {
      id: 2,
      title: "Continuous Centered Approach",
    },
    {
      id: 3,
      title: "Continuous Improvement",
    }
  ];

  return (
    <div className="about-page">
      <Navbar onLogout={onLogout} />
      <div className="about-container">
        <div className="about-header">
          <span className="page-label">About us</span>
        </div>
        
        <div className="about-content">
          <div className="text-section">
            <div className="mission-section">
              <h2>Mission</h2>
              <p>We're dedicated to improving the educational experience through students feedback. Our platform bridges the gap between students and Institutions, ensuring every voice is heard.</p>
            </div>
            
            <div className="vision-section">
              <h2>Vision</h2>
              <p>To build a vibrant and unified community where every person is acknowledged, valued, and encouraged to share their distinct viewpoints. Davoice aims to be the foremost platform for promoting meaningful conversations, enhancing community relationships, and driving impactful change through collective input and cooperation.</p>
            </div>
          </div>

          <div className="illustration-section">
            <img src="/updates/team.svg" alt="Team Illustration" className="about-image" />
          </div>
        </div>

        <div className="features-section">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact us</Link>
          </div>
          <div className="footer-section">
            <h3>Further Information</h3>
            <Link to="/terms">Terms & Condition</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="footer-section">
            <h3>Follow us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 