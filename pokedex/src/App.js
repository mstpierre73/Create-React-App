import React, {Component} from 'react';
import './App.css';
import Pokegame from './Pokegame.js';
import Pokedex from './Pokedex';


class App extends Component {
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <h1>
          Mon Pokedex
        </h1>
        < Pokedex />
        < Pokegame />
      </header>
    </div>
    );
  }
}


export default App;
