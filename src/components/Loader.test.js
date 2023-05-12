import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';
import '@testing-library/jest-dom/extend-expect';

test('renders Loader component', () => {
  const { container } = render(<Loader />);
  expect(container).toMatchSnapshot();
});
