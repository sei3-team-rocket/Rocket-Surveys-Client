'use strict'

const takeSurveysTemplate = require('../templates/take-surveys.handlebars')
const showSurveysTemplate = require('../templates/view-surveys.handlebars')
const store = require('./../store')

const getSurveysSuccess = data => {
  $('.content').html('')
  const usersSurveys = data.surveys.filter(survey => survey.owner === store.user._id)
  const showMySurveys = showSurveysTemplate({ surveys: usersSurveys })
  $('.content').show()
  $('.content').html(showMySurveys)
  $('#auth').hide()
}

const takeSurveySuccess = data => {
  $('.content').html('')
  const otherPeoplesSurveys = data.surveys.filter(survey => survey.owner !== store.user._id)
  const showOthersSurveys = takeSurveysTemplate({ surveys: otherPeoplesSurveys })
  // const showOthersSurveys = takeSurveysTemplate({ surveys: data.surveys })
  $('.content').html(showOthersSurveys)
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
  takeSurveySuccess,
  failure
}
