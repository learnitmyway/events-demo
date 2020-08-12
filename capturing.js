// Inspired by https://javascript.info/bubbling-and-capturing

function logCapturedEvents(elem) {
  elem.addEventListener(
    'click',
    (e) => console.log(`Capturing: ${elem.tagName}`),
    true
  )
}

function logBubbledEvents(elem) {
  elem.addEventListener('click', (e) =>
    console.log(`Bubbling: ${elem.tagName}`)
  )
}

for (let elem of document.querySelectorAll('*')) {
  logCapturedEvents(elem)
  logBubbledEvents(elem)
}
