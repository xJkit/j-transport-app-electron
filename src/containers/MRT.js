import React, { Component, PropTypes } from 'react';
import TableView from 'components/TableView';
import { connect } from 'react-redux';
import * as actions from 'actions';

class MRT extends Component {

  static propTypes = {
    mrt: PropTypes.object.isRequired,
    fetchData: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="mrt">
        <h1>共有 {32} 台捷運到站：</h1>
        <TableView />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mrt: state.mrt,
});

export default connect(mapStateToProps, {
  fetchData: actions.mrt.loadMRT,
})(MRT);
