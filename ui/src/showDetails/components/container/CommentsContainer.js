import React, { Component } from 'react'
import { CommentsPresentation } from '../presentation/CommentsPresentation';
import { getCommentsOfUser } from '../../utils/DetailsSelectors';
import { connect } from 'react-redux';

/**
 * Class component to display the user comments
 */
class CommentsContainer extends Component {
  render() {
    const { commentsDescription } = this.props;
    return (
      <div>
        <CommentsPresentation commentsDescription={commentsDescription} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentsDescription: getCommentsOfUser(state)
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);

