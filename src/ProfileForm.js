import React, { useState, useEffect } from 'react';

const ProfileForm = ({ profile, onProfileUpdate }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState([51.505, -0.09]); // Default location

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setPhoto(profile.photo);
      setDescription(profile.description);
      setAddress(profile.address);
      setLocation(profile.location);
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate({
      id: profile ? profile.id : Date.now(),
      name,
      photo,
      description,
      address,
      location
    });
    setName('');
    setPhoto('');
    setDescription('');
    setAddress('');
    setLocation([51.505, -0.09]); // Reset to default location
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <h2>{profile ? 'Edit Profile' : 'Add Profile'}</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Photo URL:
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
      <label>
        Location (lat,lng):
        <input
          type="text"
          value={location.join(',')}
          onChange={(e) => setLocation(e.target.value.split(',').map(Number))}
          required
        />
      </label>
      <button type="submit">{profile ? 'Update' : 'Add'} Profile</button>
    </form>
  );
};

export default ProfileForm;
