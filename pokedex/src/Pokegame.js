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
            {id: 72, name: 'Tentacool', type: 'eau, poison', experience: 56},
            {id: 73, name: 'Tentacruel', type: 'eau, poison', experience: 174},
            {id: 74, name: 'Racaillou', type: 'roche, sol', experience: 198},
            {id: 75, name: 'Gravalanch', type: 'roche, sol', experience: 674},
            {id: 76, name: 'Grolem', type: 'roche, sol', experience: 1049},
            {id: 77, name: 'Ponita', type: 'roche, sol', experience: 527},
            {id: 78, name: 'Galopa', type: 'roche, sol', experience: 852},
            {id: 79, name: 'Ramoloss', type: 'eau, psy', experience: 402},
            {id: 80, name: 'Flagadoss', type: 'eau, psy', experience: 763},
            {id: 81, name: 'Magnéti', type: 'electrik, acier', experience: 26},
            {id: 82, name: 'Magnéton', type: 'electrik, acier', experience: 108},
            {id: 83, name: 'Canarticho', type: 'normal, vol', experience: 738},
            {id: 84, name: 'Doduo', type: 'normal, vol', experience: 259},
            {id: 85, name: 'Dodrio', type: 'normal, vol', experience: 476},
            {id: 86, name: 'Otaria', type: 'eau', experience: 263},
            {id: 87, name: 'Lamantine', type: 'eau', experience: 452},
            {id: 88, name: 'Tadmorv', type: 'poison', experience: 146},
            {id: 89, name: 'Grotadmorv', type: 'poison', experience: 321},
            {id: 90, name: 'Kokiyas', type: 'eau', experience: 62},
            {id: 91, name: 'Crustabri', type: 'eau', experience: 273},
            {id: 92, name: 'Fantominus', type: 'poison, spectre', experience: 117},
            {id: 93, name: 'Spectrum', type: 'poison, spectre', experience: 368},
            {id: 94, name: 'Ectoplasma', type: 'poison, spectre', experience: 539},
            {id: 95, name: 'Onix', type: 'roche, sol', experience: 693},
            {id: 96, name: 'Soporifik', type: 'psy', experience: 49},
            {id: 97, name: 'Hypomade', type: 'psy', experience: 288},
            {id: 98, name: 'Krabby', type: 'eau', experience: 66},
            {id: 99, name: 'Krabboss', type: 'eau', experience: 203},
            {id: 100, name: 'Voltorbe', type: 'electrik', experience: 79},
            {id: 101, name: 'Electrode', type: 'electrik', experience: 157},
            {id: 102, name: 'Noeunoeuf', type: 'plante, psy', experience: 291},
            {id: 103, name: 'Noadkoko', type: 'plante, psy', experience: 698},
            {id: 104, name: 'Osselait', type: 'sol', experience: 124},
            {id: 105, name: 'Ossatueur', type: 'sol', experience: 372},
            {id: 106, name: 'Kicklee', type: 'combat', experience: 166},
            {id: 107, name: 'Tygnon', type: 'combat', experience: 183},
            {id: 108, name: 'Excelangue', type: 'normal', experience: 836},
            {id: 109, name: 'Smogo', type: 'poison', experience: 87},
            {id: 110, name: 'Smogogo', type: 'poison', experience: 275},
            {id: 111, name: 'Rhinocorne', type: 'sol, roche', experience: 472},
            {id: 112, name: 'Rhinoféros', type: 'sol, roche', experience: 841},
            {id: 113, name: 'Leveinard', type: 'normal', experience: 584},
            {id: 114, name: 'Saquedeneu', type: 'plante', experience: 613},
            {id: 115, name: 'Kangourex', type: 'normal', experience: 947},
            {id: 116, name: 'Hypotrempe', type: 'eau', experience: 32},
            {id: 117, name: 'Hypocéan', type: 'eau', experience: 186},
            {id: 118, name: 'Poissirène', type: 'eau', experience: 45},
            {id: 119, name: 'Poissoroy', type: 'eau', experience: 222},
            {id: 120, name: 'Stari', type: 'eau', experience: 107},
            {id: 121, name: 'Staross', type: 'eau, psy', experience: 314},
            {id: 122, name: 'M.Mime', type: 'psy, fée', experience: 471},
            {id: 123, name: 'Insécateur', type: 'insecte, vol', experience: 972},
            {id: 124, name: 'Lippoutou', type: 'glace, psy', experience: 512},
            {id: 125, name: 'Elektek', type: 'electrik', experience: 358},
            {id: 126, name: 'Magmar', type: 'feu', experience: 706},
            {id: 127, name: 'Scarabrute', type: 'insecte', experience: 619},
            {id: 128, name: 'Tauros', type: 'normal', experience: 1224},
            {id: 129, name: 'Magicarpe', type: 'eau', experience: 57},
            {id: 130, name: 'Léviator', type: 'eau, vol', experience: 1356},
            {id: 131, name: 'Lokhlass', type: 'eau, glace', experience: 1187},
            {id: 132, name: 'Métamorph', type: 'normal', experience: 284},
            {id: 133, name: 'Evoli', type: 'normal', experience: 65},
            {id: 134, name: 'Aquali', type: 'eau', experience: 1239},
            {id: 135, name: 'Voltali', type: 'electrik', experience: 1340},
            {id: 136, name: 'Pyrolli', type: 'feu', experience: 1179},
            {id: 137, name: 'Porygon', type: 'normal', experience: 476},
            {id: 138, name: 'Amonita', type: 'roche, eau', experience: 70},
            {id: 139, name: 'Amonistar', type: 'roche, eau', experience: 351},
            {id: 140, name: 'Kabuto', type: 'roche, eau', experience: 112},
            {id: 141, name: 'Kabutops', type: 'roche, eau', experience: 480},
            {id: 142, name: 'Ptéra', type: 'roche, vol', experience: 547},
            {id: 143, name: 'Ronflex', type: 'normal', experience: 895},
            {id: 144, name: 'Artikodin', type: 'glace, vol', experience: 2781},
            {id: 145, name: 'Electhor', type: 'electrik, vol', experience: 2843},
            {id: 146, name: 'Sulfura', type: 'feu, vol', experience: 2937},
            {id: 147, name: 'Minidraco', type: 'dragon', experience: 314},
            {id: 148, name: 'Draco', type: 'dragon', experience: 766},
            {id: 149, name: 'Dracolosse', type: 'dragon, vol', experience: 1346},
            {id: 150, name: 'Mewtwo', type: 'psy', experience: 3056},
            {id: 151, name: 'Mew', type: 'psy', experience: 3024}
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
