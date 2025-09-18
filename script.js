const toggle = document.getElementById('toggle');
const navigation = document.querySelector('.nav-bar');

toggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
