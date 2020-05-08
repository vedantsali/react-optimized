import React from 'react'

/**
 * Method used to get the comment description of the user
 * @param {*} showDetails 
 */
export const getCommentsDescription = (showDetails) => {
  let userComments = '';
  showDetails && showDetails['comments'] && Object.values(showDetails['comments']).map(item => {
    userComments = item.description;
  });
  return userComments;
}