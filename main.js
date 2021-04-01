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

    document.querySelector('.hello').style.opacity = 1;
    console.log(scrollYPos);

    let scrollYPosForHelloFadeout = (scrollYPos / 100) * -1;
    let scrollYPosForMessage1Fadein = ((scrollYPos - 100) / 100);
    let scrollYPosForMessage1Fadeout = ((scrollYPos - 200) / 100);
    let scrollYPosForMessage2Fadein = ((scrollYPos - 300) / 100);
    let scrollYPosForMessage2Fadeout = ((scrollYPos - 400) / 100);
    let scrollYPosForMessage3Fadein = ((scrollYPos - 500) / 100);
    let scrollYPosForMessage3Fadeout = ((scrollYPos - 600) / 100);
    let scrollYPosForMessage4Fadein = ((scrollYPos - 700) / 100);
    let scrollYPosForMessage4Fadeout = ((scrollYPos - 800) / 100);
    let scrollYPosForMessage5Fadein = ((scrollYPos - 900) / 100);
    let scrollYPosForMessage5Fadeout = ((scrollYPos - 1000) / 100);

    document.querySelector('.hello').style.opacity = 1 + scrollYPosForHelloFadeout;
    if (document.querySelector('.hello').style.opacity < 0.95) {
      document.querySelector('.notice').style.display = 'none';
    } else {
      document.querySelector('.notice').style.display = 'inline';
    }

    if (scrollYPos <= 100 || scrollYPos >= 1100) {
      document.querySelector('.img-message-1').style.display = 'none';
      document.querySelector('.img-message-2').style.display = 'none';
      document.querySelector('.img-message-3').style.display = 'none';
      document.querySelector('.img-message-4').style.display = 'none';
      document.querySelector('.img-message-5').style.display = 'none';
    } else if (scrollYPos >= 100 && scrollYPos < 200) {
      document.querySelector('.img-message-1').style.display = 'inline';
      document.querySelector('.img-message-1').style.opacity = scrollYPosForMessage1Fadein;
    } else if (scrollYPos >= 200 && scrollYPos < 300) {
      document.querySelector('.img-message-1').style.display = 'inline';
      document.querySelector('.img-message-1').style.opacity = 1 - scrollYPosForMessage1Fadeout;
      document.querySelector('.img-message-2').style.display = 'none';
    } else if (scrollYPos >= 300 && scrollYPos < 400) {
      document.querySelector('.img-message-1').style.display = 'none';
      document.querySelector('.img-message-2').style.display = 'inline';
      document.querySelector('.img-message-2').style.opacity = scrollYPosForMessage2Fadein;
    } else if (scrollYPos >= 400 && scrollYPos < 500) {
      document.querySelector('.img-message-2').style.display = 'inline';
      document.querySelector('.img-message-2').style.opacity = 1 - scrollYPosForMessage2Fadeout;
      document.querySelector('.img-message-3').style.display = 'none';
    } else if (scrollYPos >= 500 && scrollYPos < 600) {
      document.querySelector('.img-message-2').style.display = 'none';
      document.querySelector('.img-message-3').style.display = 'inline';
      document.querySelector('.img-message-3').style.opacity = scrollYPosForMessage3Fadein;
    } else if (scrollYPos >= 600 && scrollYPos < 700) {
      document.querySelector('.img-message-3').style.display = 'inline';
      document.querySelector('.img-message-3').style.opacity = 1 - scrollYPosForMessage3Fadeout;
      document.querySelector('.img-message-4').style.display = 'none';
    } else if (scrollYPos >= 700 && scrollYPos < 800) {
      document.querySelector('.img-message-3').style.display = 'none';
      document.querySelector('.img-message-4').style.display = 'inline';
      document.querySelector('.img-message-4').style.opacity = scrollYPosForMessage4Fadein;
    } else if (scrollYPos >= 800 && scrollYPos < 900) {
      document.querySelector('.img-message-4').style.display = 'inline';
      document.querySelector('.img-message-4').style.opacity = 1 - scrollYPosForMessage4Fadeout;
      document.querySelector('.img-message-5').style.display = 'none';
    } else if (scrollYPos >= 900 && scrollYPos < 1000) {
      document.querySelector('.img-message-4').style.display = 'none';
      document.querySelector('.img-message-5').style.display = 'inline';
      document.querySelector('.img-message-5').style.opacity = scrollYPosForMessage5Fadein;
    } else if (scrollYPos >= 1000 && scrollYPos < 1100) {
      document.querySelector('.img-message-5').style.display = 'inline';
      document.querySelector('.img-message-5').style.opacity = 1 - scrollYPosForMessage5Fadeout;
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
