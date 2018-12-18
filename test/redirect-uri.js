/**
 * Dependencies
 */

const test = require('tape')
const validate = require('..')

test('should not validate http urls', assert => {
  assert.plan(1)
  assert.equal(validate('http://www.helloworld.com') == null, true)
})


test('should validate https urls', assert => {
  assert.plan(1)
  assert.equal(validate('https://www.helloworld.com'), 'https://www.helloworld.com')
})
