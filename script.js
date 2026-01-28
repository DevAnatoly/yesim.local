// Смена цвета фона
// const btn = document.querySelector('#themeToggle');
// btn.onclick = () => document.body.style.backgroundColor = 
//   document.body.style.backgroundColor === 'rgb(26, 26, 26)' ? '#fff' : '#1a1a1a';
const btn = document.querySelector('#themeToggle');
const icon = btn.querySelector('img');

btn.addEventListener('click', () => {
  const isDark = document.body.style.backgroundColor === 'rgb(26, 26, 26)';
  
  if (isDark) {
    document.body.style.backgroundColor = '#ffffff';
    icon.className = 'fa-moon';
    btn.innerHTML = '<img class="theme__icon" src="./assets/icons/light_mod.svg" alt="light_mod">';
  } else {
    document.body.style.backgroundColor = '#1a1a1a';
    icon.className = 'fa-sun';
    btn.innerHTML = '<img class="theme__icon" src="./assets/icons/dark_mod.svg" alt="dark_mod">';
  }
});


// Бургер-меню
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
  });
}
// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  if (!e.target.closest('.header')) {
    nav?.classList.remove('active');
    burger?.classList.remove('active');
  }
});


// Аккордеон FAQ
document.querySelectorAll('.faq__item-question').forEach(question => {
  question.addEventListener('click', () => {
    question.parentElement.classList.toggle('active');
  });
});

// login menu 

const loginBtn = document.querySelector('.login');
const accountMenu = document.querySelector('.account');

// Открыть/закрыть при клике на кнопку
loginBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    accountMenu.classList.toggle('active');
});

// Закрыть при клике в любое другое место
document.addEventListener('click', () => {
    accountMenu.classList.remove('active');
});

// Не дать клику по самому меню закрыть его
accountMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});