import React from 'react';
import { Table } from 'react-bootstrap';
import { ShowDetailsConstants } from '../../actions/DetailConstants';

export default function ShowMoreContainer(props) {
  const { location } = props;
  const tvShowDetails = location.state.tvShowDetails;
  const data = Object.keys(tvShowDetails).map(key => {
    const index = ShowDetailsConstants.TvShowMoreConstants[key];
    if (index) {
      if (tvShowDetails[key] instanceof Array) {
        const name = Object.values(tvShowDetails[key]).map(item => item.name).toString();
        return (
          <tr>
            <th>
              {index}
            </th>
            <td>
              {name}
            </td>
          </tr>
        );
      }
      else {
        return (
          <tr>
            <th>
              {index}
            </th>
            <td>
              {tvShowDetails[key]}
            </td>
          </tr>
        );
      }
    }
  });
  return (
    <div className="table-card top-margin">
      <Table bordered hover className="table-style table-hover">
        <tbody>
          {data}
        </tbody>
      </Table>
    </div>
  );
}
