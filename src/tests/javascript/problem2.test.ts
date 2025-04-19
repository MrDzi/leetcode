import { solveProblem2 } from '../../javascript/problem2';

describe('Problem 2 Tests', () => {
    test('Test Case 1', () => {
        expect(solveProblem2(input1)).toEqual(expectedOutput1);
    });

    test('Test Case 2', () => {
        expect(solveProblem2(input2)).toEqual(expectedOutput2);
    });

    test('Test Case 3', () => {
        expect(solveProblem2(input3)).toEqual(expectedOutput3);
    });
});