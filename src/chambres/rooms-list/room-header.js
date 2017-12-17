import React from 'react';

const RoomHeaderComponent = ({}) => (
  <div className="row room-header">
    <div className="col-md-offset-1 col-md-2">
      Chambre
    </div>
    <div className="col-md-offset-5 col-md-2">
      <button> <i className="fa fa-key" aria-hidden="true"></i> </button>
    </div>
  </div>
);

export default RoomHeaderComponent;
