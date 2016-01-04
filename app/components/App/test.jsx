require('chai').should();
import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import styles from './styles.css';

describe('<App />', () => {
	it('should has .app', () => {
		shallow(<App />).find(`.${styles.app}`).should.exist;
	});
});
