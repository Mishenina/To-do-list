import React from 'react';

import './styleMenuItem.css';

export default class MenuItem extends React.Component {
  render() {
    return (

      {this.props.children}
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.node
};
