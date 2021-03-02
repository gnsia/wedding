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
  console.log(scrollY);
  opacityUpNames(scrollYPos);
  opacityUpMessage(scrollY);
})

function opacityUpNames(num) {
  document.querySelector('.boy').style.opacity = num;
  document.querySelector('.girl').style.opacity = num;
}

function opacityUpMessage(num) {
  if (num > 1000) {
    document.querySelector('.message').style.position = 'sticky';
    document.querySelector('.message').style.top = '5%';
  } else {
    document.querySelector('.message').style.position = 'relative';
    document.querySelector('.message').style.top = '1000px';
  }
  if (num > 777) {
    document.querySelector('i').style.color = 'rgba(255, 0, 0,0.4)';
    document.querySelector('.heart').style.opacity = 0;
  } else {
    document.querySelector('i').style.color = 'lightsteelblue';
    document.querySelector('.heart').style.opacity = 1;
  }
}