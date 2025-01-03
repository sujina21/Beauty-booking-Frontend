import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Gel Overlay',
      price: 1200,
      description: 'Long-lasting and stunning gel nails with a glossy finish. Choose from a variety of designs and colors.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/gelnails.jpg`,
    },
    {
      id: 2,
      name: 'Bridal Makeup',
      price: 15000,
      description: 'Expert bridal makeup service, including free nails .',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/bridalmakeup.png`,
    },
    {
      id: 3,
      name: 'Party Makeup',
      price: 2000,
      description: 'Professional party makeup services for birthdays, events, and special occasions.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/partymakeup.jpg`,
    },
    {
      id: 4,
      name: 'Polygel Extensions',
      price: 2000,
      description: 'Durable and flawless polygel extensions for a natural yet elegant look.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/polygel.jpg`,
    },
    {
      id:5,
      name: 'Smokey Eye Makeup',
  price: 2500,
  description: 'Bold and dramatic smokey eye makeup for parties or special events.',
  image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/blacksmokey.jpg`,
    },
    {
      id: 6,
      name: 'Rubber base Extensions',
      price: 1100,
      description: 'Enhance your nails with strong and durable rubber base extensions.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/rubberbase.jpg`,
    },
    {
      id: 7,
      name: 'Gel Extensions',
      price: 1400,
      description: 'Sleek and stylish gel extensions for long-lasting beauty and comfort.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/gelextensions.jpg`,
    },
    {
      id: 8,
      name: 'Shellac Nails',
      price: 1000,
      description: 'Perfectly polished shellac nails that last for weeks without chipping.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/shellac.jpg`,
    },
    {
      id: 9,
      name: 'Facial Glow Makeup',
      price: 2500,
      description: 'Radiant facial glow makeup to enhance your natural beauty.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/facial-glow-makeup.jpg`,
    },
    {
      id: 10,
      name: 'Glitter Nails',
      price: 1400,
      description: 'Sparkling glitter nails to add a touch of glamour to your style.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/glitternails.jpg`,
    },
    {
      id: 11,
      name: 'Makeup Consultation',
      price: 500,
      description: 'Personalized makeup consultation to find the perfect look for you.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/makeupconsultation.jpg`,
    },
    {
      id: 12,
      name: '3D Nail Art',
      price: 1500,
      description: 'Intricate 3D nail art designs that make your nails stand out.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/3dnailart.jpg`,
    },
    {
      id: 13,
      name: 'Ombre Nails',
      price: 1600,
      description: 'Beautiful gradient ombre nails in a variety of color combinations.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/ombrenails.jpg`,
    },
    {
      id: 14,
      name: 'Glow-in-the-Dark Nails',
      price: 1600,
      description: 'Fun and unique glow-in-the-dark nails for a playful vibe.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/glownails.jpg`,
    },
    {
      id: 15,
      name: 'HD Makeup',
      price: 3000,
      description: 'High-definition makeup for flawless beauty, perfect for photoshoots and special events.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/hdmakeup.jpg`,
    },
    {
      id: 16,
      name: 'Presson Nails',
      price: 800,
      description: 'Quick and stylish nails for those on the go.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/presson.jpg`,
    },
    {
      id: 17,
      name: 'Seasonal Nail Designs',
      price: 1300,
      description: 'Exclusive seasonal nail designs to match the latest trends.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/seasonal-nails.jpg`,
    },
    {
      id: 18,
      name: 'Chrome Nails',
      price: 1400,
      description: 'Mirror-like chrome nails for a sleek and futuristic look.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/chrome-nails.jpg`,
    },
    {
      id: 19,
      name: 'French Nail art with extensions',
      price: 1700,
      description: 'Classic French manicure for an elegant and timeless look.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/frenchmanicure.jpg`,
    },
    {
      id: 20,
      name: 'Bridal Nail Art',
      price: 2000,
      description: 'Elegant and detailed bridal nail art for your special day.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/bridal-nail-art.jpg`,
    },{
      id:21,
    name: 'Acrylic Extensions',
      price: 1500,
      description: 'Enhance your nails with strong and durable acrylic extensions in various styles.',
      image: `${process.env.PUBLIC_URL}/assets/images/serviceimage/acrylicextensions.jpg`,
    },
  ];

  return (
    <div className="services-page">
      <h2>Our Beauty Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-details">
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price"><strong>Price:</strong> NRS {service.price}</p>
              <Link to={`/book/${service.id}`}>
                <button className="book-now-button">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
