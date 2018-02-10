import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './ListComponent';

const obj = {
    name: "organisation",
    number: "123456789",
    www: "www.a.com",
    mail: "a@b.com",
    adress: "qwerty"
}

it('renders without crashing', () => {
    shallow(<List org={[]} />);
});

it('renders passed data', () => {
    const list = shallow(<List org={obj} />);
    const renderedResult = list.find('h3').text();
    expect(renderedResult).toBe(obj.name);
});
