const list = []

module.exports = {
  add: function (student) {
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  get: function (index) {
    return list[index]
  },
  getAll: function () {
    return list
  },
  delete: function (index) {
    list.splice(index, 1)
  }
}
