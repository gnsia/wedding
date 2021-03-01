let modal = document.querySelector('#modal');
let thumbnail = document.querySelector('.thumnail');
let imgUrl = document.querySelectorAll('.thumbnail-image');
let modalContent = document.querySelector('.modal-content');
let modalUrl = document.querySelector('.pop').src;

function modalUp(self) {
  // modalContent.style.background-image = 'url(self.src)';
  console.log(self.src);
  modal.style.display = "block";
}