const path = require('path')
const fs = require('fs')

// Loosly based on: https://gist.github.com/victorsollozzo/4134793
function readRecursive (base, pattern, ignore, result, read) {
  const canIgnore = current => !ignore.includes(current)
  const files = fs.readdirSync(base).filter(canIgnore)
  result = result || []

  files.forEach(file => {
    const newBase = path.join(base, file)

    if (fs.statSync(newBase).isDirectory()) {
      result = readRecursive(newBase, pattern, ignore, result, read)
    } else if (pattern.test(file)) {
      const details = {
        base,
        name: file,
        ext: path.extname(newBase),
        size: fs.statSync(newBase).size
      }

      if (read) {
        details.content = fs.readFileSync(newBase)
      }

      result.push(details)
    }
  })

  return result
}

module.exports = function readDirRecur (opts = {}) {
  let { base = process.cwd(),
    readFile = false,
    pattern = /.*/,
    ignore = []
  } = opts

  base = Array.isArray(base) ? base : [base]

  const result = base.reduce((acc, current) => {
    acc[current] = readRecursive(current, pattern, ignore, [], readFile)
    return acc
  }, {})

  return result
}
