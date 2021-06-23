import React from 'react';
import {Link} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Nav from './index';

Enzyme.configure({adapter: new Adapter()});

describe('<Nav />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Nav />);
	});

	it('It should render three <Link />', () => {
		expect(wrapper.find(Link)).toHaveLength(3);
	});
	it('the first link must contain the text "Food App" and lead to home', () => {
		expect(wrapper.find(Link).at(0).prop('to')).toEqual('/food/home');
        expect(wrapper.find(Link).at(0).text()).toEqual('Food App');
	});
	it('the second link must contain the text "Create New Recipe" and lead to create', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/food/create');
        expect(wrapper.find(Link).at(1).text()).toEqual('Create New Recipe');
	});
    it('the third link must contain the text "View Diets" and lead to diets-types', () => {
		expect(wrapper.find(Link).at(2).prop('to')).toEqual('/food/diets-types');
        expect(wrapper.find(Link).at(2).text()).toEqual('View Diets');
	});
});
