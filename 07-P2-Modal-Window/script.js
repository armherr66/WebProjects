'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const toggleModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', toggleModal);

btnCloseModal.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        toggleModal();
    }
});