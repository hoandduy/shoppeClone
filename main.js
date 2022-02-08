const options = document.querySelectorAll('.header__search-option li')



for (const option of options) {
  option.addEventListener('click', function() {
    option.classList.toggle('header__search-option-active')
  })
}



