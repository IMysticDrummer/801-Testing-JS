import { avg, stdDev } from './statistics.js';
import * as statistics from './statistics.js';

describe('Testing the avg function', () => {
  it('Should return 1 for input array [1,1]', () => {
    expect(avg([1, 1])).toEqual(1);
    expect(avg([1, 1])).toBe(1);
  });

  it('Should return NaN for input array []', () => {
    expect(avg([])).toBeNaN();
    expect(avg([])).toBe(NaN);
  });

  it('Should return a positive number for array with all positive numbers', () => {
    expect(avg([0, 1])).toBeGreaterThanOrEqual(0);
    expect(avg([0, 1, 3, 44])).toBeGreaterThanOrEqual(0);
    expect(avg([1, 3, 44])).toBeGreaterThanOrEqual(0);
    expect(avg([1])).toBeGreaterThanOrEqual(0);
    expect(avg([7, 7, 7, 8])).toBePositive();
  });

  it('Should not return -1 for input array [1,2,3]', () => {
    expect(avg([1, 2, 3])).not.toEqual(-1);
  });

  // it.todo('Should not return undefined for input array []')
  it('Should not return undefined for input array []', () => {
    expect(avg([])).not.toBeUndefined();
    expect(avg([])).toBeDefined();
  });
  // it.todo('Should not return a positive number for array with all negative numbers')
  it('Should not return a positive number for array with all negative numbers', () => {
    expect(avg([-1, -2, -3])).not.toBePositive();
    expect(avg([-8687671, -313122, -2223])).not.toBeGreaterThanOrEqual(0);
    expect(avg([-0.000000000002])).not.toBePositive();
  });
});

describe('Testing the stdDev function', () => {
  it('Should return 0 for a constant array', () => {
    expect(stdDev([3, 3, 3, 3])).toEqual(0);
  });

  it('Should return something like 0.81649 for [1,2,3]', () => {
    expect(stdDev([1, 2, 3])).toBeCloseTo(0.81649, 4);
  });

  // it.todo('Should not return a negative value for any input array')
  it('Should not return a negative value for any input array', () => {
    expect(stdDev([1, 2, 3])).not.toBeNegative();
    expect(stdDev([-1, -2, 3])).not.toBeNegative();
    expect(stdDev([0, 0])).not.toBeNegative();
  });

  // NO PODEMOS HACERLO ASÍ!! TENEMOS QUE REFACTORIZAR
  it.skip('Should call avg function', () => {
    const spy = jest.spyOn(statistics, 'avg');
    const result = statistics.stdDev([0, 1, 2]);

    expect(spy).toHaveBeenCalled();
  });
});

it.skip('Prueba random de suma de flotantes', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
it('Prueba random de division por zero', () => {
  expect(3 / 0).not.toBeFinite();
  expect(4 / 0).toEqual(Infinity);
});
