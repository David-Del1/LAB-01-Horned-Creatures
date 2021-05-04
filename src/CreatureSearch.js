import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    sortField: '',
  }

  handleNameChange = 
  ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    const { nameFilter, sortField } = this.state;
    return (
      <form className="creature-search" onSubmit={this.handleSubmit}>

        <input
          name='nameFilter'
          value={ nameFilter }
          onChange={this.handleNameChange}
        />

        <select
          name="sortField"
          value={ sortField }
          onChange={this.handleSearchChange}>
          
          <option value=''>Sort...</option>
          <option value='name'>by name</option>
          <option value='horns'>by horns</option>
        </select>

        <button>🔎</button>

      </form>
    );
  }
}
