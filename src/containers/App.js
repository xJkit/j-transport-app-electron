import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
import * as actions from 'actions';

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
    fetchData: PropTypes.func,
  };

  render() {
    const { fetchData } = this.props;
    return (
      <div className="app">
        <div className="container">
          <Navbar fetchData={fetchData} />
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), {
  fetchData: actions.mrt.loadMRT,
})(App);
