import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className='header'>

        <img
          className="logo"
          alt="Horned creatures"
          src="creature-images/horned-creature.jpeg"/>

        <h1>Horned Creatures </h1>
      </header>
    );
  }
}

export default Header;