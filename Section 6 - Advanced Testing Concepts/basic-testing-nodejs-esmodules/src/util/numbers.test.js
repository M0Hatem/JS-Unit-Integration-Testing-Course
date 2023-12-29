import {it,expect} from "vitest";

import {transformToNumber} from "./numbers"

it('should return a number if numeric string in provided', () => {
    //arrange
    const stringNum = '1';
    //act
    const result = transformToNumber(stringNum)
    //assert

    expect(result).toBeTypeOf('number')
});

it('should yield NaN for non-transformable values', () => {
    const input = 'invalid'

    const result = transformToNumber(input)

    expect(result).toBeNaN()
});
it('should throw an error if no argument is passed', () => {
    const resultFn =() => transformToNumber()

    expect(resultFn).toThrow()
})