/**
 * Sorter functions for ClayDB list
 * @module clay-list-sorter
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get sortArray () { return d(require('./sort_array')) }
}
