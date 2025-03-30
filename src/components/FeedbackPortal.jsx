import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './FeedbackPortal.css';

const FeedbackPortal = ({ onLogout }) => {
  const [feedbackType, setFeedbackType] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission here
    console.log({ feedbackType, feedback });
    // Show rating popup after submission
    setShowRating(true);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleRatingSubmit = () => {
    // Handle rating submission
    console.log('Rating submitted:', rating);
    // Reset form and close popup
    setFeedbackType('');
    setFeedback('');
    setShowRating(false);
    setRating(0);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleMaybeLater = () => {
    setShowRating(false);
    setFeedbackType('');
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="feedback-page">
      <Navbar onLogout={onLogout} />
      <button className="back-button" onClick={handleBack}>
        <span>←</span>
      </button>
      
      <div className="feedback-container">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Classify your feedback</label>
            <select 
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="feedback-select"
            >
              <option value="" disabled>Select type</option>
              <option value="academics">Academics</option>
              <option value="facilities">Facilities</option>
              <option value="improvement">Improvement Suggestion</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="feedback-textarea"
              placeholder="Enter your feedback here..."
              rows={6}
            />
          </div>

          <button type="submit" className="submit-button1">
            SUBMIT
          </button>
        </form>
      </div>

      {showRating && (
        <div className="rating-overlay">
          <div className="rating-popup">
            <h3>Your opinion matters to us!</h3>
            <p>How's your experience using our website?</p>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={`star-button ${value <= rating ? 'active' : ''}`}
                  onClick={() => handleRating(value)}
                >
                  ★
                </button>
              ))}
            </div>
            <div className="rating-labels">
              <span>Awful</span>
              <span>Brilliant</span>
            </div>
            <div className="rating-actions">
              <button className="maybe-later" onClick={handleMaybeLater}>
                Maybe later
              </button>
              {rating > 0 && (
                <button className="submit-rating" onClick={handleRatingSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackPortal; 