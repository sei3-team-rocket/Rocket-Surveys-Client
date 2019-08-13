'use strict'

const yesses = array => {
  const responses = array.filter(res => res.answer === true)
  return responses.length
}

module.exports = yesses
