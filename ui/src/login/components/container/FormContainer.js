
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitLoginRequest } from '../../actions/LoginActions';
import { loginSelector } from '../../utils/LoginSelectors';
import Login from '../presentation/Login';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      fields: {},
      errors: {}
    };
    this.onInputChangeListener = this.onInputChangeListener.bind(this);
    this.submitClickListener = this.submitClickListener.bind(this);
  }

  /**
     * This onInputChangeListener is uesd to handle the event of InputText component.
     */
  onInputChangeListener = (e) => {
    switch (e.target.id) {
      case 'username':
        this.setState({
          username: e.target.value
        });
        break;
      case 'password':
        this.setState({
          password: e.target.value
        });
        break;
        // // to maintain local state.
        // const { fields } = this.state;
        // fields[e.target.name] = e.target.value;
        // this.setState({ fields });
      default:
        break;
    }
  };

  validateForm = () => {
    const errors = {};
    let isFormValid = true;
    if (!this.state.username) {
      isFormValid = false;
      errors.username = '*Please enter the username.';
    }
    if (!this.state.password) {
      isFormValid = false;
      errors.password = '*Please enter the password.';
    }
    this.setState({ errors });
    return isFormValid;
  }

  /**
   * This submitClickListener is uesd to handle the event of Button component.
   */
  submitClickListener = (e) => {
    if (this.validateForm()) {
      this.props.actionHandler(submitLoginRequest({ username: this.state.username, password: this.state.password }));
    } else {
      console.log('error else!!!!!!!!!');
    }
  }

  render() {
    const error = this.state.errors;
    return (
      <div className="full-height">
        <div className='bg'>
          <Login
            username={this.state.username}
            tvshows={this.props.isLogIn}
            submitClickListener={this.submitClickListener}
            onInputChangeListener={this.onInputChangeListener}
            errors={error}
            fields={this.state.fields}
            status = {this.props.status}
            statusText = {this.props.statusText}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginError: loginSelector(state),
    statusText: state.error.login.error,
    isLogin: !state.error.login.isError
 };
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
