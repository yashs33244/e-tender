import React, { useState } from 'react';
import './create-tender.css'; // Import a CSS file for styling (create one if it doesn't exist)
import HomeHeader from '../components/homeHeader';
import Footer from '../components/Footer';
import axios from 'axios';

const CreateTodo = () => {
  const [formData, setFormData] = useState({
    nameOfWork: '',
    location: '',
    approxCost: '',
    bidSecurity: '',
    address: '',
    uploadDateTime: '',
    tenderNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/submit-form', formData);
      alert('Tender published successfully!');

      // Clear the form
      setFormData({
        nameOfWork: '',
        location: '',
        approxCost: '',
        bidSecurity: '',
        address: '',
        uploadDateTime: '',
        tenderNumber: '',
      });
    } catch (error) {
      console.error(`Error publishing tender: ${error}`);
      alert('Error publishing tender');
    }
  };

  const { nameOfWork, location, approxCost, bidSecurity, address, uploadDateTime, tenderNumber } = formData;
  return (
    <div>
      {/* <HomeHeader /> */}
      <div className="form-container">
        <form className="e-tender-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <label htmlFor="nameOfWork">Name of Work:</label>
            <input type="text" id="nameOfWork" name="nameOfWork" value={nameOfWork} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={location} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="approxCost">Approx Cost of Work:</label>
            <input type="text" id="approxCost" name="approxCost" value={approxCost} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="bidSecurity">Bid Security:</label>
            <input type="text" id="bidSecurity" name="bidSecurity" value={bidSecurity} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="address">Address of Office:</label>
            <input type="text" id="address" name="address" value={address} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="uploadDateTime">Date and Time of Upload:</label>
            <input type="datetime-local" id="uploadDateTime" name="uploadDateTime" value={uploadDateTime} onChange={handleChange} />
          </div>
          <div className="form-section">
            <label htmlFor="tenderNumber">Tender Number:</label>
            <input type="text" id="tenderNumber" name="tenderNumber" value={tenderNumber} onChange={handleChange} />
          </div>
          <button className="register-button" type="submit" onClick={handleSubmit}>Publish</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateTodo;
