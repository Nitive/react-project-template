/* eslint-disable no-unused-expressions */

require('chai').should();
import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('<App />', () => {
	it('should do something', () => {
		shallow(<App />).find('.header').should.have.length(1);
	});
});
