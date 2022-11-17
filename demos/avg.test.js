import {avg} from './avg.js'

describe('Testing the avg function', () => {
    it('Should return 1 for input array [1,1]', () => {
        expect(avg([1,1])).toEqual(1);
        expect(avg([1,1])).toBe(1);
    })

    it('Should return NaN for input array []', () => {
        expect(avg([])).toBeNaN();
        expect(avg([])).toBe(NaN);
    })

    it('Should return a positive number for array with all positive numbers', () => {
        expect(avg([0,1])).toBeGreaterThanOrEqual(0);
        expect(avg([0,1, 3, 44])).toBeGreaterThanOrEqual(0);
        expect(avg([1, 3, 44])).toBeGreaterThanOrEqual(0);
        expect(avg([1])).toBeGreaterThanOrEqual(0);
        expect(avg([7,7,7,8])).toBePositive();
    })

    it('Should not return -1 for input array [1,2,3]', () => {
        expect(avg([1,2,3])).not.toEqual(-1);
    })

    // it.todo('Should not return undefined for input array []')
    it('Should not return undefined for input array []', () => {
        expect(avg([])).not.toBeUndefined()
        expect(avg([])).toBeDefined()
    })
    // it.todo('Should not return a positive number for array with all negative numbers')
    it('Should not return a positive number for array with all negative numbers', () => {
        expect(avg([-1,-2,-3])).not.toBePositive()
        expect(avg([-8687671,-313122,-2223])).not.toBeGreaterThanOrEqual(0)
        expect(avg([-0.000000000002])).not.toBePositive()
    })
})