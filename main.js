// copyVal
function Clipboard_CopyTo(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

document.querySelector('.clipboard').onclick = function(self) {
  let copyVal = self.target.value;
  console.log(copyVal);
  Clipboard_CopyTo(copyVal);
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


