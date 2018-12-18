

module.exports = (url) => {
  const parse = url.split('://')
  if (parse.length < 2) return
  if (parse[0] !== 'http') return url
}
