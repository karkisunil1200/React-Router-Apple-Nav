import React, {Component} from 'react';
import './SubNav.css';

class SubNav extends Component {
  static defaultProps = {
    ItemList: ['Macbook', 'Macbook-pro', 'Macbook-Air']
  };
  render() {
    return (
      <div>
        <h4>{this.props.subNavItem}</h4>
      </div>
    );
  }
}

export default SubNav;
