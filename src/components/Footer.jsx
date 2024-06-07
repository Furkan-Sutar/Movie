// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // 
  return (
    <footer className="bg-gray-200 text-black mb-14 lg:mb-0  text-center py-4  w-full">
      <p className="text-sm">&copy; 2024 Nextrs. All rights reserved.</p>
      <p className="text-sm">
        <Link to={"#privacy-policy"} className="text-blue-500 hover:underline">Privacy Policy</Link> | 
        <Link to={"#terms-of-service"} className="text-blue-500 hover:underline mx-2">Terms of Service</Link> | 
        <Link to={"#contact-us"} className="text-blue-500 hover:underline">Contact Us</Link>
      </p>
    </footer>
  );
};

export default Footer;
