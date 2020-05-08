import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { InputField, ButtonElement, MessageBox } from '../../../shared';
/**
 * This presentation component is used to User Login.
 * @param {*} props 
 */
const Login = (props) => {
  const { submitClickListener, onInputChangeListener, errors, fields, status, statusText } = props;
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form>
          <h3>Sign In</h3>
          <FormGroup>
            <InputField
              id="username"
              type="text"
              placeholder="Enter Username"
              label="Username"
              onBlur={(e) => onInputChangeListener(e)}
              name="username"
            />  
            {!fields['username'] ? <MessageBox
              variant="danger"
              message={errors['username']}
            /> : ''}
            </FormGroup>
            <FormGroup>
              <InputField
                id="password"
                type="password"
                placeholder="Enter Password"
                label="Password"
                //onBlur={onInputChangeListener}
                name="password"
                onBlur={(e) => onInputChangeListener(e)}
              />
              {!fields['password'] ?
                <MessageBox
                  variant="danger"
                  message={errors['password']}
                /> : ''}
            </FormGroup>
            <FormGroup>
              <a href=""><label>Forgotten password?</label></a>
            </FormGroup>
             {/* <Link to='/shows'> */}
            <ButtonElement className="btn btn-primary btn-block" onClick={submitClickListener} value="Sign In" />
              {/* </Link> */}
            { ![200, 201].includes(status) && <MessageBox
                      variant="danger"
                                message={statusText}
                            />}
                </Form>
            </div>
        </div>
    );
};

export default Login;
