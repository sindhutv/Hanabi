import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    // Check if username is valid
    if (username.trim() !== '') {
      // Redirect to the form page with the username parameter
      history.push(`/form?username=${username}`); // Corrected interpolation
    }
  };

  return (
    <div>
      <h1>Homepage</h1>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/> <br/><button className="submit-button" onClick={handleSubmit}>Submit</button>.
    </div>
  );
}

export default Homepage;