const fieldCategoryButtonList = document.querySelectorAll('.category-item')

function toggleFieldContents() {
  let currentActiveCategory = document.querySelector('.category-item.is-active')
  let currentActiveContent = document.querySelector('.field-explain.is-active')

  if (currentActiveCategory !== fieldCategoryButtonList) {
    const fieldContent = document.querySelector(
      `#${this.getAttribute('aria-labelledby')}`
    )

    this.classList.add('is-active')
    fieldContent.classList.add('is-active')
    currentActiveCategory.classList.remove('is-active')
    currentActiveContent.classList.remove('is-active')
    currentActiveCategory = this
    currentActiveContent = fieldContent
  }
}

fieldCategoryButtonList.forEach((button) => {
  button.addEventListener('click', toggleFieldContents)
})
