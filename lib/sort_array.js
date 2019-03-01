/**
 * Sort array with condition
 * @function sortArray
 * @param {Object[]} array - Array to sort
 * @param {string|string[]} conditions - Sort condition. Pass the name of property to compare. Use `.` for nested property.
 * @returns {Object[]} Sorted array
 */
'use strict'

const compareValues = require('./comparing/compare_values')

const propValue = (obj, propName) => {
  let value = obj
  if (propName in obj) {
    return obj[propName]
  }
  for (const name of propName.split('.')) {
    const notFound = typeof value === 'undefined' || value === null
    if (notFound) {
      return value
    }
    value = value[name]
  }
  return value
}

/** @lends sortArray */
function sortArray(array, conditions = []) {
  conditions = [].concat(conditions)
    .reduce((conditions, condition) => conditions.concat(condition.split(',')), [])
    .filter(Boolean)
  return array.sort((a, b) => {
    for (let condition of conditions) {
      let reversed = /^-/.test(condition)
      let propName = condition.replace(/^-/, '').trim()
      let compared = compareValues(propValue(a, propName), propValue(b, propName)) * (reversed ? -1 : 1)
      if (compared !== 0) {
        return compared
      }
    }
    return 0
  })
}

module.exports = sortArray
