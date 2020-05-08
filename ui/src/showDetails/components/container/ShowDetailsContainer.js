import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShowDetails } from '../../actions/DetailAction';
import { detailsSelector, detailsUISelector, getCommentsOfUser } from '../../utils/DetailsSelectors';
import { HeaderContainer, isUserLoggedIn } from '../../../shared';
import TvShowDetails from '../presentation/ShowDetails';

class ShowDetailsContainer extends Component {
  componentDidMount() {
    const { show_id: showId } = this.props.match.params;
    const currentId = this.props.showDetailsData.activeID;
    this.props.actionHandler(isUserLoggedIn(`shows/${showId}`));
    if (showId !== currentId) {
      this.props.actionHandler(getShowDetails(showId));
    }
  }

  render() {
    const { showDetails, history } = this.props;
    return (
      <>
        <HeaderContainer path={this.props.path} history={this.props.history} showDetails={showDetails || []} />
        <div>
          <TvShowDetails tvShowDetails={showDetails} path={history.location.pathname} />
        </div>
        {this.props.children}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    showDetails: detailsSelector(state),
    showDetailsData: detailsUISelector(state),
    commentsDescription: getCommentsOfUser(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsContainer)
