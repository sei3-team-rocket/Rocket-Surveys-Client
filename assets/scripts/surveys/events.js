'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// create settings id variable
let sid = ''

// set settings id to the survey that was clicked - for update & delete
const onSettings = event => {
  sid = $(event.target).data('id')
  // console.log(sid)
}

const onTakeSurveys = event => {
  event.preventDefault()
  $('#content').html('')
  api.takeSurveys()
    .then(ui.takeSurveySuccess)
    .catch(console.log)
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
    },
    $('#message').text('Survey updated.')
    )
    .catch(ui.failure)
}

const onDeleteSurvey = (event) => {
  const id = sid
  api.deleteSurvey(id)
    .then(() => {
      onGetSurveys(event)
    },
    $('#message').text('Survey deleted.')
    )
    .catch(ui.failure)
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
  console.log(event.target)
  const surveyId = $(event.target).data('id')
  // const question = $(event.target).data('question')
  // const surveyId = null
  // const yes = $(event.target).data('yes')
  // const no = $(event.target).data('no')
  let questionResponse
  // console.log('yes checked', $('#response_yes').val())
  // console.log('no checked', $('#response_no').val())

  console.log('yes checked', $('input[type=radio][name=answer]:checked').val())
  // console.log('no checked', $('#response_no').val())

  if ($('input[type=radio][name=answer]:checked').val() === 'yes') {
    // yes += 1
    questionResponse = true
  } else if ($('input[type=radio][name=answer]:checked').val() === 'no') {
    // no += 1
    questionResponse = false
  }
  console.log(questionResponse)
  // api.answerSurvey(id, question, yes, no)
  //   .then(console.log(`id = ${id}, questions = ${question}, yes = ${yes}, no = ${no}`))

  api.answerSurvey(surveyId, questionResponse)
    .then(console.log)
    // .then(ui.takeSurveySuccess)

  // api.answerSurvey(yes, no)
  //   .then(console.log)
  //   .catch(console.log)
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
