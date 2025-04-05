document.querySelector('.menu-button').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.add('is-active')
  document.querySelector('.overlay').classList.add('is-active')
})

document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.overlay').classList.remove('is-active')
  document.querySelector('.sidebar').classList.remove('is-active')
  document.querySelector('.inquery-form').classList.remove('is-active')
  document.querySelector('.branch-modal').classList.remove('is-active')
})

document
  .querySelector('.inquery-button')
  .addEventListener('click', function () {
    document.querySelector('.inquery-form').classList.add('is-active')
    document.querySelector('.overlay').classList.add('is-active')
  })

document.querySelector('.close-button').addEventListener('click', function () {
  document.querySelector('.inquery-form').classList.remove('is-active')
  document.querySelector('.overlay').classList.remove('is-active')
})

document
  .querySelector('.simple-inquery-button')
  .addEventListener('click', function () {
    document.querySelector('.simple-inquery-form').classList.toggle('is-active')
  })
