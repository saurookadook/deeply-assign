export default {
    simpleCase: {
        target: {},
        args: [
            { foo: 'bar' },
            {
                bar: 'baz', count: 3 
            }
        ],
        expected: {
            foo: 'bar', bar: 'baz', count: 3 
        }
    },
    simpleCaseWithStringArgument: {
        target: {},
        args: [
            'not an object',
            {
                bar: 'baz', count: 3 
            }
        ],
        expected: {
            bar: 'baz', count: 3 
        }
    },
    caseWithArrays: {
        target: {
            bar: '', count: 1 
        },
        args: [
            {
                foo: 'bar', cats: [{
                    name: 'Buddy', age: 6 
                }] 
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
    },
    caseWithArraysAndNesting: {
        target: {
            config: {
                a: 'bb', c: 'ab', z: true, config: {
                    _a: 'bb', _c: 'ab' 
                } 
            },
            cats: [{
                name: 'Buddy', age: 6 
            }]
        },
        args: [
            {
                config: {
                    a: 'm', c: 'i', z: false, config: {
                        cats: [{
                            name: 'Grumpy', age: 100 
                        }] 
                    } 
                } 
            },
            {
                config: {
                    config: {
                        _a: 'n', _b: 'on', _c: 'pp' 
                    }, cats: [{
                        name: 'Justabby', age: 1 
                    }] 
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
    },
    // {
    //     target: {},
    //     args: [
    //         { foo: 'bar' },
    //         { bar: 'baz', count: 3 }
    //     ],
    //     expected: { }
    // },
};
