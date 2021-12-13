import React, { Component } from 'react';
import './style.less';

class Header extends Component {
  render() {
    return (
      <header className='header-component'>
        <div className='home'>
          <a href='/'>
            logo
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
