import './CreatureList.css';
import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureList.css';

export default class CreatureList extends Component {
  render() {
    const creature = this.props.creature;
    return (
      <div>
        <ul className='creature-list'> 
          {creature.map(creature => (
            <CreatureItem creature={creature} key={creature.title}/>
          ))}
        </ul>
      </div>
    );
  }
}
