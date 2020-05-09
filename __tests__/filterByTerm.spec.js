const filterByTerm = require('../src/filterByTerm')

describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    // input for function
    const input = [
      { id: 1, url: 'https://ww.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ]

    // expected output
    const output = [{ id: 3, url: 'https://www.link3.dev' }]

    // check for expected output

    expect(filterByTerm(input, 'link')).toEqual(output)
    expect(filterByTerm(input, 'LINK')).toEqual(output) // new test
  })
})
