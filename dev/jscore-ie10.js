/* jsCore JavaScript library v0.8.0 IE10+
 * © 2014 Dmitry Korobkin
 * Released under the MIT license
 * github.com/Octane/jsCore
 */
new function () {'use strict';

//IE9-11 Object.create bug fix
//webreflection.blogspot.com/2014/04/all-ie-objects-are-broken.html
(function () {
    var object = Object.create({});
    object[0] = null;
    return object.hasOwnProperty(0); //→ false in IE9-11
}()) || new function () {
    var create = Object.create;
    Object.create = function (prototype, properties) {
        var object = create(prototype, properties);
        if (!Object.hasOwnProperty.call(object, 0)) {
            //a numeric key fixes the bug,
            //it can be removed after,
            //unlike the alphabetic key
            Object.defineProperty(object, 0, {
                configurable: true
            });
            delete object[0];
        }
        return object;
    };
};

//using Object.keys: goo.gl/0QNMDz
//several sources: twitter.com/rwaldron/status/454114058640183296
//people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
if (!Object.assign) {
    Object.assign = function (target) {
        Array.prototype.slice.call(arguments, 1).forEach(function (source) {
            if (source) {
                Object.keys(source).forEach(function (key) {
                    target[key] = source[key];
                });
            }
        });
        return target;
    };
}

if (!Object.is) {
    Object.is = function (value1, value2) {
        if (0 === value1 && 0 === value2) {
            return 1 / value1 === 1 / value2;
        }
        if (value1 !== value1) {
            return value2 !== value2;
        }
        return value1 === value2;
    };
}

//IE10+
if (!Object.setPrototypeOf) {
    Object.setPrototypeOf = function (object, prototype) {
        object.__proto__ = prototype;
        return object;
    };
}

//bugs.ecmascript.org/show_bug.cgi?id=2435
if (!Array.from) {
    Array.from = function (iterable, func, boundThis) {
        if (func) {
            return Array.map(iterable, func, boundThis);
        }
        return Array.slice(iterable, 0);
    };
}

if (!Array.of) {
    Array.of = function () {
        return Array.from(arguments);
    };
}

if (!Array.prototype.find) {
    Array.prototype.find = function (func, boundThis) {
        var value,
            length = this.length,
            i = 0;
        while (i < length) {
            value = this[i];
            if (func.call(boundThis, value, i, this)) {
                return value;
            }
            i++;
        }
        return undefined;
    };
}

if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (func, boundThis) {
        var value,
            length = this.length,
            i = 0;
        while (i < length) {
            value = this[i];
            if (func.call(boundThis, value, i, this)) {
                return i;
            }
            i++;
        }
        return -1;
    };
}

if (!Array.prototype.fill) {
    Array.prototype.fill = function (value, start, end) {
        var length = this.length,
            i;
        start = Number(start) || 0;
        if (2 in arguments) {
            end = Number(end) || 0;
        }
        else {
            end = length;
        }
        i = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
        end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
        while (i < end) {
            this[i] = value;
            i++;
        }
        return this;
    };
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function (anything, position) {
        var length = this.length,
            i;
        if (!length) {
            return false;
        }
        if (Number.isNaN(anything)) {
            if (1 in arguments) {
                position = Number(position) || 0;
                if (position < 0) {
                    i = Math.max(length + position, 0);
                } else {
                    i = position;
                }
            } else {
                i = 0;
            }
            while (i < length) {
                if (i in this && Number.isNaN(this[i])) {
                    return true;
                }
                i++;
            }
            return false;
        }
        return -1 != Array.prototype.indexOf.call(this, anything, position);
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (string, position) {
        if (!position) {
            position = 0;
        }
        return this.indexOf(string, position) == position;
    };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (string, position) {
        var lastIndex;
        position = position || this.length;
        position = position - string.length;
        lastIndex = this.lastIndexOf(string);
        return -1 != lastIndex && lastIndex == position;
    };
}

if (!String.prototype.includes) {
    String.prototype.includes = function (string, position) {
        return -1 != this.indexOf(string, position || 0);
    };
}

if (!String.prototype.repeat) {
    String.prototype.repeat = function (count) {
        return new Array(count + 1).join(this);
    };
}

if (!Number.isFinite) {
    Number.isFinite = function (value) {
        return 'number' == typeof value && isFinite(value);
    };
}

if (!Number.isInteger) {
    Number.isInteger = function (value) {
        return 'number' == typeof value && isFinite(value) &&
               value > -9007199254740992 && value < 9007199254740992 &&
               Math.floor(value) == value;
    };
}

if (!Number.isNaN) {
    Number.isNaN = function (value) {
        return 'number' == typeof value && isNaN(value);
    };
}

if (!Number.parseInt) {
    Number.parseInt = parseInt;
}

if (!Number.parseFloat) {
    Number.parseFloat = parseFloat;
}

if (!Math.trunc) {
    Math.trunc = function (value) {
        value = Number(value);
        if (isNaN(value) || 0 === value || !Number.isFinite(value)) {
            return value;
        }
        return Math.sign(value) * Math.floor(Math.abs(value));
    };
}

if (!Math.sign) {
    Math.sign = function (value) {
        if (0 === value || isNaN(value)) {
            return value;
        }
        return (value > 0) - (value < 0);
    };
}

//Array and String generic methods polyfill
new function () {

    function fastApply(method, args) {
        var target = args[0];
        switch (args.length) {
            case 1:
                return method.call(target);
            case 2:
                return method.call(target, args[1]);
            case 3:
                return method.call(target, args[1], args[2]);
        }
        return method.apply(target, Array.prototype.slice.call(args, 1));
    }

    function createGeneric(method) {
        return function () {
            return fastApply(method, arguments);
        };
    }

    function createGenerics(source, names) {
        return names.reduce(function (methods, name) {
            methods[name] = createGeneric(source[name]);
            return methods;
        }, {});
    }

    function implement(object, methods) {
        Object.keys(methods).forEach(function (name) {
            if (!(name in object)) {
                object[name] = methods[name];
            }
        });
    }

    implement(Array, createGenerics(Array.prototype, [
        'concat', 'every', 'fill', 'filter', 'find',
        'findIndex', 'forEach', 'indexOf', 'join',
        'lastIndexOf', 'map', 'pop', 'push', 'reduce',
        'reduceRight', 'reverse', 'shift', 'slice',
        'some', 'sort', 'splice', 'unshift', 'includes'
    ]));

    implement(String, createGenerics(String.prototype, [
        'charAt', 'charCodeAt', 'concat', 'includes','endsWith',
        'indexOf', 'lastIndexOf', 'match', 'repeat', 'replace',
        'search', 'slice', 'split', 'startsWith', 'substr',
        'substring', 'toLowerCase', 'toUpperCase', 'trim'
    ]));

};

window.Set || (window.Set = new function () {

    function Set() {
        if (arguments.length) {
            //todo
            throw Error("Set implementation doesn't accept parameters");
        }
        this.length = 0;
    }

    Object.assign(Set.prototype, {

        size: 0,

        add: function (value) {
            if (!this.has(value)) {
                this.size = Array.push(this, value);
            }
        },

        has: function (value) {
            return -1 != Array.findIndex(this, function (val) {
                return Object.is(value, val);
            });
        },

        'delete': function (value) {
            var index = Array.findIndex(this, function (val) {
                return Object.is(value, val);
            });
            if (-1 == index) {
                return false;
            }
            Array.splice(this, index, 1);
            this.size--;
            return true;
        },

        clear: function () {
            Array.splice(this, 0, this.length);
            this.size = 0;
        }

        //todo forEach, entries, keys, values

    });

    return Set;

});

window.Map || (window.Map = new function () {

    var KEY = 0,
        VALUE = 1;

    function Map() {
        if (arguments.length) {
            //todo
            throw Error("Map implementation doesn't accept parameters");
        }
        this.length = 0;
    }

    Object.assign(Map.prototype, {

        size: 0,

        _getPair: function (key) {
            return Array.find(this, function (pair) {
                return Object.is(key, pair[KEY]);
            });
        },

        set: function (key, value) {
            var pair = this._getPair(key);
            if (pair) {
                pair[VALUE] = value;
            } else {
                this.size = Array.push(this, [key, value]);
            }
        },

        get: function (key) {
            return Object(this._getPair(key))[VALUE];
        },

        has: function (key) {
            return Boolean(this._getPair(key));
        },

        'delete': function (key) {
            var index = Array.findIndex(this, function (pair) {
                return Object.is(key, pair[KEY]);
            });
            if (-1 == index) {
                return false;
            }
            Array.splice(this, index, 1);
            this.size--;
            return true;
        },

        clear: function () {
            Array.splice(this, 0, this.length);
            this.size = 0;
        }

        //todo forEach, entries, keys, values

    });

    return Map;

});

window.WeakSet || (window.WeakSet = new function () {

    function WeakSet() {
        if (arguments.length) {
            //todo
            throw Error("WeakSet implementation doesn't accept parameters");
        }
        this.length = 0;
    }

    function equalValue(value) {
        //this → value
        return this === value;
    }

    function validValue(value) {
        if (Object(value) !== value) {
            throw TypeError('Invalid value used in weak set');
        }
        return value;
    }

    Object.assign(WeakSet.prototype, {

        add: function (value) {
            if (!this.has(validValue(value))) {
                Array.push(this, value);
            }
        },

        has: function (value) {
            return -1 != Array.findIndex(this, equalValue, validValue(value));
        },

        'delete': function (value) {
            var index = Array.findIndex(this, equalValue, validValue(value));
            if (-1 == index) {
                return false;
            }
            Array.splice(this, index, 1);
            return true;
        },

        clear: function () {
            Array.splice(this, 0, this.length);
        }

    });

    return WeakSet;

});

window.WeakMap || (window.WeakMap = new function () {

    //todo
    //In native WeakMaps, references to key objects are held "weakly",
    //which means that they do not prevent garbage collection in case
    //there would be no other reference to the object.

    var KEY = 0,
        VALUE = 1;

    function WeakMap() {
        if (arguments.length) {
            //todo
            throw Error("WeakMap implementation doesn't accept parameters");
        }
        this.length = 0;
    }

    function equalKey(pair) {
        //this → key
        return this === pair[KEY];
    }

    function validKey(key) {
        if (Object(key) !== key) {
            throw TypeError('Invalid value used as weak map key');
        }
        return key;
    }

    Object.assign(WeakMap.prototype, {

        _getPair: function (key) {
            return Array.find(this, equalKey, validKey(key));
        },

        set: function (key, value) {
            var pair = this._getPair(key);
            if (pair) {
                pair[VALUE] = value;
            } else {
                Array.push(this, [key, value]);
            }
        },

        get: function (key) {
            return Object(this._getPair(key))[VALUE];
        },

        has: function (key) {
            return Boolean(this._getPair(key));
        },

        'delete': function (key) {
            var index = Array.findIndex(this, equalKey, validKey(key));
            if (-1 == index) {
                return false;
            }
            Array.splice(this, index, 1);
            return true;
        },

        clear: function () {
            Array.splice(this, 0, this.length);
        }

    });

    return WeakMap;

});

window.setImmediate || Object.assign(window, new function () {

    var uid = 0,
        storage = {},
        firstCall = true,
        message = 'setImmediatePolyfillMessage';

    function fastApply(args) {
        var func = args[0];
        switch (args.length) {
            case 1:
                return func();
            case 2:
                return func(args[1]);
            case 3:
                return func(args[1], args[2]);
        }
        return func.apply(window, Array.prototype.slice.call(args, 1));
    }

    function callback(event) {
        var data,
            key = event.data;
        if ('string' == typeof key && key.startsWith(message)) {
            data = storage[key];
            if (data) {
                delete storage[key];
                fastApply(data);
            }
        }
    }

    return {

        setImmediate: function () {
            var id = uid++,
                key = message + id;
            storage[key] = arguments;
            if (firstCall) {
                firstCall = false;
                window.addEventListener('message', callback);
            }
            window.postMessage(key, '*');
            return id;
        },

        clearImmediate: function (id) {
            delete storage[message + id];
        }

    };

});

window.Promise || (window.Promise = new function () {

    function toPromise(thenable) {
        if (isPromise(thenable)) {
            return thenable;
        }
        return new Promise(function (resolve, reject) {
            //execute thenable.then asynchronously
            //github.com/getify/native-promise-only/issues/5
            //github.com/domenic/promises-unwrapping/issues/105
            window.setImmediate(function () {
                try {
                    thenable.then(resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }

    function isCallable(anything) {
        return 'function' == typeof anything;
    }

    function isPromise(anything) {
        return anything instanceof Promise;
    }

    function isThenable(anything) {
        return Object(anything) === anything && isCallable(anything.then);
    }

    function isSettled(promise) {
        return promise._fulfilled || promise._rejected;
    }

    function identity(value) {
        return value;
    }

    function thrower(reason) {
        throw reason;
    }

    function call(callback) {
        callback();
    }

    function dive(thenable, onFulfilled, onRejected) {
        function interimOnFulfilled(value) {
            if (isThenable(value)) {
                toPromise(value).then(interimOnFulfilled, interimOnRejected);
            } else {
                onFulfilled(value);
            }
        }
        function interimOnRejected(reason) {
            if (isThenable(reason)) {
                toPromise(reason).then(interimOnFulfilled, interimOnRejected);
            } else {
                onRejected(reason);
            }
        }
        toPromise(thenable).then(interimOnFulfilled, interimOnRejected);
    }

    function Promise(resolver) {
        Object.assign(this, {
            _fulfilled: false,
            _rejected: false,
            _value: undefined,
            _reason: undefined,
            _onFulfilled: [],
            _onRejected: []
        });
        this._resolve(resolver);
    }

    Object.assign(Promise, {

        resolve: function (value) {
            if (isThenable(value)) {
                return toPromise(value);
            }
            return new Promise(function (resolve) {
                resolve(value);
            });
        },

        reject: function (reason) {
            return new Promise(function (resolve, reject) {
                reject(reason);
            });
        },

        race: function (values) {
            return new Promise(function (resolve, reject) {
                var value,
                    length = values.length,
                    i = 0;
                while (i < length) {
                    value = values[i];
                    if (isThenable(value)) {
                        dive(value, resolve, reject);
                    } else {
                        resolve(value);
                    }
                    i++;
                }
            });
        },

        all: function (values) {
            return new Promise(function (resolve, reject) {
                var thenables = 0,
                    fulfilled = 0,
                    value,
                    length = values.length,
                    i = 0;
                values = values.slice(0);
                while (i < length) {
                    value = values[i];
                    if (isThenable(value)) {
                        thenables++;
                        dive(
                            value,
                            function (index) {
                                return function (value) {
                                    values[index] = value;
                                    fulfilled++;
                                    if (fulfilled == thenables) {
                                        resolve(values);
                                    }
                                };
                            }(i),
                            reject
                        );
                    } else {
                        //[1, , 3] → [1, undefined, 3]
                        values[i] = value;
                    }
                    i++;
                }
                if (!thenables) {
                    resolve(values);
                }
            });
        }

    });

    Object.assign(Promise.prototype, {

        _resolve: function (resolver) {

            var promise = this;

            function resolve(value) {
                promise._fulfill(value);
            }

            function reject(reason) {
                promise._reject(reason);
            }

            try {
                resolver(resolve, reject);
            } catch(error) {
                if (!isSettled(promise)) {
                    reject(error);
                }
            }

        },

        _fulfill: function (value) {
            if (!isSettled(this)) {
                this._fulfilled = true;
                this._value = value;
                this._onFulfilled.forEach(call);
                this._clearQueue();
            }
        },

        _reject: function (reason) {
            if (!isSettled(this)) {
                this._rejected = true;
                this._reason = reason;
                this._onRejected.forEach(call);
                this._clearQueue();
            }
        },

        _enqueue: function (onFulfilled, onRejected) {
            this._onFulfilled.push(onFulfilled);
            this._onRejected.push(onRejected);
        },

        _clearQueue: function () {
            this._onFulfilled = [];
            this._onRejected = [];
        },

        then: function (onFulfilled, onRejected) {

            var promise = this;

            onFulfilled = isCallable(onFulfilled) ? onFulfilled : identity;
            onRejected = isCallable(onRejected) ? onRejected : thrower;

            return new Promise(function (resolve, reject) {

                onFulfilled = onFulfilled || defaultOnFulfilled;
                onRejected = onRejected || defaultOnRejected;

                function asyncOnFulfilled() {
                    window.setImmediate(function () {
                        var value;
                        try {
                            value = onFulfilled(promise._value);
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (isThenable(value)) {
                            toPromise(value).then(resolve, reject);
                        } else {
                            resolve(value);
                        }
                    });
                }

                function asyncOnRejected() {
                    window.setImmediate(function () {
                        var reason;
                        try {
                            reason = onRejected(promise._reason);
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (isThenable(reason)) {
                            toPromise(reason).then(resolve, reject);
                        } else {
                            resolve(reason);
                        }
                    });
                }

                if (promise._fulfilled) {
                    asyncOnFulfilled();
                } else if (promise._rejected) {
                    asyncOnRejected();
                } else {
                    promise._enqueue(asyncOnFulfilled, asyncOnRejected);
                }

            });

        },

        'catch': function (onRejected) {
            return this.then(undefined, onRejected);
        }

    });

    return Promise;

});

window.requestAnimationFrame || Object.assign(window, {

    requestAnimationFrame: [
        window.msRequestAnimationFrame,
        window.mozRequestAnimationFrame,
        window.webkitRequestAnimationFrame,
        new function () {
            var fps = 60,
                delay = 1000 / fps,
                navigationStart = Date.now(),
                prevCallTime = navigationStart;
            return function (callback) {
                var curCallTime = Date.now(),
                    timeout = Math.max(0, delay - (curCallTime - prevCallTime)),
                    timeToCall = curCallTime + timeout;
                prevCallTime = timeToCall;
                return window.setTimeout(function () {
                    callback(timeToCall - navigationStart);
                }, timeout);
            };
        }
    ].find(Boolean),

    cancelAnimationFrame: [
        window.mozCancelAnimationFrame,
        window.webkitCancelAnimationFrame,
        window.cancelRequestAnimationFrame,
        window.msCancelRequestAnimationFrame,
        window.mozCancelRequestAnimationFrame,
        window.webkitCancelRequestAnimationFrame,
        window.clearTimeout
    ].find(Boolean)

});

function StaticDOMStringMap() {}

'dataset' in document.documentElement ||
Object.defineProperty(HTMLElement.prototype, 'dataset', {

    //simple implementation: the new property will not create an attribute

    get: new function () {

        function toUpperCase(str) {
            return str.charAt(1).toUpperCase();
        }

        function attrToPropName(attrName) {
            return attrName.substr(5).replace(/-./g, toUpperCase);
        }

        function attrToPropDesc(attr) {
            return {
                get: function () {
                    return attr.value;
                },
                set: function (value) {
                    attr.value = String(value);
                }
            };
        }

        function fillDataset(dataset, attrs) {
            Array.forEach(attrs, function (attr) {
                var attrName = attr.name.toLowerCase();
                if (attrName.startsWith('data-')) {
                    Object.defineProperty(
                        dataset,
                        attrToPropName(attrName),
                        attrToPropDesc(attr)
                    );
                }
            });
            return dataset;
        }

        return function () {
            return fillDataset(new StaticDOMStringMap, this.attributes);
        };

    }

});

//Element traversal polyfill
'children' in document.createDocumentFragment() || new function () {

    var ELEMENT_NODE = 1,
        proto,
        api = {

            firstElementChild: function () {
                var node = this.firstChild;
                while (node && ELEMENT_NODE != node.nodeType) {
                    node = node.nextSibling;
                }
                return node;
            },

            lastElementChild: function () {
                var node = this.lastChild;
                while (node && ELEMENT_NODE != node.nodeType) {
                    node = node.previousSibling;
                }
                return node;
            },

            nextElementSibling: function () {
                var node = this;
                do {
                    node = node.nextSibling;
                } while (node && ELEMENT_NODE != node.nodeType);
                return node;
            },

            previousElementSibling: function () {
                var node = this;
                do {
                    node = node.previousSibling;
                } while (node && ELEMENT_NODE != node.nodeType);
                return node;
            },

            childElementCount: function () {
                return this.children.length;
            },

            children: new function () {

                function StaticHTMLCollection() {}

                StaticHTMLCollection.prototype.item = function (index) {
                    return this[index] || null;
                };

                return function () {
                    var elements = new StaticHTMLCollection,
                        node,
                        nodes = this.childNodes,
                        length = nodes.length,
                        i = 0,
                        j = 0;
                    while (i < length) {
                        node = nodes[i];
                        if (ELEMENT_NODE == node.nodeType) {
                            elements[j++] = node;
                        }
                        i++;
                    }
                    elements.length = j;
                    return elements;
                };

            }

        };

    function defineGetter(key) {
        if (!(key in proto)) {
            Object.defineProperty(proto, key, {
                get: api[key]
            });
        }
    }

    proto = HTMLElement.prototype;
    Object.keys(api).forEach(defineGetter);

    [
        document.constructor,
        document.createDocumentFragment().constructor
    ].forEach(function (Constructor) {
        proto = Constructor.prototype;
        [
            'firstElementChild', 'lastElementChild',
            'childElementCount', 'children'
        ].forEach(defineGetter);
    });

};

document.documentElement.matches || new function () {

    var proto = HTMLElement.prototype;

    proto.matches = [
        proto.matchesSelector,
        proto.oMatchesSelector,
        proto.msMatchesSelector,
        proto.mozMatchesSelector,
        proto.webkitMatchesSelector
    ].find(Boolean);

    if (!proto.matches) {
        proto.matches = new function () {
            var ELEMENT_NODE = 1;
            function isContains(root, element, selector) {
                return Array.includes(root.querySelectorAll(selector), element);
            }
            return function (selector) {
                var contains,
                    root = this.parentNode;
                if (root) {
                    if (ELEMENT_NODE == root.nodeType) {
                        root = root.ownerDocument;
                    }
                    return isContains(root, this, selector);
                }
                root = document.createDocumentFragment();
                root.appendChild(this);
                contains = isContains(root, this, selector);
                root.removeChild(this);
            };
        };
    }

};

new function () {

    var docFragment = document.createDocumentFragment(),
        target = docFragment.constructor.prototype,
        source = HTMLElement.prototype;
    if (!docFragment.querySelector) {
        target.querySelector = source.querySelector;
        target.querySelectorAll = source.querySelectorAll;
    }

};

window.lib = {};

lib.classExtends = function (Class, SuperClass) {
    Class.prototype = Object.create(SuperClass.prototype);
    Class.prototype.constructor = Class;
    Class.Super = SuperClass;
};

lib.array = {

    //counts the actual number of elements
    //javascript.ru/forum/155335-post38.html
    //example: count([1,,2]) → 2, but [1,,2].length → 3
    count: function (iterable) {
        return Array.reduce(iterable, function (length) {
            return length + 1;
        }, 0);
    },

    unique: function (iterable) {
        var result = [],
            anything,
            length = iterable.length,
            i = 0,
            j = 0;
        while (i < length) {
            anything = iterable[i];
            if (-1 == result.indexOf(anything)) {
                result[j++] = anything;
            }
            i++;
        }
        return result;
    },

    //Array.every ignores missing indexes and
    //always returns true for an empty array
    all: function (iterable, func, boundThis) {
        var i = Object(iterable).length;
        if (!i) {
            return false;
        }
        while (i--) {
            if (i in iterable) {
                if (!func.call(boundThis, iterable[i])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    },

    //shifts array indexes, so that was not missed
    //example: refine([1,,2]) → [1, 2]
    refine: function (iterable) {
        return Array.reduce(iterable, function (array, anything) {
            array.push(anything);
            return array;
        }, []);
    },

    range: function (i, end) {
        var result = [];
        if (!(1 in arguments)) {
            end = i;
            i = 0;
        }
        while (i < end) {
            result.push(i);
            i++;
        }
        return result;
    },

    shuffle: function (iterable) {
        var result = Array.from(iterable),
            i = result.length,
            j,
            tmp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = result[j];
            result[j] = result[i];
            result[i] = tmp;
        }
        return result;
    },

    remove: function (iterable, anything) {
        var index = Array.indexOf(iterable, anything);
        return -1 != index && Array.splice(iterable, index, 1);
    }

};

lib.date = new function () {

    var date = this,
        lengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    date.isLeapYear = function (year) {
        if (!arguments.length) {
            year = new Date;
        }
        if (year instanceof Date) {
            year = year.getFullYear();
        }
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    };

    date.getMonthLength = function (monthIndex, year) {
        if (!arguments.length) {
            monthIndex = new Date;
        }
        if (monthIndex instanceof Date) {
            year = monthIndex.getFullYear();
            monthIndex = monthIndex.getMonth();
        }
        if (1 == monthIndex && date.isLeapYear(year)) {
            return 29;
        }
        return lengths[monthIndex];
    };

};

lib.html = {

    parse: function (string) {
        var node = document.createElement('div'),
            frag = document.createDocumentFragment();
        node.innerHTML = string;
        while (node.hasChildNodes()) {
            frag.appendChild(node.firstChild);
        }
        return frag;
    },

    escape: function (string) {
        var node = document.createElement('div');
        node.appendChild(document.createTextNode(string));
        return node.innerHTML;
    },

    unescape: function (string) {
        var node = document.createElement('div');
        node.innerHTML = string;
        return node.textContent;
    }

};

//example: var tmpl = new lib.Template('Hi, {NAME}');
//         tmpl({name: 'John'}) → 'Hi, John'
lib.Template = new function () {

    function match(template, replacements) {
        return Object.keys(replacements).reduceRight(function (template, key) {
            var value = replacements[key];
            return template.split('{' + key.toUpperCase() + '}').join(value);
        }, template);
    }

    function Template(template) {
        return function (replacements) {
            return match(template, replacements)
        };
    }

    Template.match = match;

    return Template;

};

lib.I18n = new function () {

    function use(locale) {
        this.messageBundle = this[locale];
    }

    function add(locale, messageBundle) {
        this.locale = locale;
        this[locale] = messageBundle;
    }

    function I18n(locale, messageBundle) {
        function i18n(message, replacements) {
            if (message in i18n.messageBundle) {
                message = i18n.messageBundle[message];
            }
            if (replacements) {
                return lib.Template.match(message, replacements);
            }
            return message;
        }
        i18n.add = add;
        i18n.use = use;
        i18n.add(locale, messageBundle);
        i18n.use(locale);
        return i18n;
    }

    return I18n;

};

lib.css = new function () {

    var css = this,
        prefix;

    css.prefix = prefix = new function () {
        var cache = {},
            prefixes = ['ms', 'O', 'Webkit', 'Moz'],
            properties = new function () {
                var style = document.documentElement.style,
                    proto = style.constructor.prototype;
                return 'top' in proto ? proto : style;
            };
        return function (property) {
            var prefixed,
                name,
                i;
            if (property in cache) {
                return cache[property];
            }
            if (property in properties) {
                cache[property] = property;
                return property;
            }
            name = property.charAt(0).toUpperCase() + property.slice(1);
            i = prefixes.length;
            while (i--) {
                prefixed = prefixes[i] + name;
                if (prefixed in properties) {
                    cache[property] = prefixed;
                    return prefixed;
                }
            }
            cache[property] = undefined;
            return undefined;
        };
    };

    new function () {
        var properties = {
                animation: [
                    'Delay', 'Direction', 'Duration', 'FillMode',
                    'IterationCount', 'Name', 'PlayState', 'TimingFunction'
                ],
                transition: ['Delay', 'Duration', 'Property', 'TimingFunction'],
                transform:  ['Origin', 'Style']
            };
        Object.keys(properties).forEach(function (composite) {
            var prefixed = prefix(composite);
            if (prefixed) {
                css[composite] = prefixed;
                properties[composite].forEach(function (single) {
                    css[composite + single] = prefixed + single;
                });
            }
        });
    };

    css.getAnimationNames = new function () {
        var separator = /,\s*/;
        function excludeNone(value) {
            return 'none' != value;
        }
        return function (style) {
            var names = style[css.animationName];
            if (names) {
                return names.split(separator).filter(excludeNone);
            }
            return [];
        };
    };

    css.set = new function () {
        function changeStyle(style, properties) {
            Object.keys(properties).forEach(function (property) {
                style[prefix(property)] = properties[property];
            });
        }
        if (css.transition || css.animation) {
            return function (element, properties) {
                var style = window.getComputedStyle(element),
                    animations = css.getAnimationNames(style);
                changeStyle(element.style, properties);
                return lib.event.awaitTransAnimEnd(element, animations);
            };
        }
        return function (element, properties) {
            changeStyle(element.style, properties);
            return Promise.resolve(element);
        };
    };

    css.get = function (element, properties) {
        var style = window.getComputedStyle(element);
        if (Array.isArray(properties)) {
            return properties.reduce(function (result, property) {
                result[property] = style[prefix(property)];
                return result;
            }, {});
        }
        return style[prefix(properties)];
    };

    css.getTransitionTime = css.transition ? new function () {
        function parseFloats(string) {
            return string.split(',').map(function (string) {
                return Number.parseFloat(string) || 0;
            });
        }
        function calcTransitionTime(delay, duration) {
            var maxTime = 0,
                time,
                length = Math.max(duration.length, delay.length),
                i = 0;
            while (i < length) {
                time = (delay[i] || 0) + (duration[i] || 0);
                if (time > maxTime) {
                    maxTime = time;
                }
                i++;
            }
            return Math.ceil(maxTime * 1000);
        }
        return function (style) {
            return calcTransitionTime(
                parseFloats(style[css.transitionDelay]),
                parseFloats(style[css.transitionDuration])
            );
        };
    } : function () {
        return 0;
    };

};

lib.event = Object.assign({

    preventDefault: function (event) {
        event.preventDefault();
    },

    stopPropagation: function(event) {
        event.stopPropagation();
    }

}, new function () {

    function off(eventDetails) {
        eventDetails.eventTypes.forEach(function (eventType) {
            eventDetails.element.removeEventListener(
                eventType,
                eventDetails.callback
            );
        });
    }

    function on(element, selector, eventTypes, callback) {
        var listener;
        if (arguments.length == 3) {
            callback = eventTypes;
            eventTypes = selector;
            selector = undefined;
        }
        if (selector) {
            selector += ',' + selector + ' *';
            listener = function (event) {
                var target = event.target;
                if (target.matches && target.matches(selector)) {
                    if (callback.handleEvent) {
                        callback.handleEvent(event);
                    } else {
                        callback.call(element, event);
                    }
                }
            };
        } else {
            listener = callback;
        }
        if ('string' == typeof eventTypes) {
            eventTypes = eventTypes.split(/[\s,]+/);
        }
        eventTypes.forEach(function (eventType) {
            element.addEventListener(eventType, listener);
        });
        return {
            element: element,
            eventTypes: eventTypes,
            callback: listener
        };
    }

    function one(element, selector, eventTypes, callback) {
        var details;
        function listener(event) {
            off(details);
            if (callback.handleEvent) {
                callback.handleEvent(event);
            } else {
                callback.call(element, event);
            }
        }
        if (arguments.length == 3) {
            callback = eventTypes;
            eventTypes = selector;
            selector = undefined;
        }
        details = on(element, selector, eventTypes, listener);
    }

    function when(element, selector, eventTypes) {
        if (arguments.length == 2) {
            eventTypes = selector;
            selector = undefined;
        }
        return new Promise(function (resolve) {
            one(element, selector, eventTypes, resolve);
        });
    }

    return {
        off: off,
        on: on,
        one: one,
        when: when
    };

}, new function () {

    var css = lib.css,
        animation = css.animation,
        transition = css.transition,
        animationEnd = {
            animation: 'animationend',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd'
        }[animation],
        fallback = Promise.resolve;

    function getNewAnimationNames(oldNames, newNames) {
        if (!oldNames) {
            return newNames;
        }
        return newNames.reduce(function (names, name) {
            if (-1 == oldNames.indexOf(name)) {
                names.push(name);
            }
            return names;
        }, []);
    }

    function dequeue(animations, name) {
        var index = animations.indexOf(name);
        if (-1 != index) {
            animations.splice(index, 1);
        }
        return animations.length;
    }

    function awaitAnimationEnd(element, animations) {
        if (!animations) {
            animations = css.getAnimationNames(element);
        }
        if (animations.length) {
            return new Promise(function (resolve) {
                function onAnimationEnd(event) {
                    if (event.target == element &&
                        !dequeue(animations, event.animationName)) {
                        element.removeEventListener(
                            animationEnd,
                            onAnimationEnd
                        );
                        resolve(element);
                    }
                }
                element.addEventListener(animationEnd, onAnimationEnd);
            });
        }
        return Promise.resolve(element);
    }

    function awaitTransitionEnd(element, style) {
        var delay;
        if (!style) {
            style = window.getComputedStyle(element);
        }
        delay = css.getTransitionTime(style);
        if (delay) {
            return new Promise(function (resolve) {
                window.setTimeout(function () {
                    resolve(element);
                }, delay);
            });
        }
        return Promise.resolve(element);
    }

    function awaitTransAnimEnd(element, prevAnimations) {
        var style = window.getComputedStyle(element),
            animations = css.getAnimationNames(style);
        animations = getNewAnimationNames(prevAnimations, animations);
        return Promise.all([
            awaitAnimationEnd(element, animations),
            awaitTransitionEnd(element, style)
        ]).then(function () {
            return element;
        });
    }

    return {

        animationEnd: animationEnd,
        animationStart: {
            animation: 'animationstart',
            MozAnimation: 'mozAnimationStart',
            WebkitAnimation: 'webkitAnimationStart'
        }[animation],
        animationIteration: {
            animation: 'animationiteration',
            MozAnimation: 'mozAnimationIteration',
            WebkitAnimation: 'webkitAnimationIteration'
        }[animation],
        transitionEnd: {
            transition: 'transitionend',
            MozTransition: 'mozTransitionEnd',
            WebkitTransition: 'webkitTransitionEnd'
        }[transition],

        awaitAnimationEnd: animation ? awaitAnimationEnd : fallback,
        awaitTransitionEnd: transition ? awaitTransitionEnd : fallback,
        awaitTransAnimEnd: animation || transition ? awaitTransAnimEnd :
                                                     fallback

    };

});

lib.dom = Object.assign({

    ready: function () {
        if ('complete' == document.readyState) {
            return Promise.resolve();
        }
        return lib.event.when(document, 'DOMContentLoaded');
    }

}, new function () {

    var css = lib.css,
        promise = css.animation || css.transition ?
        function (element, method, classes) {
            var style = window.getComputedStyle(element),
                animations = css.getAnimationNames(style);
            if (changeClasses(element, method, classes)) {
                return lib.event.awaitTransAnimEnd(element, animations);
            }
            return Promise.resolve(element);
        } : function (element, method, classes) {
            changeClasses(element, method, classes);
            return Promise.resolve(element);
        };

    function changeClasses(element, method, classes) {
        var className = element.className,
            classList = element.classList;
        classes.forEach(function (className) {
            classList[method](className);
        });
        return className != element.className;
    }

    function apply(method, args) {
        return promise(args[0], method, Array.slice(args, 1));
    }

    return {

        addClass: function () {
            return apply('add', arguments);
        },

        removeClass: function () {
            return apply('remove', arguments);
        },

        toggleClass: function () {
            return apply('toggle', arguments);
        }

    };

});

lib.request = new function () {

    var getRndQueryVal = new function () {
        var uniqueValues = {};
        return function () {
            var value = Math.random().toString().slice(2);
            if (!uniqueValues[value]) {
                uniqueValues[value] = 1;
                return value;
            }
            return getRndQueryVal();
        };
    };

    function toQueryParam(key, value) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }

    function toQueryString(object) {
        return Object.keys(object).reduce(function (result, key) {
            result.push(toQueryParam(key, object[key]));
            return result;
        }, []).join('&');
    }

    function unbind(xhr) {
        xhr.onload = null;
        xhr.onabort = null;
        xhr.onerror = null;
        xhr.ontimeout = null;
    }

    function request(params) {
        /* params = {
         *     method:   String,
         *     url:      String,
         *     data:     String|Object|FormData,
         *     userName: String,
         *     password: String,
         *     timeout:  Number,
         *     async:    Boolean,
         *     caching:  Boolean,
         *     credentials: Boolean,
         *     mimeType: String,
         *     headers: Object,
         *     advanced: Function
         * }
        */
        var method = (params.method || 'GET').toUpperCase(),
            url = params.url || window.location.href,
            data = params.data,
            userName = params.userName || '',
            password = params.password || '',
            timeout = params.timeout || 0,
            async = false !== params.async,
            caching = false !== params.caching,
            credentials = true === params.credentials,
            mimeType = params.mimeType,
            advanced = params.advanced,
            headers = {
                'X-Requested-With': 'XMLHttpRequest'
            };

        if (Object(data) === data) {
            if (data instanceof FormData) {
                headers['Content-Type'] = 'multipart/form-data';
            } else {
                data = toQueryString(data);
            }
        }
        if ('POST' == method) {
            headers['Content-Type'] = headers['Content-Type'] ||
            'application/x-www-form-urlencoded; charset=UTF-8';
        } else {
            if (!caching) {
                url += '?no-cache=' + getRndQueryVal();
            }
            if ('string' == typeof data) {
                url += (caching ? '?' : '&') + data;
            }
            data = null;
        }
        if (params.headers) {
            Object.assign(headers, params.headers);
        }

        return new Promise(function (resolve, reject) {

            function onLoad() {
                unbind(this);
                if (this.status >= 200 && this.status < 400) {
                    resolve(this);
                } else {
                    reject(new Error(this.statusText));
                }
            }
            function onAbort() {
                unbind(this);
                reject(new Error('cancelled'));
            }
            function onError() {
                unbind(this);
                reject(new Error(this.statusText));
            }
            function onTimeout() {
                unbind(this);
                reject(new Error('time is out'));
            }

            new function () {//avoid closure
                var xhr = new XMLHttpRequest;
                xhr.open(method, url, async, userName, password);
                if (credentials) {
                    xhr.withCredentials = true;
                }
                if (mimeType) {
                    xhr.overrideMimeType(mimeType);
                }
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
                xhr.onload = onLoad;
                xhr.onabort = onAbort;
                xhr.onerror = onError;
                if (timeout) {
                    xhr.timeout = timeout;
                    xhr.ontimeout = onTimeout;
                }
                if (advanced) {
                    advanced(xhr);
                }
                xhr.send(data);
            };

        });

    }

    Object.assign(request, {

        toQueryParam: toQueryParam,
        toQueryString: toQueryString,

        get: function (params) {
            if ('string' == typeof params) {
                params = {url: params};
            }
            params.method = 'GET';
            return request(params);
        },

        post: function (params) {
            params.method = 'POST';
            return request(params);
        },

        json: function (params) {
            return request.get(params).then(function (xhr) {
                return JSON.parse(xhr.responseText);
            });
        },

        jsonp: function (params) {
            return request.script(params);
        },

        script: function (params) {
            /* params = {
             *     url:     String,
             *     data:    String|Object,
             *     caching: Boolean
             * }
            */
            var url,
                data,
                caching;

            if ('string' == typeof params) {
                params = {url: params};
            }
            url = params.url || window.location.href;
            data = params.data;
            caching = params.caching !== false;
            if (Object(data) === data) {
                data = toQueryString(data);
            }
            if (!caching) {
                url += '?no-cache=' + getRndQueryVal();
            }
            if ('string' == typeof data) {
                url += (caching ? '?' : '&') + data;
            }
            return new Promise(function (resolve, reject) {
                document.head.appendChild(
                    Object.assign(document.createElement('script'), {
                        onload: function () {
                            unbind(this);
                            this.remove();
                            resolve();
                        },
                        onerror: function () {
                            unbind(this);
                            this.remove();
                            reject(new Error('Could not load script'));
                        },
                        async: true,
                        defer: true,
                        src: url
                    })
                );
            });
        }

    });

    return request;

};

lib.cookie = new function () {

    //The regular expressions and comments from:
    //developer.mozilla.org/docs/Web/API/document.cookie

    var doc = document,
        decode = decodeURIComponent,
        encode = encodeURIComponent;

    /**
     * Read a cookie. If the cookie doesn't exist a null value will be returned.
     * @param {string} key - The name of the cookie to read.
     * @returns {(string|null)}
     */
    function get(key) {
        return decode(
            doc.cookie.replace(
                new RegExp(
                    '(?:(?:^|.*;)\\s*' +
                    encode(key).replace(/[\-\.\+\*]/g, '\\$&') +
                    '\\s*\\=\\s*([^;]*).*$)|^.*$'
                ),
                '$1'
            )
        ) || null;
    }

    /**
     * Create/overwrite a cookie.
     * @param {string} key - The name of the cookie to create/overwrite.
     * @param {string} value - The value of the cookie.
     * @param {Object} [params] - The set of optional parameters.
     * @param {(number|string|Date)} [params.end] - The max-age in seconds
     *     (e.g. 31536e3 for a year, Infinity for a never-expires cookie)
     *     or the expires date in GMTString format or as Date object;
     *     if not specified it will expire at the end of session.
     * @param {string} [params.path] - E.g., "/", "/mydir"; if not specified,
     *     defaults to the current path of the current document location.
     * @param {string} [params.domain] - E.g., "example.com", ".example.com"
     *     (includes all subdomains) or "subdomain.example.com";
     *     if not specified, defaults to the host portion
     *     of the current document location.
     * @param {boolean} [params.secure] - The cookie will be transmitted
     *     only over secure protocol as https.
     * @returns {boolean}
     */
    function set(key, value, params) {
        params = params || {};
        var expires = '',
            end = params.end,
            path = params.path,
            domain = params.domain,
            secure = params.secure;
        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
            return false;
        }
        if (end) {
            switch (end.constructor) {
                case Number:
                    expires = end === Infinity ?
                              '; expires=Fri, 31 Dec 9999 23:59:59 GMT' :
                              '; max-age=' + end;
                    break;
                case String:
                    expires = '; expires=' + end;
                    break;
                case Date:
                    expires = '; expires=' + end.toUTCString();
                    break;
            }
        }
        doc.cookie = encode(key) + '=' + encode(value) +
                                         expires +
                                         (domain ? '; domain=' + domain : '') +
                                         (path   ? '; path='   + path   : '') +
                                         (secure ? '; secure'           : '');
        return true;
    }

    /**
     * Delete a cookie.
     * @param {string} key - The name of the cookie to remove.
     * @param {Object} [params] - The set of optional parameters.
     * @param {string} [params.path] - E.g., "/", "/mydir"; if not specified,
     *     defaults to the current path of the current document location.
     * @param {string} [params.domain] - E.g., "example.com", ".example.com"
     *     (includes all subdomains) or "subdomain.example.com";
     *     if not specified, defaults to the host portion
     *     of the current document location.
     * @returns {boolean}
     */
    function remove(key, params) {
        params = params || {};
        var path = params.path,
            domain = params.domain;
        if (!key || !has(key)) {
            return false;
        }
        doc.cookie = encode(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
                                   (domain ? '; domain=' + domain : '') +
                                   (path ? '; path=' + path : '');
        return true;
    }

    /**
     * Check if a cookie exists.
     * @param {string} key - The name of the cookie to test.
     * @returns {boolean}
     */
    function has(key) {
        return (
            new RegExp(
                '(?:^|;\\s*)' +
                encode(key).replace(/[\-\.\+\*]/g, '\\$&') +
                '\\s*\\='
            )
        ).test(doc.cookie);
    }

    /**
     * Returns an array of all readable cookies from this location.
     * @returns {Array}
     */
    function keys() {
        return doc.cookie.replace(
            /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,
            ''
        ).split(/\s*(?:\=[^;]*)?;\s*/).map(decode);
    }

    return {
        get: get,
        set: set,
        has: has,
        remove: remove,
        keys: keys
    };

};

};//the end of jsCore
