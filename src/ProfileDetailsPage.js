import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MapView from './MapView'; // Ensure the path is correct
import './ProfileDetailsPage.css';

const ProfileDetailsPage = ({ profiles }) => {
  const { profileId } = useParams();
  const profile = profiles.find(p => p.id === parseInt(profileId));

  if (!profile) {
    return <div>Profile not found</div>;
  }

  // Default to empty array if interests is not defined
  const interests = Array.isArray(profile.interests) ? profile.interests : [];

  return (
    <div className="profile-details">
      <Link to="/">Back to Profiles</Link>
      <div className="profile-info">
        <img src={profile.photo} alt={profile.name} className="profile-photo" />
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Interests:</strong> {interests.join(', ')}</p>
      </div>
      <div className="map-container">
        <MapView position={profile.position}
         address={profile.address} />
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
