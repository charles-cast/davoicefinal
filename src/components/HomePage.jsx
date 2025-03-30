import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleAddFeedback = () => {
    navigate('/feedback');
  };

  return (
    <div className="home-page">
      <Navbar onLogout={onLogout} />
      <div className="content-container">
        <div className="left-section">
          <h1>
            <span>Collect,</span>
            <span>Analyze & Act on</span>
            <span>Feedback</span>
          </h1>
          <p className="description">
            Elevate your product experience with actionable insights. Our
            platform makes gathering and analyzing feedback simple, elegant,
            and powerfully effective.
          </p>
        </div>
        <div className="right-section">
          <div className="feedback-card">
            <h2>Feedback Portal</h2>
            <p className="portal-subtitle">
              From Each Word You Speak, We Build the Future We All Seek.
            </p>
            <button className="add-feedback-btn" onClick={handleAddFeedback}>
              + Add Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 