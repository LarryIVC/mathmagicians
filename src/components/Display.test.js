import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('renders Display component with input', () => {
  const input = {
    total: 10,
    operation: '+',
    next: 5,
  };
  const { container } = render(<Display input={input} />);
  expect(container).toMatchSnapshot();
});
