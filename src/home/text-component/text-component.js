import React from 'react';

const TextComponent = (props) => (
  <div className="col-md-5 text-home">
    <p>
      {props.text}
    </p>
  </div>
);

export default TextComponent;
