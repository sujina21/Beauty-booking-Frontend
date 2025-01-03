import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from './Login';

jest.mock('../../api/Api', () => ({
  loginUserApi: jest.fn(),
}));

const { loginUserApi } = require('../../api/Api');

describe('Login Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

  test('renders the login form', () => {
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('validates form fields and shows error messages', () => {
    fireEvent.click(screen.getByText(/Login/i));

    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  test('shows error if email is invalid', () => {
    fireEvent.change(screen.getByPlaceholderText('Email Address'), {
      target: { value: 'invalid-email' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText(/Login/i));

    expect(screen.getByText('Email address is invalid')).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    fireEvent.change(screen.getByPlaceholderText('Email Address'), {
      target: { value: 'sujinasht@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'sujina123' },
    });

    loginUserApi.mockResolvedValueOnce({
      data: { success: true, message: 'Login successful', user_id: '123', token: 'abc', user: { name: 'sujina' } },
    });

    fireEvent.click(screen.getByText(/Login/i));

    expect(loginUserApi).toHaveBeenCalledWith({
      email: 'sujinasht@example.com',
      password: 'sujina123',
    });

    expect(await screen.findByText('Login successful')).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith("user_id", "123");
    expect(localStorage.setItem).toHaveBeenCalledWith("token", "abc");
    expect(localStorage.setItem).toHaveBeenCalledWith("user", JSON.stringify({ name: 'sujina' }));
  });

  test('shows error toast if login fails', async () => {
    loginUserApi.mockResolvedValueOnce({
      data: { success: false, message: 'Login failed' },
    });

    fireEvent.change(screen.getByPlaceholderText('Email Address'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText(/Login/i));

    expect(loginUserApi).toHaveBeenCalledWith({
      email: 'john.doe@example.com',
      password: 'password123',
    });

    expect(await screen.findByText('Login failed')).toBeInTheDocument();
  });
});
