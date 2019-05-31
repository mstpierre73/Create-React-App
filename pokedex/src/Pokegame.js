import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {

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
            {id: 143, name: 'Ronflex', type: 'normal', experience: 355}
          ]
    };

    render(){
        let hand1 = [];
        let hand2 = [];
        let hand3 = [...this.props.pokemon];
        while(hand1.length < 4){
            let randIdx = Math.floor(Math.random() * hand3.length);
            let randPokemon = hand3.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }

        while(hand2.length < 4){
            let randIdx = Math.floor(Math.random() * hand3.length);
            let randPokemon = hand3.splice(randIdx, 1)[0];
            hand2.push(randPokemon);
        }        
        
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.experience, 0);
        
        return(
            <div>
                <h1>Entrez dans l'arène!</h1>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        );
    }
}

export default Pokegame;
