import React from 'react';
import './InfoPage.css';
import Navbar from './Navbar';

const InfoPage = ({ onLogout }) => {
  const updates = [
    {
      id: 1,
      image: '/updates/wit application.svg',
      title: 'ONLINE APPLICATION',
      highlight: 'IS NOW OPEN!'
    },
    {
      id: 2,
      image: '/updates/wit up.svg',
      title: 'WIT UPDATES',
    },
    {
      id: 3,
      image: '/updates/wit-admission.svg',
      title: 'WITCAT',
      }
  ];

  return (
    <div className="info-page">
      <Navbar onLogout={onLogout} />
      <div className="page-indicator">Information</div>
      <div className="info-container">
        <h2 className="section-title">WIT Updates</h2>
        <div className="updates-grid">
          {updates.map((update) => (
            <div key={update.id} className="update-card">
              <img src={update.image} alt={update.title} className="update-image" />
              <div className="update-content">
                {update.content && (
                  <p className="content">{update.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPage; 