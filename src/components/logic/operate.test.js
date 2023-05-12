// import Big from 'big.js';
import operate from './operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const result = operate('5', '2', '+');
    expect(result).toBe('7');
  });

  it('should perform subtraction correctly', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  it('should perform multiplication correctly', () => {
    const result = operate('5', '2', 'x');
    expect(result).toBe('10');
  });

  it('should perform division correctly', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  it('should handle division by zero', () => {
    const result = operate('6', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should perform modulo correctly', () => {
    const result = operate('7', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo with divisor zero', () => {
    const result = operate('7', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('5', '2', '^')).toThrow("Unknown operation '^'");
  });
});
