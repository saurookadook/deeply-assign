# deeply-assign

Flexible and lightweight implementations of methods like [merge](https://lodash.com/docs/4.17.15#merge) and [mergeWith](https://lodash.com/docs/4.17.15#mergeWith) from [lodash](https://lodash.com/).

## Installation

_TODO_ 😬

## Usage

### `deeplyAssign`

```JavaScript
import { deeplyAssign } from 'deeply-assign';
// simple case
const simpleData = { count: 1 };
const simpleSourceOne = { foo: 'bar' };
const simpleSourceTwo = { bar: 'baz', count: 3 };

const simpleResult = deeplyAssign(simpleData, sourceOne, )
console.log(JSON.stringify(simpleResult, null, 4));
// { foo: 'bar', bar: 'baz', count: 3 }

// complex case
const complexData = {
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
};

const complexSourceOne = {
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
};

const complexSourceTwo = {
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
};

const complexResult = deeplyAssign(complexData, complexSourceOne, complexSourceTwo);
console.log(JSON.stringify(complexResult, null, 4));
// {
//     config: {
//         a: 'm',
//         c: 'i',
//         z: false,
//         config: {
//             _a: 'n',
//             _b: 'on',
//             _c: 'pp',
//             cats: [
//                 {
//                     name: 'Grumpy', age: 100
//                 },
//                 {
//                     name: 'Justabby', age: 1
//                 }
//             ]
//         }
//     },
//     cats: [
//         {
//             name: 'Buddy', age: 6
//         },
//         {
//             name: 'Gordo', age: 8
//         },
//         {
//             name: 'Zero', age: 8
//         }
//     ]
// }
```

## Development

After cloning the repository, package can be built Parcel using:

```sh
$ yarn build
```

### Testing

Jest is used for tests and test runner. The test suite can be run with:

```sh
$ yarn test
```
