import React from 'react';
import { shallow } from 'enzyme';
import Test from './test';

it('test component', () => {
 expect(shallow(<Test/>).contains(<span className="test-span">test span</span>)).toBe(true);
});