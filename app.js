let ouvrir = document.querySelector('.ouvrir');
let menu = document.querySelector('.menu');
let fermer = document.querySelector('.fermer');
let burger = document.querySelector('.burger')


burger.addEventListener('click', function() {
    menu.classList.toggle('show');
    ouvrir.classList.toggle('hidden');
    fermer.classList.toggle('show');
})