import React, { Component } from 'react';
import Header from './Header';
// import Footer from './Footer';
import './App.css';
import CreatureList from './CreatureList';
import creaturesData from './Creature.js';
import CreatureSearch from './CreatureSearch';

const creatureTypes = [...new Set(creaturesData.map(c => c.type))];

class App extends Component {
  state = {
    creatures: creaturesData
  }

  handleSearch = ({ nameFilter, typeFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creaturesData
      .filter(creature => {
        return !nameFilter || creature.title.match(nameRegex);
      })
      .filter(creature => {
        return !typeFilter || creature.type === typeFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });
      
  }

  render() {
    const { creatures } = this.state;
    return (
      <div className="App">
  
        <Header />

        <CreatureSearch types={creatureTypes} onSearch={this.handleSearch}/>

        <main>
          <CreatureList creature={creatures} />
        </main>

        {/* <Footer /> */}
      
      </div>    
    );
  }
}

export default App;
