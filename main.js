// copyVal

function copyVal(self) {
  var copyText = document.getElementById("newVal");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}


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



//scroll opacity


addEventListener('scroll', function(e){
  let scrollYPos = Math.round(scrollY/30)/10;
  console.log(scrollYPos);
  opacityUpNames(scrollYPos);
  // opacityUpMessage(scrollYPos-3);
})

//scroll zoom

function opacityUpMessage(num) {
  document.querySelector('.message').style.opacity = num;
}

