import React, { Component } from 'react';
import "./Pokedex.css";
import Pokecard from './Pokecard';

class Pokedex extends Component {

    render(){
        let title;
        if(this.props.isWinner){
            title=<h3 className="Pokedex-winner">Joueur gagnant!</h3>
        } else {
            title=<h3 className="Pokedex-loser">Joueur perdant!</h3>
        }
        return(
            <div className="Pokedex">
                <h3 className="Pokedex-title">Le joueur {this.props.player} totalise : {this.props.exp} points! </h3>
                {title}
                <div className="Pokedex-card">
                {this.props.pokemon.map ((poke) =>(
                    <Pokecard id={poke.id} name= {poke.name} type= {poke.type} experience= {poke.experience} />
                ))}
                </div>
            </div>
        );
    }
}

export default Pokedex; 
