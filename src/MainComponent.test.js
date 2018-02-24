import React from 'react';
import { shallow, mount } from 'enzyme';

import Main from './MainComponent';
import Search from './SearchComponent';
import List from './ListComponent';

it('renders Main component', () => {
    shallow(<Main />);
});
   
it('includes Search component', () => {
    const app = shallow(<Main />);
    expect(app.containsMatchingElement(<Search />)).toEqual(true);
});

it('includes List component', () => {
    const app = shallow(<Main />);
    const org = [{
        "name":"STOWARZYSZENIE ŁÓDZKIE DZIEWUCHY DZIEWUCHOM","number":"0000714072","www":"","mail":"LODZKIEDZIEWUCHY@GMAIL.COM","adress":"ul. ZIEMOWITA, nr 6, lok. 20, miejsc. ŁÓDŹ, kod 92-413, poczta ŁÓDŹ, kraj POLSKA","id":"714072"}];
    app.setProps({ org });
    expect(app.containsMatchingElement(<List />)).toEqual(true);
});
