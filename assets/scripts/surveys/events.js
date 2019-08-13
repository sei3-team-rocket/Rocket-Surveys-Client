'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// create settings id variable
let sid = ''

// set settings id to the survey that was clicked - for update & delete
const onSettings = event => {
  sid = $(event.target).data('id')
}

const onTakeSurveys = event => {
  event.preventDefault()
  $('#content').html('')
  api.takeSurveys()
    .then(ui.takeSurveySuccess)
    .catch(ui.failure)
}

const onGetSurveys = (event) => {
  api.getSurveys()
    .then(ui.getSurveysSuccess)
    .catch(ui.failure)
}

// update survey
const onUpdateSurvey = (event) => {
  event.preventDefault()
  const id = sid
  const form = event.target
  const formData = getFormFields(form)
  api.updateSurvey(id, formData)
    .then(() => {
      // need to "re-get" to see newly updated surveys
      onGetSurveys(event)
      $('#settings-modal').modal('hide')
      $('.modal-backdrop').hide()
    },
    $('#authNotification').text('Survey updated.')
    )
    .then(setTimeout(function () {
      $('#authNotification').text('')
    }, 2000))
    // .then($('#change-password-modal').modal('hide'))
    // $('.modal-backdrop').hide()
    .catch(ui.failure)
}

const onDeleteSurvey = (event) => {
  const id = sid
  api.deleteSurvey(id)
    .then(() => {
      onGetSurveys(event)
      $('.modal-backdrop').hide()
    })
    .then(ui.deleteSurveySuccess)
    .catch(ui.deleteSurveyFailure)
}

const onCreateSurvey = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createSurvey(formData)
    .then(ui.createSurveySuccessful)
    .then(() => onGetSurveys(event))
    .catch(ui.failure)
}

const onAnswerSurvey = event => {
  event.preventDefault()
  const surveyId = $(event.target).data('id')

  let questionResponse

  if ($('input[type=radio][name=answer]:checked').val() === 'yes') {
    // yes += 1
    questionResponse = true
    $('#authNotification').text('Response recorded.')
  } else if ($('input[type=radio][name=answer]:checked').val() === 'no') {
    // no += 1
    questionResponse = false
    $('#authNotification').text('Response recorded.')
  } else {
    $('#authNotification').text('Please enter a response.')
  }
  api.answerSurvey(surveyId, questionResponse)
    .then(() => {
      onTakeSurveys(event)
      $('#settings-modal').modal('hide')
    })
    // .then($('#authNotification').text('Response recorded.'))
    .then(setTimeout(function () {
      $('#authNotification').text('')
    }, 2000))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('body').on('click', '.settings', onSettings)
  $('body').on('submit', '.edit-survey', onUpdateSurvey)
  $('body').on('click', '.delete-survey-button', onDeleteSurvey)
  $('#create-survey').on('submit', onCreateSurvey)
  $('body').on('click', '.survey-response', onAnswerSurvey)
}

module.exports = {
  addHandlers,
  onGetSurveys,
  onTakeSurveys,
  onAnswerSurvey
}
