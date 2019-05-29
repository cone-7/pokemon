import React from 'react';
import CatchComponent from '../components/catchComponent.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

global.fetch = function(){
    return Promise.resolve({json: () => {
            return {
                name: 'ditto',
                sprites: {front_default:'img'
            }
        }}
    });
  }

test('Should render catchPokemons', () => {

  const component = renderer.create(
    <CatchComponent add={() => true}></CatchComponent>,
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

configure({ adapter: new Adapter() });
test('Should click catch', () => {

    const mockCallBack = jest.fn();
    
    const component = shallow(<CatchComponent add={mockCallBack}></CatchComponent>);
    component.setState({pokemon: 'ditto'});
    component.find('#but').simulate('click');
    
    expect(mockCallBack.mock.calls);
  });
