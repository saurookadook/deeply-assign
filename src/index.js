Object.prototype.deeplyAssign = (function() {
    const _this = {};

    const maxRecursiveCallDepth = 15;
    let currentRecursiveCallDepth = 0;

    _this.isObject = function isObject(val) {
        return typeof val === 'object' && val != null && !Array.isArray(val);
    };

    _this.deeplyMerge = function deeplyMerge(target, ...args) {
        currentRecursiveCallDepth = (typeof args[args.length - 1] === 'number') ? args[args.length - 1] : currentRecursiveCallDepth + 1;

        const objects = args.reduce((acc, cur) => {
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
                    if (_this.isObject(v)) {
                        if (currentRecursiveCallDepth > maxRecursiveCallDepth) {
                            throw new Error(`deeplyMerge - Max recursive call depth of ${maxRecursiveCallDepth} exceeded!`);
                        }

                        target[k] = _this.deeplyMerge(target[k] || {}, object[k]);
                        continue;
                    }

                    if (Array.isArray(v)) {
                        target[k] = target[k] ? [...target[k], ...v] : v;

                        continue;
                    }

                    target[k] = v;
                }
            }
        }

        return target;
    };

    return _this.deeplyMerge;

})();
