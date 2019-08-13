'use strict'

const config = require('../config')
const store = require('../store')

const createSurvey = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
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

const takeSurveys = function () {
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

// const answerSurvey = function (id, question, yes, no) {
//   return $.ajax({
//     url: config.apiUrl + '/surveys/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       survey: {
//         question: question,
//         yes: JSON.stringify(yes),
//         no: JSON.stringify(no)
//       }
//     }
//   })
// }

const answerSurvey = function (surveyId, questionResponse) {
  return $.ajax({
    url: config.apiUrl + '/responses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      response: {
        answer: questionResponse,
        survey: surveyId
      }
    }
  })
}

module.exports = {
  createSurvey,
  getSurveys,
  deleteSurvey,
  updateSurvey,
  takeSurveys,
  answerSurvey
}
