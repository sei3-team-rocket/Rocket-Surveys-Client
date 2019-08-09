'use strict'

const showSurveysTemplate = require('../templates/view-surveys.handlebars')

const getSurveysSuccess = (data) => {
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  $('.content').show()
  $('.content').html(showSurveysHtml)
  $('#auth').hide()
}

const deleteSurveySuccess = (data) => {
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  $('.content').html(showSurveysHtml)
  $('#message').text('Survey deleted.')
}

const updateSurveySuccess = (data) => {
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  $('.content').html(showSurveysHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getSurveysSuccess,
  deleteSurveySuccess,
  updateSurveySuccess,
  failure
}
