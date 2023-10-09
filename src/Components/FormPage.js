import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './FormPage.css';

function FormPage() {
  const history = useHistory();

  // Initialize state variables with existing data if available
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  // Initialize error state variables
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [dateOfBirthError, setDateOfBirthError] = useState('');

  // Event handlers to update state
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);

  // Handle form submission with validation
  const handleSubmit = () => {
    // Initialize error variables
    let hasError = false;
    setPhoneNumberError('');
    setEmailError('');
    setNameError('');
    setDateOfBirthError('');

    // Validate phone number
    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Phone Number is required.');
      hasError = true;
    } else if (!/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError('Phone Number should contain only digits.');
      hasError = true;
    }

    // Validate email
    if (email.trim() === '') {
      setEmailError('Email is required.');
      hasError = true;
    }

    // Validate name
    if (name.trim() === '') {
      setNameError('Name is required.');
      hasError = true;
    }

    // Validate date of birth
    if (dateOfBirth.trim() === '') {
      setDateOfBirthError('Date of Birth is required.');
      hasError = true;
    }

    // If any validation error, don't proceed
    if (hasError) {
      return;
    }

    // Save the form data (you can send it to an API or store it as needed)

    // Redirect to the Result Page
    history.push('/result');
  };

  // Handle cancel button click
  const handleCancel = () => {
    // Discard changes and return to the Homepage
    history.push('/');
  };

  // Reset form fields when component mounts
  useEffect(() => {
    setPhoneNumber('');
    setEmail('');
    setName('');
    setDateOfBirth('');
  }, []);

  return (
    <div>
      <h1>Form Page</h1>
      <form>
        <div className="form-field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {phoneNumberError && <span className="error">{phoneNumberError}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <span className="error">{nameError}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
          {dateOfBirthError && <span className="error">{dateOfBirthError}</span>}
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage