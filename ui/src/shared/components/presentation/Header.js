import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ButtonElement } from './ButtonElement';

function Header(props) {
  const {
    isSearch, isLogIn, searchButtonClick, handleInputChange, logoutButtonClick, homeButtonClick,
  } = props;
  return (
    <Navbar bg='dark' variant='dark'>
      <Link to='/list'>
        <img
          src='https://www.leanix.net/hs-fs/hubfs/Blog_Photos/Netflix_logo.svg.png?width=1034&height=480&name=Netflix_logo.svg.png'
          width='80'
          height='50'
          className='d-inline-block align-top'
          alt='Bootstrap logo'
        />
      </Link>
      <Form inline hidden={false}>
        {isSearch ? <div>
          <FormControl
            height='auto'
            type='text'
            className='search'
            onChange={handleInputChange}
          />
          <ButtonElement
            onClick={searchButtonClick}
            style={{ marginRight: '0.5rem' }}
            variant='danger'
            value='Search'
          />
        </div> : ''}
        <Link to='/'>
          <ButtonElement
            variant='outline-danger'
            value='LogOut'
            onClick={logoutButtonClick}
          />
        </Link>
      </Form>
    </Navbar>
  );
}

export default Header;
