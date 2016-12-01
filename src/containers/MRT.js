import React, { Component, PropTypes } from 'react';
import TableView from 'components/TableView';
import { connect } from 'react-redux';
import * as actions from 'actions';

class MRT extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    payload: PropTypes.any,
    fetchData: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const { isFetching, payload } = this.props;
    if (isFetching) {
      return (<h1>讀取中...</h1>);
    } else if (!isFetching && !payload) {
      return (<h1>伺服器忙線中，請稍後再試一次。</h1>);
    }
    return (
      <div className="mrt">
        <h1>共有 {payload.result.count} 台捷運到站：</h1>
        <TableView results={payload.result.results} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.mrt.isFetching,
  payload: state.mrt.payload,
});

export default connect(mapStateToProps, {
  fetchData: actions.mrt.loadMRT,
})(MRT);
