document
  .querySelector('.gnb-sub.lg-only')
  .addEventListener('mouseenter', function () {
    document.querySelector('.gnb-sub.lg-only').classList.add('is-active')
  })

document
  .querySelector('.gnb-nav.lg-only')
  .addEventListener('mouseleave', function () {
    document.querySelector('.gnb-sub.lg-only').classList.remove('is-active')
  })

document
  .querySelector('.gnb-sub.lg-only')
  .addEventListener('mouseleave', function () {
    document.querySelector('.gnb-sub.lg-only').classList.remove('is-active')
    document
      .querySelector('.gnb-nav-item.is-hover')
      .classList.remove('is-hover')
  })

function gnbItem(i) {
  document
    .querySelectorAll('.gnb-nav-item')
    [i].addEventListener('mouseenter', function () {
      document.querySelector('.gnb-sub.lg-only').classList.add('is-active')

      for (j = 0; j < 5; j++) {
        document.querySelectorAll('.gnb-sub-list')[j].style.visibility =
          'hidden'
        document
          .querySelectorAll('.gnb-nav-item')
          [j].classList.remove('is-hover')

        if (j == i) {
          document.querySelectorAll('.gnb-sub-list')[j].style.visibility =
            'visible'
          document
            .querySelectorAll('.gnb-nav-item')
            [j].classList.add('is-hover')
        }
      }
    })
}

gnbItem(0)
gnbItem(1)
gnbItem(2)
gnbItem(3)
gnbItem(4)
