import React, { Component } from 'react';
import "./Pokedex.css";
import Pokecard from './Pokecard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            {id: 1, name: "Bulbizarre", type: "plante, poison", experience: 37},
            {id: 4, name: 'Salamèche', type: 'feu', experience: 62},
            {id: 7, name: 'Carapuce', type: 'eau', experience: 63},
            {id: 11, name: 'Chrysacier', type: 'insecte', experience: 72},
            {id: 12, name: 'Papilusion', type: 'insecte, vol', experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', experience: 112},
            {id: 39, name: 'Rondoudou', type: 'normal, fée', experience: 95},
            {id: 94, name: 'Ectoplasma', type: 'poison, spectre', experience: 225},
            {id: 133, name: 'Evoli', type: 'normal', experience: 65},
            {id: 143, name: 'Ronflex', type: 'normal', experience: 255}
          ]
    };
    render(){
        return(
            <div className="Pokedex">
                <h3 className="Pokedex-title">Ce joueur a : {this.props.exp} points! </h3>
                <p>{this.props.isWinner ? "Joueur gagnant!" : "Joueur perdant!"}</p>
                {this.props.pokemon.map ((poke) =>(
                    <Pokecard id={poke.id} name= {poke.name} type= {poke.type} experience= {poke.experience} />
                ))}
            </div>
        );
    }
}

export default Pokedex; 
