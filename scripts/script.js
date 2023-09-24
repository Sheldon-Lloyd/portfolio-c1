const modalButton = getElementById(modal-button)
const modal = document.querySelector('.modal');

function toggleModal(e){

e.classList.toggle('is-hidden');

}

modalButton.addEventListener('click',toggleModal(modal))