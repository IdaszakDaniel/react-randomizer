import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Main from './MainComponent';
import Search from './SearchComponent';
import Single from './SingleComponent';
import NotFound from './NotFoundComponent';
import { MemoryRouter } from 'react-router'

it('renders App component', () => {
 shallow(<App />);
});

it('includes Search component', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Search />)).toEqual(true);
});

it('404 path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(NotFound)).toHaveLength(1);
});

it('includes Main component', () => {
  const app = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(app.containsMatchingElement(<Main />)).toEqual(true);
});


