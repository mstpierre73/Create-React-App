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
            {id: 29, name: 'Nidoran', type: 'poison', experience: 98},
            {id: 30, name: 'Nidorina', type: 'poison', experience: 479},
            {id: 31, name: 'Nidoqueen', type: 'poison, sol', experience: 971},
            {id: 32, name: 'Nidoran', type: 'poison', experience: 78},
            {id: 33, name: 'Nidorino', type: 'poison', experience: 395},
            {id: 34, name: 'Nidoking', type: 'poison, sol', experience: 878},
            {id: 35, name: 'Mélofée', type: 'fée', experience: 111},
            {id: 36, name: 'Mélodelfe', type: 'fée', experience: 515},
            {id: 37, name: 'Goupix', type: 'feu', experience: 49},
            {id: 38, name: 'Feunard', type: 'feu', experience: 216},
            {id: 39, name: 'Rondoudou', type: 'normal, fée', experience: 95},
            {id: 40, name: 'Grodoudou', type: 'normal, fée', experience: 322},
            {id: 41, name: 'Nosferapti', type: 'poison, vol', experience: 76},
            {id: 42, name: 'Nosferalto', type: 'poison, vol', experience: 179},
            {id: 43, name: 'Mystherbe', type: 'poison, plante', experience: 83},
            {id: 44, name: 'Ortide', type: 'poison, plante', experience: 344},
            {id: 45, name: 'Rafflesia', type: 'poison, plante', experience: 776},
            {id: 46, name: 'Paras', type: 'insecte, plante', experience: 124},
            {id: 47, name: 'Parasect', type: 'insecte, plante', experience: 546},
            {id: 48, name: 'Mimitoss', type: 'poison, insecte', experience: 202},
            {id: 49, name: 'Aéromite', type: 'poison, insecte', experience: 601},
            {id: 50, name: 'Taupiqueur', type: 'sol', experience: 39},
            {id: 51, name: 'Triopikeur', type: 'sol', experience: 155},
            {id: 52, name: 'Miaouss', type: 'normal', experience: 179},
            {id: 53, name: 'Persian', type: 'normal', experience: 316},
            {id: 54, name: 'Psychokwak', type: 'eau', experience: 312},
            {id: 55, name: 'Akwakwak', type: 'eau', experience: 674},
            {id: 56, name: 'Férosinge', type: 'combat', experience: 229},
            {id: 57, name: 'Colossinge', type: 'combat', experience: 733},
            {id: 58, name: 'Caninos', type: 'feu', experience: 404},
            {id: 59, name: 'Arcanin', type: 'feu', experience: 963},
            {id: 60, name: 'Ptitard', type: 'eau', experience: 18},
            {id: 61, name: 'Têtarde', type: 'eau', experience: 227},
            {id: 62, name: 'Tartard', type: 'eau, combat', experience: 584},
            {id: 63, name: 'Abra', type: 'psy', experience: 368},
            {id: 64, name: 'Kadabra', type: 'psy', experience: 799},
            {id: 65, name: 'Alakazam', type: 'psy', experience: 1094},
            {id: 66, name: 'Machoc', type: 'combat', experience: 412},
            {id: 67, name: 'Machopeur', type: 'combat', experience: 816},
            {id: 68, name: 'Mackogneur', type: 'combat', experience: 1111},
            {id: 69, name: 'Chétiflor', type: 'plante, poison', experience: 306},
            {id: 70, name: 'Boustiflor', type: 'plante, poison', experience: 785},
            {id: 71, name: 'Empiflor', type: 'plante, poison', experience: 1022},

            {id: 94, name: 'Ectoplasma', type: 'poison, spectre', experience: 225},
            {id: 133, name: 'Evoli', type: 'normal', experience: 65},
            {id: 137, name: 'Porygon', type: 'normal', experience: 476},
            {id: 143, name: 'Ronflex', type: 'normal', experience: 895},
            {id: 149, name: 'Dracolosse', type: 'dragon, vol', experience: 1346}
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
                <a className="Pokegame-link" href="/">Commencer la partie</a>
                <Pokedex player={player1} pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex player={player2} pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        );
    }
}

export default Pokegame;
