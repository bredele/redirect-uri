

module.exports = (url) => {
  const parse = url.split('://')
  if (parse[0] !== 'http') return url
}
