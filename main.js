////////////////////////////////////////////////////////////////////// clipboard_copyto
function Clipboard_CopyTo(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

document.querySelector('.clipboard1').onclick = function(self) {
  let copyVal = self.target.value;
  Clipboard_CopyTo(copyVal);
  alert('계좌번호가 복사되었습니다!');
}

document.querySelector('.clipboard2').onclick = function(self) {
  let copyVal = self.target.value;
  Clipboard_CopyTo(copyVal);
  alert('계좌번호가 복사되었습니다!');
}

document.querySelector('.clipboard3').onclick = function(self) {
  let copyVal = self.target.value;
  Clipboard_CopyTo(copyVal);
  alert('주소가 복사되었습니다!');
}

////////////////////////////////////////////////////////////////////// modal

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


////////////////////////////////////// kakao map - weddinghall
// 예식장
// 클릭한 위치의 위도는 37.54490486081645 이고, 경도는 127.00042434032412 입니다

class myStaticMap{
  constructor(x, y, documentId){
    this.x = x;
    this.y = y;
    this.position = new kakao.maps.LatLng(this.x, this.y);
    this.markers = [
      {
        position : this.position,
      },
      {
        position : this.position,
        text : 'here!',
      }
    ];
    this.mapContainer = document.getElementById(documentId);
    this.mapOption = {
      center: this.position, // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
      marker: this.markers,
    };
    this.map = new kakao.maps.StaticMap(this.mapContainer, this.mapOption);
  }
}

const weddinghall = new myStaticMap(37.54490486081645, 127.00042434032412, 'map-weddinghall');

console.log('weddinghall', weddinghall);
