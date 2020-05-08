import { Alert } from 'react-bootstrap';
import React from 'react';

const MessageBox = (props) => {
  const { message, variant } = props;
  return (
    <div>
      {message ? <Alert variant={variant || 'primary'} > {message}</Alert> : ''}
    </div>
  );
};

export default MessageBox;
