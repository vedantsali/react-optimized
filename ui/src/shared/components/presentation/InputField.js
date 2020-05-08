import React from 'react';
// import { InputGroup } from 'react-bootstrap';

const InputField = (props) => {
  const {
    id, label, onBlur, type, placeholder, name,
  } = props;
  function defaultInputListener() {
  }
  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        type={type}
        className="form-control"
        placeholder={placeholder}
        width="50"
        onBlur={onBlur ? (e) => onBlur(e) : defaultInputListener}
        name={name || ''}
      />
    </div>
  );
}

export default InputField;
