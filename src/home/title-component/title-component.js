import React from 'react';

const TitleComponent = (props) => (
  <div className="col-md-12 text-center title-home">
    <span className="by-prop">[ {props.by} ]</span>
    <h1>{props.welcome}</h1>
  </div>
);

export default TitleComponent;
