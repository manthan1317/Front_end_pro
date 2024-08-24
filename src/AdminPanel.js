import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';
import './AdminPanel.css';

const AdminPanel = ({ profiles, onProfileUpdate }) => {
  const [editingProfile, setEditingProfile] = useState(null);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <ProfileForm profile={editingProfile} onProfileUpdate={onProfileUpdate} />
      <ProfileList
        profiles={profiles}
        onEditProfile={(profile) => setEditingProfile(profile)}
        onDeleteProfile={(id) => onProfileUpdate(id)}
      />
    </div>
  );
};

export default AdminPanel;
