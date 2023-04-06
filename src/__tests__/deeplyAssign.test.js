/**
 * @jest-environment node
 */

// import { describe, expect, it } from 'jest';
import * as deeplyAssign from '../index.js';
import testCases from '../__mocks__/index.js'

describe('deeplyAssign', () => {
    const { simpleCase, simpleCaseWithSkippableArgs, caseWithArrays, caseWithArraysAndNesting } = testCases;

    it('handles a simple case', () => {
        const { target, args, expected } = simpleCase;
        const result = Object.deeplyAssign(target, ...args);

        expect(expected.bar).toBe('baz');
        expect(expected.count).toBe(3);
        expect(expected.foo).toBe('bar');
    })
});
