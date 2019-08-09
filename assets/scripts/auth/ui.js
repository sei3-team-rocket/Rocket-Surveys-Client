'use strict'

const store = require('./../store')
const surveyEvents = require('../surveys/events.js')

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#authNotification').text('successfully signed up')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#sign-up').hide()
}

const signUpFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('sign-up failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const signInSuccess = (data) => {
  $('form').trigger('reset')
  $('#authNotification').text('sign-in successful')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  store.user = data.user
  // hide Sign up/ sign in once signed in
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#main-auth').hide()
  $('#not-signed-in').hide()
  // once signed in show change password and sign Out
  $('#change-password').show()
  $('#top-sign-out').show()
  $('#sign-out').show()
  $('.dropdown').show()
  $('.change-password-top').show()
  // show surveys on sign in
  surveyEvents.onGetSurveys()
}

const signInFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('sign-in failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#authNotification').text('password changed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}
const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('password change failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  $('#authNotification').text('signed out')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#main-auth').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.dropdown').hide()
  $('#not-signed-in').show()
  $('.change-password-top').hide()
}

const signOutFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('failed to sign out')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
