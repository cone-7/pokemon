import React from 'react';
import ShowPokemons from '../components/showPokemons.js';
import renderer from 'react-test-renderer';

test('Should render pokemons', () => {

  const pokemons = [
      {name:'ditto', img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
  ]
  const component = renderer.create(
    <ShowPokemons pokemons={pokemons}></ShowPokemons>,
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});