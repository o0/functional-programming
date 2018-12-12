const noop = val => val;

const compose = (...fns) => fns.reduce((prevFn, fn) => (val) => prevFn(fn(val)), noop);

const pipe = (...fns) => fns.reduce((prevFn, fn) => (val) => fn(prevFn(val)), noop);
