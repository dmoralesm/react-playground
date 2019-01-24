import React from 'react';

const DynamicPage = ({ match }) => (
  <React.Fragment>
    <h1>Dynamic Page {match.params.id} </h1>
    <p>Page {match.params.id}</p>
  </React.Fragment>
);

export default DynamicPage;
