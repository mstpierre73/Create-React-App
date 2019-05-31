import React, { Component } from 'react';
import "./Pokedex.css";
import Pokecard from './Pokecard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', experience: 65}
          ]
    };
    render(){
        return(
            <div className="Pokedex">
                {this.props.pokemon.map ((poke) =>(
                    <Pokecard id={poke.id} name= {poke.name} type= {poke.type} experience= {poke.experience} />
                ))}
            </div>
        );
    }
}

export default Pokedex; 
