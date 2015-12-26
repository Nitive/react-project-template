require('chai').should();
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
	it('should has header', () => {
		shallow(<Header />).find('header').should.have.length(1);
	});
});
