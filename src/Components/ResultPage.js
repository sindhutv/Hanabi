import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests

function ResultPage() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Define a function to fetch form data from the backend
    const fetchFormData = async () => {
      try {
        // Make a GET request to retrieve the form data from your backend (adjust the endpoint if needed)
        const response = await axios.get('/forms/username'); // Replace 'username' with the actual username

        // Set the retrieved form data in the state
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
        // Handle any error responses from the backend if needed
      }
    };

    // Call the fetchFormData function when the component mounts
    fetchFormData();
  }, []);

  return (
    <div>
      <h1>Congratulations!</h1>
      {formData ? (
        <div>
          <p>Your form has been successfully submitted.</p>
          {/* Display form data here, for example: */}
          <p>Name: {formData.name}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Email: {formData.email}</p>
          <p>Date of Birth: {formData.dateOfBirth}</p>
        </div>
      ) : (
        <p>Your form has been successfully submitted...</p>
      )}
      <Link to="/">Homepage</Link>
    </div>
  );
}

export default ResultPage;
