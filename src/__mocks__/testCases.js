export default {
    simpleCase: () => {
        return {
            target: {},
            sources: [
                {
                    foo: 'bar'
                },
                {
                    bar: 'baz', count: 3
                }
            ],
            expected: {
                foo: 'bar', bar: 'baz', count: 3
            }
        };
    },
    simpleCaseWithStringArgument: () => {
        return {
            target: {},
            sources: [
                'not an object',
                {
                    bar: 'baz', count: 3
                }
            ],
            expected: {
                bar: 'baz', count: 3
            }
        };
    },
    caseWithArrays: () => {
        return {
            target: {
                bar: '', count: 1
            },
            sources: [
                {
                    foo: 'bar', cats: [
                        {
                            name: 'Buddy', age: 6
                        }
                    ]
                },
                {
                    bar: 'baz', count: 3
                },
                {
                    cats: [{
                        name: 'Gordo', age: 8
                    }, {
                        name: 'Zero', age: 8
                    }], foo: 'meow'
                },
                {
                    count: 6, bar: 'woof'
                }
            ],
            expected: {
                foo: 'meow',
                cats: [
                    {
                        name: 'Buddy', age: 6
                    },
                    {
                        name: 'Gordo', age: 8
                    },
                    {
                        name: 'Zero', age: 8
                    }
                ],
                count: 6,
                bar: 'woof'
            }
        };
    },
    caseWithArraysAndNesting: () => {
        return {
            target: {
                config: {
                    a: 'bb',
                    c: 'ab',
                    z: true,
                    config: {
                        _a: 'bb',
                        _c: 'ab'
                    }
                },
                cats: [{
                    name: 'Buddy', age: 6
                }]
            },
            sources: [
                {
                    config: {
                        a: 'm',
                        c: 'i',
                        z: false,
                        config: {
                            cats: [{
                                name: 'Grumpy', age: 100
                            }]
                        }
                    }
                },
                {
                    config: {
                        config: {
                            _a: 'n',
                            _b: 'on',
                            _c: 'pp',
                            cats: [{
                                name: 'Justabby', age: 1
                            }]
                        },
                    },
                    cats: [{
                        name: 'Gordo', age: 8
                    }, {
                        name: 'Zero', age: 8
                    }]
                }
            ],
            expected: {
                config: {
                    a: 'm',
                    c: 'i',
                    z: false,
                    config: {
                        _a: 'n',
                        _b: 'on',
                        _c: 'pp',
                        cats: [
                            {
                                name: 'Grumpy', age: 100
                            },
                            {
                                name: 'Justabby', age: 1
                            }
                        ]
                    }
                },
                cats: [
                    {
                        name: 'Buddy', age: 6
                    },
                    {
                        name: 'Gordo', age: 8
                    },
                    {
                        name: 'Zero', age: 8
                    }
                ]
            }
        };
    },
    // {
    //     target: {},
    //     sources: [
    //         { foo: 'bar' },
    //         { bar: 'baz', count: 3 }
    //     ],
    //     expected: { }
    // },
};
