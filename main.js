let modal = document.querySelector('#modal');
let mainImg = document.querySelector('#main-img')
// let scrollYPos = Math.around(scrollY);

function modalOpen(self) {
  document.querySelector('.pop').src = self.src;
  console.log(self.src);
  modal.style.display = "flex";
}

function modalClose() {
  modal.style.display = 'none'
}

addEventListener('scroll', function(e){
  let scrollYPos = Math.round(scrollY/30)/10;
  console.log(scrollYPos);
  streching(scrollYPos);
})

function streching(num) {
  document.querySelector('.boy').style.opacity = num;
  document.querySelector('.girl').style.opacity = num;
}