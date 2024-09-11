/**
 * @jest-environment node
 */
import defaultDeeplyAssignExport,
{
    deeplyAssign, deeplyAssignWith
} from '../index.js';
import testCases from '../__mocks__/testCases.js';

describe('deeplyAssign', () => {
    describe('as extension of Object prototype', () => {
        it('handles multiple object arguments', () => {
            const {
                target,
                sources,
                expected
            } = testCases.simpleCase();
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
            } = testCases.simpleCaseWithStringArgument();
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
            } = testCases.caseWithArrays();
            const result = Object.deeplyAssign(target, ...sources);

            expect(result.bar).toBe(expected.bar);
            expect(result.count).toBe(expected.count);
            expect(result.foo).toBe(expected.foo);
            expect(result.cats).toHaveLength(expected.cats.length);
        });

        it('handles objects with differing types for same properties', () => {
            const {
                target,
                sources,
                expected
            } = testCases.caseWithDifferingTypes();
            const result = Object.deeplyAssign(target, ...sources);

            expect(result.truthy).toStrictEqual(expected.truthy);
            expect(result.falsy).toBe(expected.falsy);
        });

        it('handles objects that have arrays and nested objects without mutating nested references', () => {
            const {
                target,
                sources,
                expected
            } = testCases.caseWithArraysAndNesting();
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
            } = testCases.simpleCase();
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
            } = testCases.simpleCaseWithStringArgument();
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
            } = testCases.caseWithArrays();
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
            } = testCases.caseWithArraysAndNesting();
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
