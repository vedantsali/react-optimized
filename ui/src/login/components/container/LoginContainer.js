/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import FormContainer from './FormContainer';

export default class LoginContainer extends Component {
  render() {
    return (
      <div className = {'full-width'} data-cy="form">
        <FormContainer />
      </div>
    );
  }
}
