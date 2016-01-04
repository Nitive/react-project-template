require('chai').should();
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import styles from './styles.css';

let header;

describe('<Header />', () => {
	before(() => {
		header = shallow(<Header />).find(`.${styles.header}`);
	});

	it('should has .header', () => {
		header.should.have.length(1);
	});

	it('should have links', () => {
		header.contains('</a>').should.be.true;
	});
});
