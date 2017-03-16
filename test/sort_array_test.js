/**
 * Test case for sortArray.
 * Runs with mocha.
 */
'use strict'

const sortArray = require('../lib/sort_array.js')
const { equal, deepEqual } = require('assert')
const co = require('co')

describe('sort-array', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Simple', () => co(function * () {
    let sorted = sortArray([
      { index: 2 }, { index: 3 }, { index: 1 }
    ], 'index')
    deepEqual(sorted, [ { index: 1 }, { index: 2 }, { index: 3 } ])
  }))

  it('Reverse', () => co(function * () {
    let sorted = sortArray([
      { index: 2 }, { index: 3 }, { index: 1 }
    ], '-index')
    deepEqual(sorted, [ { index: 3 }, { index: 2 }, { index: 1 } ])
  }))

  it('Nested', () => co(function * () {
    let sorted = sortArray([
      { v: { index: 2 } }, { v: { index: 3 } }, { v: { index: 1 } }
    ], '-v.index')
    deepEqual(sorted, [ { v: { index: 3 } }, { v: { index: 2 } }, { v: { index: 1 } } ])
  }))

  it('Array', () => co(function * () {
    let sorted = sortArray([
      { name: 'foo', at: new Date('2015/11/12') },
      { name: 'bar', at: new Date('2012/11/12') },
      { name: 'foo', at: new Date('2013/11/12') }
    ], [ 'name', 'at' ])
    equal(sorted[ 0 ].name, 'bar')
    equal(sorted[ 0 ].at.getTime(), new Date('2012/11/12').getTime())
    equal(sorted[ 1 ].name, 'foo')
    equal(sorted[ 1 ].at.getTime(), new Date('2013/11/12').getTime())
    equal(sorted[ 2 ].name, 'foo')
    equal(sorted[ 2 ].at.getTime(), new Date('2015/11/12').getTime())
  }))
})

/* global describe, before, after, it */
