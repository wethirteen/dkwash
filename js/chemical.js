const equipButton = document.querySelector('.equip')
const detailButton = document.querySelector('.detail')
const chemicalCategory = document.querySelector('.chemical-nav')
const equipContents = document.querySelectorAll('.chemical-list')[0]
const detailContents = document.querySelectorAll('.chemical-list')[1]

const chemicalButton = document.querySelectorAll('.chemical-item')
const closeButton = document.querySelectorAll('.close-button')
const productModal = document.querySelector('.product-modal')
const overlay = document.querySelector('.overlay')

function toggleDetail() {
  chemicalCategory.classList.add('is-detail')
  equipContents.classList.remove('is-active')
  detailContents.classList.add('is-active')
}

function toggleEquip() {
  chemicalCategory.classList.remove('is-detail')
  detailContents.classList.remove('is-active')
  equipContents.classList.add('is-active')
}

detailButton.addEventListener('click', toggleDetail)
equipButton.addEventListener('click', toggleEquip)

function openChemicalModal() {
  const chemicalModal = document.querySelector(
    `#${this.getAttribute('aria-labelledby')}`
  )

  productModal.classList.add('is-active')
  chemicalModal.classList.add('is-active')
  overlay.classList.add('is-active')
}

chemicalButton.forEach((button) => {
  button.addEventListener('click', openChemicalModal)
})

function closeModal() {
  const currentModal = document.querySelector('.product-modal-item.is-active')

  productModal.classList.remove('is-active')
  currentModal.classList.remove('is-active')
  overlay.classList.remove('is-active')
}

closeButton.forEach((button) => {
  button.addEventListener('click', closeModal)
})
