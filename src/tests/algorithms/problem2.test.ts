import { solveProblem2 } from '../../algorithms/problem2';

describe('Problem 2 Tests', () => {
    test('Test Case 1', () => {
        expect(solveProblem2(input1)).toEqual(expectedOutput1);
    });

    test('Test Case 2', () => {
        expect(solveProblem2(input2)).toEqual(expectedOutput2);
    });

    // Add more test cases as needed
});