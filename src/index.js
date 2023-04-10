export function deeplyAssign(target, ...sources) {
    const _this = {};

    const maxRecursiveCallDepth = 15;
    let currentRecursiveCallDepth = 0;

    _this.isObject = function isObject(val) {
        return typeof val === 'object' && val != null && !Array.isArray(val);
    };

    _this.handleAssignment = function handleAssignment({
        targetK,
        objectK,
        valueK
    }) {
        if (_this.isObject(valueK)) {
            if (currentRecursiveCallDepth > maxRecursiveCallDepth) {
                throw new Error(`deeplyMerge - Max recursive call depth of ${maxRecursiveCallDepth} exceeded!`);
            }

            return _this.deeplyMerge(targetK || {}, objectK);
        }

        if (Array.isArray(valueK)) {
            return targetK ? [...targetK, ...valueK] : [...valueK];
        }

        return valueK;
    };

    _this.deeplyMerge = function deeplyMerge(target, ...sources) {
        currentRecursiveCallDepth = (typeof sources[sources.length - 1] === 'number') ? sources[sources.length - 1] : currentRecursiveCallDepth + 1;

        const objects = sources.reduce((acc, cur) => {
            if (!_this.isObject(cur)) {
                console.warn(`argument ${cur} excluded, as it is not an Object`);
            } else {
                acc.push(cur);
            }
            return acc;
        }, []);

        if (objects.length > 0) {
            for (const object of objects) {
                for (const [k, v] of Object.entries(object)) {
                    target[k] = _this.handleAssignment({
                        targetK: target[k],
                        objectK: object[k],
                        valueK: v
                    });
                    // if (_this.isObject(v)) {
                    //     if (currentRecursiveCallDepth > maxRecursiveCallDepth) {
                    //         throw new Error(`deeplyMerge - Max recursive call depth of ${maxRecursiveCallDepth} exceeded!`);
                    //     }

                    //     target[k] = _this.deeplyMerge(target[k] || {}, object[k]);
                    //     continue;
                    // }

                    // if (Array.isArray(v)) {
                    //     target[k] = target[k] ? [...target[k], ...v] : v;
                    //     continue;
                    // }

                    // target[k] = v;
                }
            }
        }

        return target;
    };

    return _this.deeplyMerge(target, ...sources);
}

export function deeplyAssignWith(target, sources, callback) {
    const _this = {};

    const maxRecursiveCallDepth = 15;
    let currentRecursiveCallDepth = 0;

    _this.isObject = function isObject(val) {
        return typeof val === 'object' && val != null && !Array.isArray(val);
    };

    _this.handleAssignment = function handleAssignment({
        targetK,
        objectK,
        valueK
    }) {
        if (_this.isObject(valueK)) {
            if (currentRecursiveCallDepth > maxRecursiveCallDepth) {
                throw new Error(`deeplyMerge - Max recursive call depth of ${maxRecursiveCallDepth} exceeded!`);
            }

            return _this.deeplyMerge(targetK || {}, objectK);
        }

        if (Array.isArray(valueK)) {
            return targetK ? [...targetK, ...valueK] : valueK;
        }

        return valueK;
    };

    _this.deeplyMerge = function deeplyMerge(target, ...sources) {
        currentRecursiveCallDepth = (typeof sources[sources.length - 1] === 'number') ? sources[sources.length - 1] : currentRecursiveCallDepth + 1;

        const objects = sources.reduce((acc, cur) => {
            if (!_this.isObject(cur)) {
                console.warn(`argument ${cur} excluded, as it is not an Object`);
            } else {
                acc.push(cur);
            }
            return acc;
        }, []);

        if (objects.length > 0) {
            for (const object of objects) {
                for (const [k, v] of Object.entries(object)) {
                    target[k] = _this.handleAssignment({
                        targetK: target[k],
                        objectK: object[k],
                        valueK: v
                    });
                    // if (_this.isObject(v)) {
                    //     if (currentRecursiveCallDepth > maxRecursiveCallDepth) {
                    //         throw new Error(`deeplyMerge - Max recursive call depth of ${maxRecursiveCallDepth} exceeded!`);
                    //     }

                    //     target[k] = _this.deeplyMerge(target[k] || {}, object[k]);
                    //     continue;
                    // }

                    // if (Array.isArray(v)) {
                    //     target[k] = target[k] ? [...target[k], ...v] : v;
                    //     continue;
                    // }

                    // target[k] = v;
                }
            }
        }

        return target;
    };

    return _this.deeplyMerge(target, sources);
}

export default (function() {
    if (typeof Object.prototype.deeplyAssign !== 'function') {
        Object.prototype.deeplyAssign = deeplyAssign;
    }

    if (typeof Object.prototype.deeplyAssignWith !== 'function') {
        Object.prototype.deeplyAssignWith = deeplyAssignWith;
    }

    return {
        deeplyAssign,
        deeplyAssignWith
    };
})();
