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
  // Since this is a click event from the modal
  // event.preventDefault() isn't necessary here
  // Start by getting form data instead
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  $('#create-survey-modal').modal('hide')
}

const addHandlers = () => {
  $('body').on('click', '.settings', onSettings)
  $('body').on('submit', '.edit-survey', onUpdateSurvey)
  $('body').on('click', '.delete-survey-button', onDeleteSurvey)
  $('#create-survey').on('submit', onCreateSurvey)
}

module.exports = {
  addHandlers,
  onGetSurveys
}
