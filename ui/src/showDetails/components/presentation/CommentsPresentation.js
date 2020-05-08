import { Comment, Avatar, Tooltip, Icon } from 'antd';
import React from 'react';

/**
 * Presentation component to show the user comments
 * @param {*} props 
 */
export const CommentsPresentation = (props) => {
  const { commentsDescription } = props;
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon
          type="like"
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>0</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        <Icon
          type="dislike"
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>0</span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <Comment data-cy="comment"
      actions={actions}
      author={<a>User comments</a>}
      avatar={
        <Avatar data-cy="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p> {commentsDescription} </p>
      }
    >
    </Comment>
  );
}