import React from 'react';

const RoomItemComponent = (props) => (
  <div className="col-md-6 col-xs-12 room-item">
    {props.children}
  </div>
);

export default RoomItemComponent;
