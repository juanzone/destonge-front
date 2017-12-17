import React from 'react';
import './backbutton.css';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <Link to="/">
  <div className="back-button">
  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
  </div>
  </Link>
);

export default BackButton;
