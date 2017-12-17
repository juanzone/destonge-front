import React from 'react';

const InfoDate = ({date}) => (
  <span>
    <span className="info-cigle">
      <i className="fa fa-info-circle" aria-hidden="true"></i>
    </span>
    <span className="info-date">{date}</span>
  </span>
);

export default InfoDate;
