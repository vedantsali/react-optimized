import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * This ShowItem Presentation Component is used to show the tvShow item.
 * @param {*} props
 */
function ShowItem(props) {
  const {
    showTitle, showReleaseYear, ratings, posterLink,
  } = props;
  return (
    <Card className="show-item">
      <Card.Img className="card-img" variant="top" src={posterLink} />
      <Card.Body>
        <Card.Title className="text-ellipsis" title={showTitle}>{showTitle}</Card.Title>
        <Card.Body className="card-data">
          <Card.Text className="text-ellipsis card-text">{showReleaseYear}</Card.Text>
          <Card.Text className="text-ellipsis card-text">{ratings}</Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default ShowItem;
