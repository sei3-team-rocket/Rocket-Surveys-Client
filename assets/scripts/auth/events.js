'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
// const ui = require('./ui')

// const onSignUp = event => {
//   event.preventDefault()
//   console.log('sign up submitted')
//
//   const form = event.target
//   const formData = getFormFields(form)
//   api.signUp(formData)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }

// const onSignIn = event => {
//   event.preventDefault()
//   console.log('login successful')
//
//   const form = event.target
//   const formData = getFormFields(form)
//   api.signIn(formData)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }

const onChangePassword = event => {
  event.preventDefault()
  console.log('Change successful!')

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
  //   .then(ui.changePassSuccess)
  //   .catch(ui.changePassFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
  //   .then(ui.signOutSuccess)
  //   .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
