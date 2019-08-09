'use strict'

const config = require('../config')
const store = require('../store')

const getSurveys = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteSurvey = function (id) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    // url: `${config.apiUrl}/books/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = function (id, formData) {
  console.log(`id is ${id}`)
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'survey': {
        'question': formData.survey.question
      }
    }
  })
}

module.exports = {
  getSurveys,
  deleteSurvey,
  updateSurvey
}
