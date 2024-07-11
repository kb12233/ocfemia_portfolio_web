const hambuger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const kb = document.querySelector('#kb');
const nav = document.querySelector('#nav');
const hamburger_options = document.querySelectorAll('#hamburger-option');

hambuger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    kb.classList.toggle('text-white')
    // kb.classList.remove('border-gray-200')
    // hambuger.classList.toggle('bg-white')
});

hamburger_options.forEach(option => {
    option.addEventListener('click', () => {
        menu.classList.toggle('hidden')
        kb.classList.toggle('text-white')
    });
});