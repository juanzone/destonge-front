import React from 'react';
import InfoDate from '../components/info-date'

const RoomContentComponent = ({room, text}) => (
    <div className="container-fluid room-content">
      <div className="row">
        <div className=" col-sm-offset-1 col-sm-6">
          <h1>{room.name}</h1>
          <p>{room.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-offset-1 col-md-2 title-info-room"><InfoDate date={text.Dhs} />[ {text.Phs} ]</div>
        <div className="col-md-2 title-info-room">
          <InfoDate date={text.Dms} />
          [ {text.Pms} ]
        </div>
        <div className="col-md-2 title-info-room">[ {text.litSupp} ]</div>
        <div className="col-md-2 title-info-room">[ {text.dej} ]</div>
      </div>
      <div className="row">
      <div className="col-md-offset-1 col-md-2 info-room">{room.hsPrice}</div>
      <div className="col-md-2 info-room">{room.msPrice}</div>
      <div className="col-md-2 info-room">{text.prixLitSupp}</div>
      <div className="col-md-2 info-room">{text.prixDej}</div>
      </div>
    </div>
);

export default RoomContentComponent;
