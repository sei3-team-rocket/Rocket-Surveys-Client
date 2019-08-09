'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePassSuccess)
    .then($('form').trigger('reset'))
    .then($('#exampleModal').modal('hide'))
    .catch(ui.changePassFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Ensuring only one form is being shown at a time
const clearAuthpads = () => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const showSignUp = event => {
  clearAuthpads()
  $('#sign-up').show()
}

const showSignIn = event => {
  clearAuthpads()
  $('#sign-in').show()
}

// probably dont need this if we are going to use a modal
// const showChangePassword = event => {
//   clearAuthpads()
//   $('#sign-out').show()
//   $('#change-password').show()
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  showSignUp,
  showSignIn
}
