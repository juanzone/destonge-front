import React from 'react';
import InfoDate from '../components/info-date';

const GiteComponent = ({gite, text}) => (
  <div className="container-fluid room-content">
    <div className="row">
      <div className=" col-sm-offset-1 col-sm-6">
        <h1>{gite.title}</h1>
        <p>{gite.description}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-offset-1 col-md-2 title-info-room"><InfoDate date={text.Dbs} />[ {text.Pbs} ]</div>
      <div className="col-md-2 title-info-room">
        <InfoDate date={text.Dms} />
        [ {text.Pms} ]
      </div>
      <div className="col-md-2 title-info-room">
      <InfoDate date={text.Dhs} />
      [ {text.Phs} ]
      </div>
    </div>
    <div className="row">
    <div className="col-md-offset-1 col-md-2 info-room">{gite.bsPrice}</div>
    <div className="col-md-2 info-room">{gite.msPrice}</div>
    <div className="col-md-2 info-room">{gite.hsPrice}</div>
    </div>
  </div>
);

export default GiteComponent;
