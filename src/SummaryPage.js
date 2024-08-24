import React from 'react';
import { useLocation } from 'react-router-dom';
import MapView from './MapView';
import './SummaryPage.css';


const SummaryPage = () => {
  const { state } = useLocation();
  const { profile } = state || { profile: {} };

  return (
    <div className="summary-page">
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={`${profile.name}`} className="profile-photo" />
      <p>{profile.description}</p>
      <MapView position={profile.location} address={profile.address} />
    </div>
  );
};

export default SummaryPage;
