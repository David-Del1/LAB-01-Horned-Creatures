import React, { Component } from 'react';
import './CreatureItem.css';
export default class CreatureItem extends Component {
  render() {
    const creature = this.props.creature;
    return (
      <li className='creature-item'>
        <div>{creature.title}</div>
        <div>{creature.description}</div>
        <div>{creature.keyword}</div>
        <div>{creature.horns}</div>

        <img src={creature.url} alt={creature.title}/>
      </li>
    );
  }
}
