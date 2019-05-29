import React, {Component} from 'react';
import './styles.css';

class ShowPokemons extends Component{

    generatePokemons(){
        return this.props.pokemons.map((pokemon, index) => {
            return <div key={index} className="pokemon-card">
                <span>{pokemon.name}</span>
                <img src={pokemon.img} alt=""></img>
            </div>
        })
    }

    render(){
        return <div>
                {this.generatePokemons()}
            </div>
    }

}

export default ShowPokemons;