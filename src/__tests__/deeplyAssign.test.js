/**
 * @jest-environment node
 */
import * as deeplyAssign from '../index.js';
import testCases from '../__mocks__/index.js';

describe('deeplyAssign', () => {
    const {
        simpleCase,
        simpleCaseWithStringArgument,
        caseWithArrays,
        caseWithArraysAndNesting
    } = testCases;

    it('handles multiple object arguments', () => {
        const {
            target, args, expected
        } = simpleCase;
        const result = Object.deeplyAssign(target, ...args);

        expect(result.bar).toBe(expected.bar);
        expect(result.count).toBe(expected.count);
        expect(result.foo).toBe(expected.foo);
    });

    it('gracefully handles string arguments', () => {
        const warnSpy = jest.spyOn(console, 'warn');
        const {
            target, args, expected
        } = simpleCaseWithStringArgument;
        const result = Object.deeplyAssign(target, ...args);

        expect(warnSpy).toHaveBeenCalled();
        expect(result.bar).toBe(expected.bar);
        expect(result.count).toBe(expected.count);
    });
});
