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

test('should vaidate HTTPS URI without path', assert => {
  assert.plan(1)
  assert.equal(validate('https://'), 'https://')
})


test('should not validate HTTPS URI without ://', assert => {
  assert.plan(3)
  assert.equal(validate('https') == null, true)
  assert.equal(validate('https:') == null, true)
  assert.equal(validate('https:/') == null, true)
})

test('should validate URI with protocols different than HTTP', assert => {
  assert.plan(1)
  assert.equal(validate('demoapp://www.helloworld.com'), 'demoapp://www.helloworld.com')
})

test('should validate native URI without path', assert => {
  assert.plan(1)
  assert.equal(validate('demoapp://'), 'demoapp://')
})

test('should not validate URIs without protocols', assert => {
  assert.plan(1)
  assert.equal(validate('www.helloworld.com') == null, true)
})

test('should not validate wrong URIs without protocols', assert => {
  assert.plan(1)
  assert.equal(validate('www.helloworld.com/://what') == null, true)
})
