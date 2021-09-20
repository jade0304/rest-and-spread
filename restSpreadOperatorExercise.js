const filterOutOdds = (...args) => args.filter(v => v %2 === 0);

// findMin
//my own solution
const findMin = (argument) => {
return argument.reduce((min, next) => next < min ? next : min)};

// or 
// const findMin = (...args) => Math.min(...args)

//merge Objects

const mergeObj = (obj1, obj2) => ({...obj1, ...obj2})

//doubleA And Return Args 

const doubleAndReturnArgs = (arr, ...args) => 
    [...arr, ...args.map(val => val * 2)]

//    slice and dice

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    const removeIdx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, removeIdx), ...items.slice(removeIdx +1)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [ ...array1, ...array2 ]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key] : val})


/** Return a new object with a key removed. */
const obj = {
    1: '3',
2: '4',
4: '5'}
const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete obj.key;
    return newObj
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key]: val}
}