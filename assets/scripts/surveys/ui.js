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

const createSurveySuccessful = () => {
  // Close the modal after a submit event
  $('#create-survey-modal').modal('hide')

  // Show a success modal
  $('#create-success-modal').modal('show')
  $('form').trigger('reset')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getSurveysSuccess,
  deleteSurveySuccess,
  updateSurveySuccess,
  createSurveySuccessful,
  failure
}
