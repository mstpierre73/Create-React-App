import React, {Component} from 'react';
import './App.css';
import Pokegame from './Pokegame.js';

class App extends Component {
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <h1>
          Bienvenue dans le monde des Pokemons!
        </h1>
        < Pokegame />
      </header>
    </div>
    );
  }
}


export default App;
