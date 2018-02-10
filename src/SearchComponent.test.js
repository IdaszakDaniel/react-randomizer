import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './SearchComponent';

it('renders without crashing', () => {
    shallow(<Search />);
});

it('renders passed data', () => {
    const search = shallow(<Search />);
    expect(search.containsMatchingElement(<input />)).toEqual(true);
});

xit('filters data', () => {
    const search = shallow(<Search />);
  
    search.find('input').simulate('change',{
        target: { value: 'abc' }
    })
  
  })
