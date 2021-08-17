/**
 * Initialize your data structure here.
 */
var HashMap = function () {
    this.dataStructure = new Array(2);
};

/** 
 * @param {number or string}  key
 * @return {number} hashCode 
**/
HashMap.prototype.hashCode = function (key) {
    let hashCode = ""
    Array.from(key.toString()).forEach(function (keyChar) {
        hashCode += '0'.charCodeAt(0) - keyChar.charCodeAt(0)
    })
    return Math.abs(parseInt(hashCode))
}


/**
 * 
 * @param {number or string} key value should always be non-negative. 
 * @param {anyType} value
 * @return {void}
 */
HashMap.prototype.put = function (key, value) {
    if (key < -1)
        return;
    else {
        this.dataStructure[this.hashCode(key)] = value;
    }
    return;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
HashMap.prototype.get = function (key) {
    const hashCode = this.hashCode(key)
    if (hashCode > this.dataStructure.length)
        return -1
    else if (this.dataStructure[hashCode])
        return this.dataStructure[hashCode]
    else
        return -1

};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
HashMap.prototype.remove = function (key) {
    if (key < -1)
        return
    else if (key > this.dataStructure.length)
        return
    else
        this.dataStructure[key] = null
    return
};

/**
 * Returns the length of the HashMap
 * @param {number} key
 * @return {void}
 */
HashMap.prototype.size = function () {
    return this.dataStructure.length
}


module.exports = HashMap;