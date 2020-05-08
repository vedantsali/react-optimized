import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonElement } from '../../../shared';
import ShowItem from './ShowItem';

/**
 * This TvShowList Presenation component is used to display the Tvshow Data List.
 * @param {*} props
 */
export const TvShowList = (props) => {
  const { onShowMoreClickListener } = props;
  const showList = props.tvShowList && props.tvShowList.length ? props.tvShowList.map((showItem) => (
    <Link to={`/shows/${showItem.id}`} key={showItem.id} >
      <ShowItem showId={showItem.id} showTitle={showItem.title} onItemClickListener={props.onItemClickListener}
        showReleaseYear={showItem.release_date.split('-')[0]} ratings={showItem.vote_average} posterLink={showItem.poster_link} />
    </Link>
  ))
    : <p> Oops!! No items to show.</p>;
  return (
    <div className="show-container">
      <div className="show-list-container">
        {showList}
        <ButtonElement
          value='Show More..'
          onClick={onShowMoreClickListener}
        />
      </div>
    </div>
  );
};
