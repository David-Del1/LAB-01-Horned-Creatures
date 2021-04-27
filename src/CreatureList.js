import './CreatureList.css';
import React, { Component } from 'react';

export default class CreatureList extends Component {
  render() {
    const creature = this.props.creature;
    return (
      <div>
        <ul className='creature-list'></ul>
      </div>
    );
  }
}
