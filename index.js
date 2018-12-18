

module.exports = (url) => {
  const parse = url.match(/(\w+):\/\//)
  if (parse && parse[1] !== 'http') return url
}
