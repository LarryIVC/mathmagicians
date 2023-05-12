import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Key from './Key';

describe('Key component', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Key manageClick={() => {}}>Button Text</Key>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should have the correct CSS class when data is an operator', () => {
    const { getByText } = render(
      <Key manageClick={() => {}}>+</Key>,
    );
    const button = getByText('+');
    expect(button).toHaveClass('key orange');
  });

  it('should have the default CSS class when data is not an operator', () => {
    const { getByText } = render(
      <Key manageClick={() => {}}>5</Key>,
    );
    const button = getByText('5');
    expect(button).toHaveClass('key');
  });

  it('should call manageClick when clicked', () => {
    const mockManageClick = jest.fn();
    const { getByText } = render(
      <Key manageClick={mockManageClick}>Button Text</Key>,
    );
    const button = getByText('Button Text');
    fireEvent.click(button);
    expect(mockManageClick).toHaveBeenCalled();
  });
});
