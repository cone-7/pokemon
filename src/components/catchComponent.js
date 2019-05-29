import React, {Component} from 'react';

class CatchComponent extends Component{

    constructor(props){
        super(props)
        this.setState({pokemon:[]})
        this.handleInput = this.handleInput.bind(this);
        this.catch = this.catch.bind(this);
    }

    handleInput(evnt){
        this.setState({
            pokemon: evnt.target.value
        })
    }

    catch(){
        if(this.state && this.state.pokemon){
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}/`)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    this.props.add( { 
                        name: res.name, 
                        img: res.sprites.front_default
                    })
                })
        }
    }

    render(){
        return <div>
                <input type="text" onChange={this.handleInput}></input>
                <button id="but" onClick={this.catch}> Catch!!</button>
            </div>
    }

}

export default CatchComponent;