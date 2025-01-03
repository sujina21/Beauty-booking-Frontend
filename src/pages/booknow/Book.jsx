import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Book.css';
import { createBooking } from '../../api/Api';
import { toast } from 'react-toastify';

const Book = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    bookingDate: '',
    bookingTime: '',
    serviceId: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBooking(formData);
      if (response.status === 201) {
        toast.success('Booking confirmed! See you soon!');
      } else {
        toast.error('Something went wrong, please try again.');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleEsewaPayment = () => {
    const merchantId = 'YOUR_MERCHANT_ID';
    const amount = '2000'; // Replace with dynamic pricing
    const refId = `SERVICE-${formData.serviceId}-${Date.now()}`;
    const successUrl = `${window.location.origin}/payment-success`;
    const failureUrl = `${window.location.origin}/payment-failure`;

    const esewaUrl = `https://esewa.com.np/epay/main?amt=${amount}&pid=${refId}&scd=${merchantId}&su=${successUrl}&fu=${failureUrl}`;
    window.location.href = esewaUrl;
  };

  return (
    <div className="book-container">
      <div className="form-wrapper">
        <div className="service-details">
          <h2>Service Details</h2>
          <p>Service ID: {id}</p>
          <p>Price: NRS 2000</p>
        </div>
        <div className="form-container">
          <h2>Book Your Appointment</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookingDate">Booking Date</label>
              <input
                type="date"
                id="bookingDate"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookingTime">Booking Time</label>
              <input
                type="time"
                id="bookingTime"
                name="bookingTime"
                value={formData.bookingTime}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Book Now</button>
          </form>
        </div>
        <div className="payment-container">
          <h3>Payment Options</h3>
          <button className="esewa-button" onClick={handleEsewaPayment}>
            Pay with Esewa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
