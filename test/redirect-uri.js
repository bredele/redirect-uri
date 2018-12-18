/**
 * Dependencies
 */

const test = require('tape')
const validate = require('..')

test('should not validate HTTP URI', assert => {
  assert.plan(1)
  assert.equal(validate('http://www.helloworld.com') == null, true)
})

test('should validate HTTPS URI', assert => {
  assert.plan(1)
  assert.equal(validate('https://www.helloworld.com'), 'https://www.helloworld.com')
})

test('should validate URI with protocols different than HTTP', assert => {
  assert.plan(1)
  assert.equal(validate('demoapp://www.helloworld.com'), 'demoapp://www.helloworld.com')
})

test('should not validate URIs without protocols', assert => {
  assert.plan(1)
  assert.equal(validate('www.helloworld.com') == null, true)
})

test('should not validate wrong URIs without protocols', assert => {
  assert.plan(1)
  assert.equal(validate('www.helloworld.com/://what') == null, true)
})
