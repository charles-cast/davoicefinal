import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import vectorLogo from '../assets/dav.svg';

const LoginForm = ({ onLogin }) => {
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [course, setCourse] = useState('');
  const [highlightState, setHighlightState] = useState('none'); // 'none', 'partial', 'full'

  useEffect(() => {
    if (course.trim() !== '' && identificationNumber.trim() !== '') {
      setHighlightState('full');
    } else if (course.trim() !== '') {
      setHighlightState('partial');
    } else {
      setHighlightState('none');
    }
  }, [identificationNumber, course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ identificationNumber, course });
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-form-wrapper">
          <div className="title-section">
            <h1>Welcome to Davoice</h1>
            <p className="subtitle">Building Excellence Through Your Insights</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Course</label>
              <select 
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
               
                <option value="">Select Course</option>
                <option value="civil">Civil Engineering</option>
                <option value="mechanical">Mechanical Engineering</option>
                <option value="electrical">Electrical Engineering</option>
                <option value="computer">Computer Engineering</option>
                <option value="business">Business Administration</option>
                <option value="business">Business Accounting</option>
                <option value="political">Political Science</option>
                <option value="hm">Hospitality Administration</option>
                <option value="it">Information Technology</option>

                

              </select>
            </div>
            <div className="form-group">
              <label>Identification Number</label>
              <input
                type="number"
                value={identificationNumber}
                onChange={(e) => setIdentificationNumber(e.target.value)}
                placeholder="12345"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="logo-container">
        <div className={`logo ${highlightState}-highlight`}>
          <img src={vectorLogo} alt="Davoice Logo" className="vector-logo" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 