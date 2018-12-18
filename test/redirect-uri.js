/**
 * Dependencies
 */

const test = require('tape')
const validate = require('..')

test('should not validate http urls', assert => {
  assert.plan(1)
  assert.equal(validate('http://www.helloworld.com') == null, true)
})
