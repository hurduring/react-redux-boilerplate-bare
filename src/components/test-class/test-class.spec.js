import React from 'react';
import { shallow } from 'enzyme';
import TestClass from './test-class';

it('test component', () => {
 expect(shallow(<TestClass/>).contains(<span className="test-span">test span</span>)).toBe(true);
});