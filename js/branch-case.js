const branchCategoryButtonList = document.querySelectorAll('.category-item')

function toggleBranchContents() {
  let currentActiveCategory = document.querySelector('.category-item.is-active')
  let currentActiveContent = document.querySelector(
    '.branch-case-list.is-active'
  )

  if (currentActiveCategory !== branchCategoryButtonList) {
    const branchContent = document.querySelector(
      `#${this.getAttribute('aria-labelledby')}`
    )

    this.classList.add('is-active')
    branchContent.classList.add('is-active')
    currentActiveCategory.classList.remove('is-active')
    currentActiveContent.classList.remove('is-active')
    currentActiveCategory = this
    currentActiveContent = branchContent
  }
}

branchCategoryButtonList.forEach((button) => {
  button.addEventListener('click', toggleBranchContents)
})
