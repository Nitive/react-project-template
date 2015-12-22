/* eslint-disable no-unused-expressions */

require('chai').should();
import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('<App />', () => {
	it('should has div', () => {
		shallow(<App />).find('div').should.exist;
	});
});
