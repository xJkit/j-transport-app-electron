import React, { PropTypes } from 'react';

const TableView = ({ results }) => (
  <div className="table-view">
    <table>
      <thead>
        <tr>
          <th>站名</th>
          <th>開往</th>
          <th>更新時間</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>{result.Station}</td>
            <td>{result.Destination}</td>
            <td>{result.UpdateTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TableView.propTypes = {
  results: PropTypes.array.isRequired,
};

export default TableView;
