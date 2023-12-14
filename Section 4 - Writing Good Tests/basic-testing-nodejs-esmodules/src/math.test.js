import {it,expect} from 'vitest'

import { add } from './math'
it('should summarize all the numbers on the array',
    () => {
    //arrange
    const numbers = [1,2,3]

    //act
    const result = add(numbers)
    //assert
    const expectedResult = numbers.reduce((previousValue,currentValue)=>previousValue+currentValue,0)
    expect(result).toBe(expectedResult)
    })
it('should yield NaN if at least one invalid number is provided', () => {
    //arrange
    const numbers = ['invalid',1]
    //act
    const result = add(numbers)
    //assert
    expect(result).toBeNaN();
});

it('should yield to a correct sum of an array if provide numeric string values', () => {
    //arrange
    const numbers = ['1','2']
    //act
    const result = add(numbers)
    //assert
    const expectedResult = numbers.reduce((previousValue,currentValue)=>+previousValue+ +currentValue,0)
    expect(result).toBe(expectedResult)
});

it('should yield 0 if empty array is provided', () => {
    const numbers = [];

    const result = add([])

    expect(result).toBe(0)
});

it('should throw an error if not argument are passed', () => {
    const resultFn = ()=>{
        add();
    }
    expect(resultFn).toThrow(/numbers is not iterable/)
});