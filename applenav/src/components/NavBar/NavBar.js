import React, {Component} from 'react';

import './NavBar.css';

class NavBar extends Component {
  static defaultProps = {
    NavItems: ['Mac', 'Ipod', 'Iphone', 'Watch', 'TV', 'Music', 'Support']
  };
  render() {
    return (
      <div className='NavBar'>
        {this.props.NavItems.map(items => (
          <h3>{items}</h3>
        ))}
      </div>
    );
  }
}

export default NavBar;
