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

document.querySelector('.clipboard4').onclick = function(self) {
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
// 클릭한 위치의 위도는 37.54490486081645 이고, 경도는 127.00042434032412 입니다

const weddinghall = {
  x: 37.54490486081645,
  y: 127.00042434032412,
  position: new kakao.maps.LatLng(this.x, this.y),
  markers: [
    {
      position: this.position
    },
    {
      position: this.position,
      text: '크게보기',
    }
  ],
  container: document.getElementById('map-weddinghall'),
  option: {
    center: this.position,
    level: 3,
    marker: this.markers,
  },
}

const weddinghallMap = new kakao.maps.StaticMap(weddinghall.container, weddinghall.option);

// const afterparty = {
//   x:0,
//   y:0,
// }

// const weddinghallPosition  = new kakao.maps.LatLng(weddinghall.x, weddinghall.y);

// const weddinghallMarkers = [
//   {
//       position: weddinghallPosition,
//   },
//   {
//       position: weddinghallPosition,
//       text: '크게보기', // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다     
//   }
// ];
// const weddinghallMapContainer = document.getElementById('map-weddinghall'), // 지도를 표시할 div
//     weddinghallMapOption = { 
//         center: weddinghallPosition, // 지도의 중심좌표
//         level: 3, // 지도의 확대 레벨
//         marker: weddinghallMarkers,
//     };

// const weddinghallMap = new kakao.maps.StaticMap(weddinghallMapContainer, weddinghallMapOption);
// //map-afterparty