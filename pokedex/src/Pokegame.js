import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component {

    static defaultProps = {
        pokemon: [
            {id: 1, name: "Bulbizarre", type: "plante, poison", experience: 37},
            {id: 2, name: "Herbizarre", type: "plante, poison", experience: 227},
            {id: 3, name: "Florizarre", type: "plante, poison", experience: 792},
            {id: 4, name: 'Salamèche', type: 'feu', experience: 62},
            {id: 5, name: "Reptincel", type: "feu", experience: 334},
            {id: 6, name: "Dracaufeu", type: "feu", experience: 884},
            {id: 7, name: 'Carapuce', type: 'eau', experience: 63},
            {id: 8, name: 'Carabaffe', type: 'eau', experience: 412},
            {id: 9, name: 'Tortank', type: 'eau', experience: 901},
            {id: 10, name: 'Chenipan', type: 'insecte', experience: 16},
            {id: 11, name: 'Chrysacier', type: 'insecte', experience: 72},
            {id: 12, name: 'Papilusion', type: 'insecte, vol', experience: 178},
            {id: 13, name: 'Aspicot', type: 'insecte, poison', experience: 24},
            {id: 14, name: 'Coconfort', type: 'insecte, poison', experience: 88},
            {id: 15, name: 'Dardargnan', type: 'insecte, poison', experience: 112},
            {id: 16, name: 'Roucool', type: 'normal, vol', experience: 33},
            {id: 17, name: 'Roucoups', type: 'normal, vol', experience: 203},
            {id: 18, name: 'Roucarnage', type: 'normal, vol', experience: 605},
            {id: 19, name: 'Rattata', type: 'normal', experience: 17},
            {id: 20, name: 'Rattatac', type: 'normal', experience: 126},
            {id: 21, name: 'Piafabec', type: 'normal, vol', experience: 78},
            {id: 22, name: 'Rapasdepic', type: 'normal, vol', experience: 241},
            {id: 23, name: 'Abo', type: 'poison', experience: 109},
            {id: 24, name: 'Arbok', type: 'poison', experience: 467},
            {id: 25, name: 'Pikachu', type: 'electric', experience: 112},
            {id: 26, name: 'Raichu', type: 'electric', experience: 504},
            {id: 27, name: 'Sabelette', type: 'sol', experience: 222},
            {id: 28, name: 'Sablaireau', type: 'sol', experience: 633},

            {id: 39, name: 'Rondoudou', type: 'normal, fée', experience: 95},
            {id: 94, name: 'Ectoplasma', type: 'poison, spectre', experience: 225},
            {id: 133, name: 'Evoli', type: 'normal', experience: 65},
            {id: 137, name: 'Porygon', type: 'normal', experience: 476},
            {id: 143, name: 'Ronflex', type: 'normal', experience: 895},
            {id: 149, name: 'Dracolosse', type: 'dragon, vol', experience: 992}
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
        let player1 = 1;
        let player2 = 2;
        
        return(
            <div className="Pokegame-field">
                <h1>Entrez dans l'arène!</h1>
                <Pokedex player={player1} pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex player={player2} pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        );
    }
}

export default Pokegame;
