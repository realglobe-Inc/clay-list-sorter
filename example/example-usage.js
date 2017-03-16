'use strict'

const { sortArray } = require('clay-list-sorter')

{
  let source = [ { name: 'foo', index: 2 }, { name: 'bar', index: 1 } ]
  let sort = 'index'

  let sorted = sortArray(source, sort)
  console.log(sorted) // -> [ { name: 'bar', index: 1 }, { name: 'foo', index: 2 } ]
}
