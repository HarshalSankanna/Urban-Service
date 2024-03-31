import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css'; 

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get('http://localhost:5555/service');
        if (response.data && Array.isArray(response.data.data)) {
          setServices(response.data.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    }

    fetchServices();
  }, []);

  return (
    <div className="services-container">
      <h1>Services</h1>
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index}>{service.serviceName}</li>
        ))}
      </ul>
    </div>
  );
}
