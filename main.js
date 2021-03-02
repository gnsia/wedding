// modal

let modal = document.querySelector('#modal');
let mainImg = document.querySelector('#main-img')

function modalOpen(self) {
  document.querySelector('.pop').src = self.src;
  console.log(self.src);
  modal.style.display = "flex";
}

function modalClose() {
  modal.style.display = 'none'
}




//scroll

addEventListener('scroll', function(e){
  let scrollYPos = Math.round(scrollY/30)/10;
  console.log(scrollYPos);
  opacityUpNames(scrollYPos);
  // opacityUpMessage(scrollYPos-3);
})

function opacityUpNames(num) {
  document.querySelector('.boy').style.opacity = num;
  document.querySelector('.girl').style.opacity = num;
}

function opacityUpMessage(num) {
  document.querySelector('.message').style.opacity = num;
}