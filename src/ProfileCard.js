import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <Link to={`/profile/${profile.id}`}>
        <img src={profile.photo} alt={profile.name} className="profile-photo" />
        <div className="details">
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;
