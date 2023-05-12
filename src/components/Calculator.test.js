import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

test('renders Calculator component', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});

test('handles button click and updates state', () => {
  const { getByText } = render(<Calculator />);

  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));

  expect(getByText('15')).toBeInTheDocument();
});
