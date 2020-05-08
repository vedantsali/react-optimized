import React, { useState, useRef } from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import ShowMoreContainer from '../container/ShowMoreContainer';
import { NotFound, ButtonElement } from '../../../shared';
import { ShowDetailsConstants } from '../../actions/DetailConstants';

/**
 * This Presentation component is used to show the tvShow Details.
 * @param {*} props
 */
const TvShowDetails = (props) => {
  const { tvShowDetails, path } = props;
  const [textShow, setText] = useState('Show More');
  const elementRef = useRef(null);
  const data = Object.keys(tvShowDetails).map((key) => {
    const index = ShowDetailsConstants.TvShowConstants[key];
    if (index) {
      return (
        <ListGroup.Item><b>{index}:</b> {tvShowDetails[key]}</ListGroup.Item>
      );
    }
  });
  // Toggle the text of the button
  function toggle() {
    // const offset = elementRef.current.offsetTop;
    elementRef.current.scrollTop = 0;
    window.scrollTo(0, 550);
    if (textShow === 'Show More') {
      setText('Show Less');
    } else {
      setText('Show More');
    }
  }

  return (
    <div>
      <div className="table-card">
        <Image src={tvShowDetails.poster_link} alt={tvShowDetails.title} className="left-align" thumbnail />
        <ListGroup>
          {data}
        </ListGroup>
        <Link to={{
          pathname: `${path}/more`,
          state: {
            tvShowDetails
          }
        }}>
          <ButtonElement className="top-margin" onClick={toggle} value={textShow} /></Link>
      </div>
      <div ref={elementRef}>
        <Switch>
          <Route exact path='/shows/:showid/more' component={ShowMoreContainer} />
          <Route path='/shows/:showid/more/' component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default TvShowDetails;
