const burger = document.querySelector('.burger');
const kreuz = document.querySelector('.kreuz');
const nav = document.querySelector('.nav-list');

function navSlide() {

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })

    kreuz.addEventListener('click', () => {
        nav.classList.remove('nav-active');

    })

}

navSlide();
