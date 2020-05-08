import React from 'react';
import { Card, Col, Row } from 'antd';
import { RateCard } from '../../../shared/SharedModuleIndex';

const { Meta } = Card;

/*
* Presentation used to display title,description,ratings of shows.
*/
export const ShowGridView = (props) => {
  const { movieListItem, onCardClickListener } = props;
  return (
    <Col span={8} data-cy={`col-${movieListItem.show_id}`} >
      <div onClick={(e) => onCardClickListener(e, movieListItem)}>
        <Card data-cy="card"
          hoverable
          style={{ padding: '11px' }}
          cover={<img alt="example" src={movieListItem.largeImageURL} height='220px' />}
        >
          <Meta data-cy="meta"
            title={movieListItem.title}// Display the show titles.
            description={movieListItem.description}// Display the description of the shows.
            avatar={movieListItem.type} // Display the type of shows.
          />
          <RateCard data-cy="ratecard" value={movieListItem.ratings} />
        </Card>
      </div>
    </Col>
  );
};

/*
* Display movie cards presentation view.
*/
export const ShowListCards = (props) => {
  const { movieListData, onCardClickListener } = props;
  return (
    <Row gutter={[16, 16]} style={{ padding: '40px' }}>
      {
        Object.values(movieListData).map((item) => <ShowGridView
          key={item.show_id}
          movieListItem={item}
          onCardClickListener={onCardClickListener}
        />)
      }
    </Row>
  );
};

export default ShowListCards;
