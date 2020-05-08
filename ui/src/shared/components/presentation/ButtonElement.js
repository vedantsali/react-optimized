import { Button } from 'react-bootstrap';
import React from 'react';

export const ButtonElement = (props) => {
  const {
    onClick, className, value, variant, type,
  } = props;
  function onButtonClickListener() {
  }
  return (
    <Button
      onClick= {onClick || ((e) => onButtonClickListener)}
      variant={variant || 'primary'}
      className={className}
      type = {type || 'button'}>
      {value}
    </Button>
  );
}
