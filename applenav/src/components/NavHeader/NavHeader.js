import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import SubNav from '../SubNav/SubNav';

class NavHeader extends Component {
  static defaultProps = {
    NavItems: ['Mac', 'Ipod', 'Iphone', 'Watch', 'TV', 'Music', 'Support'],
    ItemList: ['Macbook', 'Macbook-pro', 'Macbook-Air']
  };
  render() {
    return (
      <>
        <div className='NavBar'>
          {this.props.NavItems.map(items => (
            <NavBar navBarItem={items} />
          ))}
        </div>
        <div className='SubNav'>
          {this.props.ItemList.map(items => (
            <SubNav subNavItem={items} />
          ))}
        </div>
      </>
    );
  }
}

export default NavHeader;
