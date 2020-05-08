import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getShowLists, fetchSearchList } from '../../actions/ShowListActions';
import { HeaderContainer, isUserLoggedIn } from '../../../shared';
import { TvShowList } from '../presentation/TvShowList';
import { ShowListActionConstants } from '../../actions/ShowListActionConstants';

class ShowListContainer extends Component {
  componentDidMount() {
    this.props.actionHandler(isUserLoggedIn('list'));
    if (this.props.location.pathname === '/list') {
      this.props.actionHandler(getShowLists());
    }
    if (this.props.location.pathname.includes('search')) {
      this.props.actionHandler(fetchSearchList(this.props.match.params.search_text));
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot === '/list') {
      this.props.actionHandler(getShowLists());
    }
    if (snapshot && snapshot.includes('search')) {
      this.props.actionHandler(fetchSearchList(this.props.match.params.search_text));
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      return this.props.location.pathname;
    }
    return null;
  }

  // onclick of the movie cards
  onCardClickListener = (e, item) => {
    if (item && item.show_id) { // If only id exists then navigate to the particular details page.
      // navigate to show details based on the show_id.
      this.props.history.push(`/details/${item.show_id}`);
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

  /**
 * This listener is used to handle the show More button event.
 */
  onShowMoreClickListener = () => {
    this.props.actionHandler(getShowLists(ShowListActionConstants.FETCH_TV_SHOW_LIST_DATA, this.props.activePage));
  }

  render() {
    return (
      <>
        <HeaderContainer path={this.props.match.path} history={this.props.history} />
        <div>
          {/* style={{position: 'relative', width: '90%', left: '10%', top: '50px', overflowY: 'scroll', zIndex: '1'}} */}
          <TvShowList
            tvShowList={this.props.movieListData}
            allTvShowList={this.props.movieListData}
            onShowMoreClickListener={this.onShowMoreClickListener}
          />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieListData: state.data.current.movieList,
    isLogIn: localStorage.getItem('username'),
    activePage: 1, //  state.data.current.tvShow.activePage,
    showLoader: false // state.data.current.tvShow.showLoader
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowListContainer));
