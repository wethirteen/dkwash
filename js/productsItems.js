const productsList = document.querySelectorAll('.products-item')

function toggleProductsItem() {
  let currentActiveItem = document.querySelector('.products-item.is-active')

  if (currentActiveItem !== productsList) {
    this.classList.add('is-active')
    currentActiveItem.classList.remove('is-active')
    currentActiveItem = this
  }
}

productsList.forEach((button) => {
  button.addEventListener('pointerdown', toggleProductsItem)
})
