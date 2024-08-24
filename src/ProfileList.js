import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css'; // Ensure you have this file for additional styles

const ProfileList = ({ profiles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('all');

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearchTerm = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCriteria === 'all' || profile.address.toLowerCase().includes(filterCriteria.toLowerCase());

    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="profile-list">
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterCriteria} onChange={(e) => setFilterCriteria(e.target.value)}>
          <option value="all">All Locations</option>
          <option value="london">London</option>
          <option value="paris">Paris</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="profiles">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
