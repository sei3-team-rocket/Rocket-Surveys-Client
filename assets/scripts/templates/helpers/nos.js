'use strict'

const nos = array => {
  const responses = array.filter(res => res.answer === false)
  return responses.length
}

module.exports = nos
