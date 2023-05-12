import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from './Quote';

describe('Test suite for the Quote component', () => {
  let myQuote;
  beforeEach(async () => {
    render(<Quote />);
    await waitFor(() => {
      myQuote = screen.getByTestId('quote');
    }, { timer: 3000 });
  });

  it('Should test if Quote component is inside the document', () => {
    expect(myQuote).toBeInTheDocument();
  });

  it('Should render a snapshot of the Quote component', () => {
    expect(myQuote).toMatchSnapshot();
  });
});
