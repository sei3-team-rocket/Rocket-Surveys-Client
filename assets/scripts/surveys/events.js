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

const addHandlers = () => {
  $('body').on('click', '.settings', onSettings)
  $('body').on('submit', '.edit-survey', onUpdateSurvey)
  $('body').on('click', '.delete-survey-button', onDeleteSurvey)
}

module.exports = {
  addHandlers,
  onGetSurveys
}
