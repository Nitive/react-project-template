/* eslint-disable no-unused-expressions */

require('chai').should();
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
	it('should do something', () => {
		shallow(<Header />).find('.header').should.have.length(1);
	});
});
