/* Return a sorted list of the names of every method in an object.
 *
 * |Name  |Type  |Desc                    |
 * |------|------|------------------------|
 * |obj   |object|Object to check         |
 * |return|array |Function names in object|
 */

/* example
 * methods(console); // -> ['Console', 'assert', 'dir', ...]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function methods(obj: any): string[];
 */

_('isFn');

exports = function(obj) {
    var ret = [];

    for (var key in obj) {
        if (isFn(obj[key])) ret.push(key);
    }

    return ret.sort();
};
