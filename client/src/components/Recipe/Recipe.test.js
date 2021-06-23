import React from 'react';
import { Link } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Recipe from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Recipe />', () => {
    let wrapper;
    let title = "milanesas";
    let id = 1;
    let score = 90;
    let healthScore = 80;
    beforeEach(() => {
        wrapper = shallow(<Recipe id={id} title={title} score={score} healthScore={healthScore} />);
    })

    it('It should render three <Link />', () => {
        expect(wrapper.find(Link)).toHaveLength(2);
    });
    it('The title link must render to the path with the id passed by props', () => {
        expect(wrapper.find(Link).at(0).prop('to')).toEqual(`/food/recipe/1`);
    });
    it('Should show an <h1> with the title passed by props', () => {
        expect(wrapper.contains(<h1>{title}</h1>)).toEqual(true);
    });
    it('The diets link should render to the diets types path', () => {
        expect(wrapper.find(Link).at(1).prop('to')).toEqual(`/food/diets-types`);
    });
    it('Should show an <li> with the score and health score passed by props', () => {
        expect(wrapper.contains(<li>Score: {score}</li>)).toEqual(true);
        expect(wrapper.contains(<li>Health Score: {healthScore}</li>)).toEqual(true);
    });

});