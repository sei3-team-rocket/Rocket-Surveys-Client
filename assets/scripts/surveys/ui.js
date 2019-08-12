'use strict'

const takeSurveysTemplate = require('../templates/take-surveys.handlebars')
const showSurveysTemplate = require('../templates/view-surveys.handlebars')
const store = require('./../store')

const getSurveysSuccess = (data) => {
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  $('.content').show()
  $('.content').html(showSurveysHtml)
  $('#auth').hide()
}

const takeSurveySuccess = data => {
  $('.content').html('')
  console.log('this is the store user id', store.user._id)
  let userID = store.user._id
  showSurveysTemplate({ surveys: data.surveys, userID: userID })
  // console.log('this is survey info', data.surveys[0].owner)
  // for (let i = 0; i < data.surveys.length; i++) {
  //   if (data.surveys[i].owner !== store.user._id) {
  //     console.log(data.surveys[i].owner)
  //     const takeSurveysHtml = takeSurveysTemplate({ surveys: data.surveys })
  //     console.log(takeSurveys)
  //     $('.content').html(takeSurveysHtml)
  //   }
  // }
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
