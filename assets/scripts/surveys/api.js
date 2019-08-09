'use strict'

const config = require('../config')
const store = require('../store')

const createSurvey = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSurvey,
  getSurveys,
  deleteSurvey,
  updateSurvey
}
