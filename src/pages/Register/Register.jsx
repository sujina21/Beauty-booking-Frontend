import React, { useState } from 'react';
import { registerUserApi } from '../../api/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const registrationImage = `${process.env.PUBLIC_URL}/assets/images/mylogo.png`;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      const data = {
        firstName,
        lastName,
        email,
        password
      };
      registerUserApi(data).then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          // Clear form fields after successful registration
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate("/"); // Redirect to home page
        } else {
          toast.error(res.data.message);
        }
      });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <div className="image-container">
          <img src={registrationImage} alt="Registration" className="registration-image" />
        </div>
        <div className="form-container">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
