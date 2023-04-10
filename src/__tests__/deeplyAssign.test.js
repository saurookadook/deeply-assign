/**
 * @jest-environment node
 */
// import {
//     deeplyAssign,
//     deeplyAssignWith
// } from '../index.js';
import defaultDeeplyAssignExport,
{
    deeplyAssign, deeplyAssignWith
} from '../index.js';
import testCases from '../__mocks__/testCases.js';
import { debugLogger } from '../../test-utils/index.js';

describe('deeplyAssign', () => {
    const {
        simpleCase,
        simpleCaseWithStringArgument,
        caseWithArrays,
        caseWithArraysAndNesting
    } = testCases;

    describe('as extension of Object prototype', () => {
        it('handles multiple object arguments', () => {
            const {
                target,
                sources,
                expected
            } = simpleCase();
            const result = Object.deeplyAssign(target, ...sources);

            expect(result.bar).toBe(expected.bar);
            expect(result.count).toBe(expected.count);
            expect(result.foo).toBe(expected.foo);
        });

        it('gracefully handles string arguments', () => {
            const warnSpy = jest.spyOn(console, 'warn');
            const {
                target,
                sources,
                expected
            } = simpleCaseWithStringArgument();
            const result = Object.deeplyAssign(target, ...sources);

            expect(warnSpy).toHaveBeenCalled();
            expect(result.bar).toBe(expected.bar);
            expect(result.count).toBe(expected.count);
        });

        it('handles objects that have arrays', () => {
            const {
                target,
                sources,
                expected
            } = caseWithArrays();
            const result = Object.deeplyAssign(target, ...sources);

            expect(result.bar).toBe(expected.bar);
            expect(result.count).toBe(expected.count);
            expect(result.foo).toBe(expected.foo);
            expect(result.cats).toHaveLength(expected.cats.length);
        });

        it('handles objects that have arrays and nested objects without mutating nested references', () => {
            const {
                target,
                sources,
                expected
            } = caseWithArraysAndNesting();
            const result = Object.deeplyAssign(target, ...sources);

            expect(result.cats).toHaveLength(expected.cats.length);
            expect(result.config.a).toBe(expected.config.a);
            expect(result.config.c).toBe(expected.config.c);
            expect(result.config.z).toBe(expected.config.z);
            expect(result.config.config._a).toBe(expected.config.config._a);
            expect(result.config.config._b).toBe(expected.config.config._b);
            expect(result.config.config._c).toBe(expected.config.config._c);
            expect(result.config.config.cats).toHaveLength(expected.config.config.cats.length);
        });
    });

    describe('as individual functions', () => {
        it('handles multiple object arguments', () => {
            const {
                target,
                sources,
                expected
            } = simpleCase();
            const result = deeplyAssign(target, ...sources);

            expect(result.bar).toBe(expected.bar);
            expect(result.count).toBe(expected.count);
            expect(result.foo).toBe(expected.foo);
        });

        it('gracefully handles string arguments', () => {
            const warnSpy = jest.spyOn(console, 'warn');
            const {
                target,
                sources,
                expected
            } = simpleCaseWithStringArgument();
            const result = deeplyAssign(target, ...sources);

            expect(warnSpy).toHaveBeenCalled();
            expect(result.bar).toBe(expected.bar);
            expect(result.count).toBe(expected.count);
        });

        it('handles objects that have arrays', () => {
            const {
                target,
                sources,
                expected
            } = caseWithArrays();
            const result = deeplyAssign(target, ...sources);

            expect(result.bar).toBe(expected.bar);
            expect(result.count).toBe(expected.count);
            expect(result.foo).toBe(expected.foo);
            expect(result.cats).toHaveLength(expected.cats.length);
        });

        it('handles objects that have arrays and nested objects without mutating original nested references', () => {
            const {
                target,
                sources,
                expected
            } = caseWithArraysAndNesting();
            const result = deeplyAssign(target, ...sources);

            expect(result.cats).toHaveLength(expected.cats.length);
            expect(result.config.a).toBe(expected.config.a);
            expect(result.config.c).toBe(expected.config.c);
            expect(result.config.z).toBe(expected.config.z);
            expect(result.config.config._a).toBe(expected.config.config._a);
            expect(result.config.config._b).toBe(expected.config.config._b);
            expect(result.config.config._c).toBe(expected.config.config._c);
            expect(result.config.config.cats).toHaveLength(expected.config.config.cats.length);
        });
    });
});
