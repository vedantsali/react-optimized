import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../presentation/Header'
import { logout, Action } from '../../actions/SharedActions';
import { LoginActionConstants } from '../../../login/actions/LoginActionConstants';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.onClickListener = this.onClickListener.bind(this);
    this.state = { value: '', isSearchEmpty: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchButtonClick = this.searchButtonClick.bind(this);
  }

  /**
   * @function onClickListener - use for the navigation
   * @param {e} e event
   */
  onClickListener() {
    this.props.actionHandler(logout());
    this.props.actionHandler(Action(LoginActionConstants.CLEAR_CURRENT_URL));
    this.props.history.push('/login');
  }

  searchButtonClick = () => {
    if (this.state.value) {
      this.props.history.push(`/search/${this.state.value}`);
    } else {
      const isSearchEmpty = !this.state.value;
      this.setState({ isSearchEmpty });
    }
  }

/**
* This method is used to handle input change in search bar
*/
handleInputChange = (e) => {
  this.setState({
    value: e.target.value,
    isSearchEmpty: !e.target.value
  });
}

render() {
  return (
    <div >
      <Header
        isSearch={this.props.path && (this.props.path.includes('/search') || this.props.path.includes('/list')) && true}
        isLogIn={this.props.isLogIn}
        searchButtonClick={this.searchButtonClick}
        handleInputChange={this.handleInputChange}
        homeButtonClick={this.homeButtonClick}
      />
    </div>
  )
}
}

function mapStateToProps(state) {
  return {
    searchText: state.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
