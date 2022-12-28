const isDict = (dict) => {
    return typeof dict === 'object' && dict !== null && !(dict instanceof Array) && !(dict instanceof Date);
}
const isArray = (array) => {
    return Object.prototype.toString.call(array) === '[object Array]';
}
export {isDict,isArray}