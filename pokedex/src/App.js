import React, {Component} from 'react';
import Pokedex from './Pokedex.js';
import './App.css';


class App extends Component {
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <h1>
          Mon Pokedex
        </h1>
        <Pokedex />
      </header>
    </div>
    );
  }
}


export default App;
