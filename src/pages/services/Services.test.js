import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from './Services';
import { MemoryRouter } from 'react-router-dom';

describe('Services Component', () => {
  test('renders the services list correctly', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    // Test for the presence of service names
    expect(screen.getByText('Spa Services')).toBeInTheDocument();
    expect(screen.getByText('Conference Hall')).toBeInTheDocument();
  });

  test('renders the "Book Now" buttons', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    // Test for the presence of book now buttons
    expect(screen.getAllByText('Book Now').length).toBe(4); // Assuming you have 4 services
  });
});
