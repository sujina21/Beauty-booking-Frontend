import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bookings.css';

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRooms, setFilteredRooms] = useState([]);

  const deluxeUrl = `${process.env.PUBLIC_URL}/assets/images/deluxe`;
  const nonDeluxeUrl = `${process.env.PUBLIC_URL}/assets/images/nondeluxe`;

  const [deluxeRooms] = useState([
    {
      id: 1,
      name: 'Hotel Chhimeki',
      pricePerNight: 40,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${deluxeUrl}/1.jpg`,
    },
    {
      id: 2,
      name: 'Hotel Green Horizon',
      pricePerNight: 40,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${deluxeUrl}/2.jpg`,
    },
    {
      id: 3,
      name: 'Hotel Atlantic',
      pricePerNight: 40,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${deluxeUrl}/3.jpg`,
    },
    {
      id: 4,
      name: 'Hotel Marriot',
      pricePerNight: 40,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${deluxeUrl}/4.jpg`,
    },
    {
      id: 5,
      name: 'Hotel Monalisha',
      pricePerNight: 40,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${deluxeUrl}/5.jpg`,
    },
  ]);

  const [nonDeluxeRooms] = useState([
    {
      id: 6,
      name: 'Hotel Hello',
      pricePerNight: 30,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${nonDeluxeUrl}/9.jpg`,
    },
    {
      id: 7,
      name: 'Hotel Peace',
      pricePerNight: 30,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${nonDeluxeUrl}/10.jpg`,
    },
    {
      id: 8,
      name: 'Hotel King',
      pricePerNight: 30,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${nonDeluxeUrl}/11.jpg`,
    },
    {
      id: 9,
      name: 'Hotel Buddha',
      pricePerNight: 30,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${nonDeluxeUrl}/12.jpg`,
    },
    {
      id: 10,
      name: 'Hotel Child',
      pricePerNight: 30,
      facilities: [
        '24 Hour Services',
        'Dedicated Internet',
        'Abundant Parking Space',
        '24x7 CCTV Surveillance',
        'Fire Alarm',
        'Pet Friendly',
      ],
      image: `${nonDeluxeUrl}/13.jpg`,
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRooms(e.target.value);
  };

  const filterRooms = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredRooms([]);
    } else {
      const deluxeFiltered = deluxeRooms.filter((room) =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const nonDeluxeFiltered = nonDeluxeRooms.filter((room) =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRooms([...deluxeFiltered, ...nonDeluxeFiltered]);
    }
  };

  const handleFilterClick = (type) => {
    if (type === 'deluxe') {
      setFilteredRooms([...deluxeRooms]);
    } else if (type === 'non-deluxe') {
      setFilteredRooms([...nonDeluxeRooms]);
    } else {
      setFilteredRooms([]);
    }
  };

  return (
    <div className="bookings-page">
      <h2>Available Hotels</h2>
      <div className="top-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Hotels nearby..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filter-buttons">
          <button
            className="filter-button"
            onClick={() => handleFilterClick('deluxe')}
          >
            Deluxe
          </button>
          <button
            className="filter-button"
            onClick={() => handleFilterClick('non-deluxe')}
          >
            Non-Deluxe
          </button>
        </div>
      </div>
      <div className="rooms-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div className="room" key={room.id}>
              <img src={room.image} alt={room.name} className="room-image" />
              <div className="room-details">
                <h4>{room.name}</h4>
                <p>
                  <strong>Price:</strong> ${room.pricePerNight} per night
                </p>
                <p>
                  <strong>Facilities & Amenities:</strong>
                </p>
                <details>
                  <summary>View Facilities</summary>
                  <ul>
                    {room.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </details>
                <Link to={`/book/${room.id}`}>
                  <button className="purchase-button">Book Now</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No rooms found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
