'use strict'

const questions = {
  'Como te llamas?': 'Ernesto',
  'Donde vivis?': 'Argentina',
  'Cual es tu trabajo?': 'Desarrollador Web'
}

$('.form-chat').submit((event) => {
  event.preventDefault()

  const targetElement = event.target
  const targetElementValue = targetElement.inputChat.value

  $('.history-chat').append(`Yo: ${targetElementValue}`)
  $('.history-chat').append('<br />')
  $('.history-chat').append(`Pepe: ${questions[targetElementValue]}`)
  $('.history-chat').append('<br />')
})