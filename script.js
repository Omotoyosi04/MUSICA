const toggle = document.getElementById('toggle');
const navigation = document.querySelector('.nav-bar');
const searchForm = document.getElementById('form')
const searchBtn = document.querySelector('.search-btn')
const input = document.querySelector('.search')

toggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('show')
  input.focus()
})