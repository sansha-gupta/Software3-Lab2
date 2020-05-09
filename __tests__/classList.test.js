// eslint-env jest;

const classList = require('../classList')

describe('Class List Functionality', () => {
  test('should add students to the class list', () => {
    const input = ['Student1', 'Student2']

    input.forEach(element => {
      classList.add(element)
    })
    const list = classList.getAll()
    expect(list).toContain(input[0])
    expect(list).toContain(input[1])
    expect(list).toHaveLength(2)
  })
  test('should get all students from class list', () => {
    const output = ['Student1', 'Student2']

    expect(classList.getAll()).toEqual(output)
  })
  test('should get a specific student from given index', () => {
    const inputIndex = 0
    const output = 'Student1'

    expect(classList.get(inputIndex)).toEqual(output)
  })
  test('should be able to edit a student entry', () => {
    const input = { studentId: 0, student: 'Sansha' }

    classList.edit(input.student, input.studentId)
    expect(classList.get(0)).toEqual('Sansha')
  })
  test('should delete student from class list', () => {
    const input = { studentId: 0 }

    // const student = 'Student1'
    // classList.add(student)
    classList.delete(input.studentId)
    expect(classList.getAll()).not.toContain('Sansha')
    expect(classList.getAll()).toHaveLength(1)
  })
})
