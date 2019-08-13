'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const surveyEvents = require('./surveys/events.js')

// going to colaberate with Béthy for sign-up/sign-in
$(() => {
  // // your JS code goes here

  // all forms hidden on page load
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('#sign-out').hide()

  // nav bar items hidden on page load
  $('.dropdown').hide()
  $('.change-password-top').hide()

  // show forms when needed
  $('#show-sign-up').on('click', authEvents.showSignUp)
  $('#show-sign-in').on('click', authEvents.showSignIn)

  // auth form events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.back').on('click', event => {
    $('.auth-forms').hide()
    $('#main-auth').show()
  })

  // Show Create Survey modal from menu item click
  $('#create-survey-link').on('click', () => $('#create-survey-modal').modal('show'))
  $('#take-surveys').on('click', surveyEvents.onTakeSurveys)
  $('#show-my-surveys').on('click', surveyEvents.onGetSurveys)
  $('.hide-on-signed-out').hide()
  // pull in event handlers from surveys/events.js
  surveyEvents.addHandlers()
})
