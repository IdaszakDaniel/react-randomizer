import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import List from './ListComponent';
import Search from './App';

it('renders App component', () => {
 shallow(<App />);
});

xit('includes Search component', () => {
  const app = mount(<App />);
  expect(app.containsMatchingElement(<Search />)).toEqual(true);
});

xit('includes List component', () => {
  const app = mount(<App />);
  expect(app.containsMatchingElement(<List />)).toEqual(true);
});

