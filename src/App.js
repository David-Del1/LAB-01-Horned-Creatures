import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import request from 'superagent';






// const creatureTypes = [...new Set(creaturesData.map(c => c.type))];

class App extends Component {
  state = {
    creatures: []
  }

  componentDidMount() {
    this.handleSearch({});
  }

  handleSearch = async ({ nameFilter, typeFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');
    const response = await request.get('https://lab-06-enjh.herokuapp.com/api/creatures');
    const searchedData = response.body
      .filter(creature => {
        return !nameFilter || creature.title.match(nameRegex);
      })
      .filter(creature => {
        return !typeFilter || creature.type === typeFilter;
      });

    this.setState({ creatures: searchedData });
      
  }

  render() {
    const { creatures } = this.state;
    return (
      <div className="App">
  
        <Header />

        <CreatureSearch onSearch={this.handleSearch}/>

        <main>
          <CreatureList creature={creatures} />
        </main>

        <Footer />
      
      </div>    
    );
  }
}

export default App;
