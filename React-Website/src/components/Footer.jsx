import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';  
import { useAuth } from '../contextAPI/Auth';

const Footer = () => {
  const {isLoggedIn} = useAuth();
  return (
    <footer className="bg-primary text-light py-3">
        <div className="row mt-3">
          <div className="col-md-12">
            <p className="text-center text-white">Copyright © 2024 - Coding Club</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
