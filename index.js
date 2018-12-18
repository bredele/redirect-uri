
/**
 * Loose URI validation.
 *
 * Validate only URIs that specified a protocole which is not HTTP.
 *
 * @param {String} url
 * @return {String}
 * @api public
 */

module.exports = (url) => {
  const parser = url.match(/(\w+):\/\//)
  if (parser && parser[1] !== 'http') return url
}
