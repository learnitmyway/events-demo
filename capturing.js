document.body.addEventListener(
  'click',
  () => console.log('body clicked in capture phase'), // 1
  true
)
document.querySelector('section').addEventListener(
  'click',
  () => console.log('section clicked in capture phase'), // 2
  true
)
document.querySelector('button').addEventListener(
  'click',
  () => console.log('button clicked in capture phase'), // 3
  true
)
document.querySelector('button').addEventListener(
  'click',
  () => console.log('button clicked in target phase') // 4
)
document.querySelector('section').addEventListener(
  'click',
  () => console.log('section clicked in target phase') // 5
)
document.body.addEventListener(
  'click',
  () => console.log('body clicked in target phase') // 6
)
