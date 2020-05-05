'use strict'

window.addEventListener('load', function () {
  console.log('page loaded')

  // Creating a new student
  const addButton = document.getElementById('addStudentButton')

  addButton.addEventListener('click', async () => {
    console.log('here i am creating a student')
    const studentInput = document.getElementById('newStudentInput')
    const studentInfo = { student: studentInput.value } // give the JSON.stringify() function a valid JS object to convert

    fetch('/class/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // use 'text/plain;charset=utf-8' if body is string
      },
      body: JSON.stringify(studentInfo)
    })
      .then(function (response) {
        if (response.ok) {
          return response.json()
        } else {
          console.log('issue with response')
        }
      })
      .then(
        this.location.reload()
      )
      .catch(function (e) {
        alert(e)
      })
  })

  // Deleting a student
  const deleteButton = document.getElementById('deleteStudentButton')

  deleteButton.addEventListener('click', async () => {
    const input = document.getElementById('deleteStudentInput').value
    const info = { studentID: input }

    fetch('/class/api/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(function (response) {
        if (response.ok) {
          return response.json()
        } else {
          throw 'Failed! Response not valid'
        }
      })
      .then(
        this.location.reload()
      )
  })

  // Editing a new student
  const editButton = document.getElementById('editStudentButton')

  editButton.addEventListener('click', async () => {
    console.log('here i am creating a student')
    const input = document.getElementById('editStudentInput')
    const editInput = document.getElementById('editStudentNameInput')

    const info = { studentID: input.value, student: editInput.value }

    fetch('/class/api/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(function (response) {
        if (response.ok) {
          return response.json()
        } else {
          throw 'Failed! Response not valid'
        }
      })
      .then(
        this.location.reload()
      )
      .catch(function (e) {
        alert(e)
      })
  })
})

// Displaying a list of all the students

fetch('/class/api/list') // Returns a Promise for the GET request
  .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok) {
      return response.json() // Return the response parse as JSON if code is,→ valid
    } else {
      throw 'Failed to load classlist: response code invalid!'
    }
  })
  .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
    const studentList = document.getElementById('classList')

    // Iterate through all students
    data.forEach(function (student) {
      const li = document.createElement('li')
      li.classList.add('ml-3')
      const liText = document.createTextNode(student)
      // Append the class to the list element
      // li.className += 'student'

      // Append list text to list item and list item to list
      li.appendChild(liText)
      studentList.appendChild(li)
    })
  })
  .catch(function (e) { // Process error for request
    alert(e)
    // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    // catch() function.
  })
