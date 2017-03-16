/**
 * Compare to values
 * @function compareValues
 * @param {*} val1
 * @param {*} val2
 * @returns {number} 0 if equals. Positive if val1 is larger, negative if smaller
 */
'use strict'

/** @lends compareValues */
function compareValues (val1, val2) {
  if (val1 === val2) {
    return 0
  }
  let isDate = val1 instanceof Date && val2 instanceof Date
  if (isDate) {
    return val1 - val2
  }
  let val1AsNumber = Number(val1)
  let val2AsNumber = Number(val2)
  let isNumber = !isNaN(val1AsNumber) && !isNaN(val2AsNumber)
  if (isNumber) {
    return val1AsNumber - val2AsNumber
  }
  let isString = (typeof val1 === 'string') && (typeof val2 === 'string')
  if (isString) {
    return val1.localeCompare(val2)
  }
  return val2 - val1
}

module.exports = compareValues
