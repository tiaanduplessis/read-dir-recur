const readDirRecur = require('./')

const createFileTree = require('create-file-tree')
const rimraf = require('rimraf')

const ROOT_DIR = 'bar'

beforeAll(() => {
  createFileTree({
    [ROOT_DIR]: {
      type: 'dir',
      baz: {
        type: 'file',
        ext: 'js'
      },
      ping: {
        type: 'file',
        ext: 'js'
      },
      pong: {
        type: 'file',
        ext: 'md'
      },
      baaa: {
        type: 'dir'
      }
    }
  })
})

test('should read directory recursively', () => {
  expect(readDirRecur).toBeDefined()

  const result = (readDirRecur({ readFile: false, pattern: /.*\.js/, ignore: ['baaa'], base: ROOT_DIR }))

  expect(result.bar).toBeDefined()
  expect(Array.isArray(result.bar)).toBeTruthy()
  expect(result.baaa).toBeUndefined()
  expect(result.bar.length === 2).toBeTruthy()
})

afterAll(() => {
  rimraf.sync(ROOT_DIR)
})
