import React from 'react';

const RoomAttributeItemComponent = (props) => (
  <div className="col-md-offset-1 col-md-8 attr-container">
    <div className="col-md-2">
      <img src={props.img} />
    </div>
    <div className="col-md-10">
      {props.desc}
    </div>
  </div>
);

export default RoomAttributeItemComponent;
