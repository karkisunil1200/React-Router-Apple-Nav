import React, {Component} from 'react';
import './SubNav.css';

class SubNav extends Component {
  static defaultProps = {
    ItemList: ['Macbook', 'Macbook-pro', 'Macbook-Air']
  };
  render() {
    return (
      <div className='SubNav'>
        {this.props.ItemList.map(items => (
          <h4>{items}</h4>
        ))}
      </div>
    );
  }
}

export default SubNav;
