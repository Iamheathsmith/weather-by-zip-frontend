import React from 'react';
import './nav.scss';

class Nav extends React.Component {

  render() {
    return (
      <div className="header">
        <h1 className="logo">ZipCode</h1>
        <h3 className="saying">A code challenge that needs your ZipCode.</h3>
      </div>
    );
  }
}


export default Nav;
