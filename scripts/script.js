const modalButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('.close');
const modal = document.querySelector('.modal');
function toggleModal(){

modal.classList.toggle('is-hidden');

}

modalButton.addEventListener('click',function () {
    toggleModal()
});
closeButton.addEventListener('click',function (e) {
    e.preventDefault();
    toggleModal()
});
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    modal.classList.add('is-hidden');
  }
});