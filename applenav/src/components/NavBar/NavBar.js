import React, {Component} from 'react';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.navBarItem}</h2>
      </div>
    );
  }
}

export default NavBar;
