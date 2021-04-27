import React, { Component } from 'react';
import Header from './Header';
// import Footer from './Footer';
import './App.css';
import CreatureList from './CreatureList';
import creatures from './Creature.js';

class App extends Component {

  render() {
    return (
      <div className="App">
  
        <Header />

        <main>
          <CreatureList creature={creatures} />
        </main>

        {/* <Footer /> */}
      
      </div>



      
    );
  }

}

export default App;
