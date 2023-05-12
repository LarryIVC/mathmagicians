import calculate from './calculate';
import operate from './operate';

describe('calculate', () => {
  it('should return an object with total, next, and operation set to null when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({ total: 0, next: null, operation: null });
  });

  it('should update next when buttonName is a number', () => {
    const obj = { total: 5, next: '2', operation: '+' };
    const result = calculate(obj, '3');
    expect(result).toEqual({ total: 5, next: '23', operation: '+' });
  });

  it('should update next and clear the value when buttonName is "0" and obj.next is "0"', () => {
    const obj = { total: null, next: '0', operation: null };
    const result = calculate(obj, '0');
    expect(result).toEqual({});
  });

  it('should update next and clear the value when there is no operation', () => {
    const obj = { total: null, next: '5', operation: null };
    const result = calculate(obj, '9');
    expect(result).toEqual({ total: null, next: '59' });
  });

  it('should update next and clear the value when there is an operation', () => {
    const obj = { total: 5, next: '2', operation: '+' };
    const result = calculate(obj, '3');
    expect(result).toEqual({ total: 5, next: '23', operation: '+' });
  });

  it('should update next with decimal point when buttonName is "."', () => {
    const obj = { total: 5, next: '2', operation: '+' };
    const result = calculate(obj, '.');
    expect(result).toEqual({ total: 5, next: '2.', operation: '+' });
  });

  it('should do nothing when buttonName is "=" and there is no next or operation', () => {
    const obj = { total: null, next: null, operation: null };
    const result = calculate(obj, '=');
    expect(result).toEqual({});
  });

  it('should return the result of the operation when buttonName is "=" and there is next and operation', () => {
    operate.mockReturnValue(7); // Assuming operate function returns 7
    const obj = { total: 5, next: '2', operation: '+' };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: 7, next: null, operation: null });
    expect(operate).toHaveBeenCalledWith(5, '2', '+');
  });

  it('should negate the value of next when buttonName is "+/-" and there is next', () => {
    const obj = { total: null, next: '5', operation: null };
    const result = calculate(obj, '+/-');
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });

  it('should negate the value of total when buttonName is "+/-" and there is no next', () => {
    const obj = { total: '10', next: null, operation: null };
    const result = calculate(obj, '+/-');
    expect(result).toEqual({ total: '-10', next: null, operation: null });
  });

  // Add more test cases for the remaining scenarios
});

jest.mock('./operate'); // Mocking
