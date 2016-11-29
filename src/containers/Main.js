import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';

class Main extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div className="Main">
        <Navbar />
        <h1>Main containers rendered by default</h1>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(Main);
