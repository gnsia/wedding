////////////////////////////////////////////////////////ClipboardCopy

function clipboardCopyTo(value) {
  let tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

document.querySelector('.clipboard1').onclick = function(self) {
  let copyVal = self.target.innerText;
  clipboardCopyTo(copyVal);
  alert('복사완료');
}

document.querySelector('.clipboard2').onclick = function(self) {
  let copyVal = self.target.value;
  clipboardCopyTo(copyVal);
  alert('복사완료');
}

document.querySelector('.clipboard3').onclick = function(self) {
  let copyVal = self.target.value;
  clipboardCopyTo(copyVal);
  alert('복사완료');
}

////////////////////////////////////////////////////////////////////// scroll

let scrollYPos = 0;
window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY/25);
    console.log(scrollYPos);
    document.querySelector('.hello').style.opacity = 1;
    document.querySelector('.hello').style.opacity -= (scrollYPos / 100);
    
    if (document.querySelector('.hello').style.opacity < 0.95) {
      document.querySelector('.notice').style.display = 'none';
    } else {
      document.querySelector('.notice').style.display = 'inline';
    }

    if (document.querySelector('.hello').style.opacity < 0.15) {
      document.querySelector('.img-message-1').style.opacity = (scrollYPos / 200);
    } else {
      document.querySelector('.img-message-1').style.opacity = 0;
    }

})




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
