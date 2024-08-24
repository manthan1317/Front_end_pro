import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './ProfileList';
import SummaryPage from './SummaryPage';
import AdminPanel from './AdminPanel';
import ErrorBoundary from './ErrorBoundary';
import ProfileDetailsPage from './ProfileDetailsPage';



const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', photo: '/path/to/photo1.jpg', description: 'Web Developer', location: [51.505, -0.09], address: 'London, UK' },
    { id: 2, name: 'Jane Smith', photo: '/path/to/photo2.jpg', description: 'Graphic Designer', location: [48.8566, 2.3522], address: 'Paris, France' },
    
  ])
  const handleProfileUpdate = (updatedProfile) => {
    setProfiles(prevProfiles => prevProfiles.map(profile => 
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
  };
  
  ;

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProfileList profiles={profiles} />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/admin" element={<AdminPanel profiles={profiles} onProfileUpdate={handleProfileUpdate} />} />
            <Route path="/profile/:profileId" element={<ProfileDetailsPage profiles={profiles} />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;