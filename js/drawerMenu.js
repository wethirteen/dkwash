function drawerMenu(i) {
  const selectItem = document.querySelectorAll('.drawer-menu')[i]

  selectItem.addEventListener('click', function () {
    selectItem.classList.toggle('is-active')
  })
}

drawerMenu(0)
drawerMenu(1)
drawerMenu(2)
drawerMenu(3)
drawerMenu(4)
