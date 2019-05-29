import React,{Component} from 'react';
import './App.css';
import CatchComponent from './components/catchComponent.js';
import ShowPokemons from './components/showPokemons.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      pokemons:[]
    }
  }
  
  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    });
  }

  render(){
    return (
      <div className="App">
        <CatchComponent add={this.addPokemon}></CatchComponent>
        { this.state.pokemons.length > 0 ?
           <ShowPokemons pokemons={this.state.pokemons}></ShowPokemons>
           : "No pokemon captured yet"}
      </div>
    );
  }
}

export default App;
