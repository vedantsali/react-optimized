import React from 'react';
import { Redirect } from 'react-router'

function NotFound(props) {
  let redirect = '';
  if (props.location.pathname.endsWith('more')) {
    redirect = <Redirect to={`/shows/${props.match.params.showid}`}></Redirect>;
  }
  return (
    <div>
      <h3>404 Page Not Found</h3>
      {redirect}
    </div>
  );
}

export default NotFound;
