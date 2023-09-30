import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Swal from 'sweetalert2'

const NewContactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:7000/submit-form', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Reset the form fields on successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        console.log('Form submitted successfully');
  
        // Show a success alert using SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Form submitted successfully',
        });
      } else {
        console.error('Form submission failed');
        
        // Show an error alert using SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Form submission failed',
        });
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      
      // Show an error alert using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error submitting the form',
      });
    }
  };
  
  return (
    <div className="container mt-5 shadow-lg rounded-3 p-4">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewContactus;