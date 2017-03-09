'use strict'

const questions = {
  'Como te llamas?': 'Ernesto',
  'Donde vivis?': 'Argentina',
  'Cual es tu trabajo?': 'Desarrollador Web',
  'default': 'No comprendo tú pregunta.'
}

$('.form-chat').submit((event) => {
  event.preventDefault()

  const targetElement = event.target
  const targetElementValue = targetElement.inputChat.value

  $('.history-chat').append(`Yo: ${targetElementValue}`)
  $('.history-chat').append('<br />')
  if (questions[targetElementValue] != undefined) {
    $('.history-chat').append(`Pepe: ${questions[targetElementValue]}`)
  } else {
    $('.history-chat').append(`Pepe: ${questions['default']}`)
  }
  $('.history-chat').append('<br />')
})