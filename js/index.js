
//스크롤 이벤트
const elFirst = document.querySelector('.first')
const elSecond = document.querySelector('.second-text')
const elFlex = document.querySelector('.flexbox')
const elThird = document.querySelector('.third-text')
const elMap = document.querySelector('#map')
const elThirdImg = document.querySelector('.third-imgbox')

window.addEventListener('scroll',function(){ 
  if( 
    elFirst.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ){
      elFirst.classList.add('active')
    } 

  if( 
    elSecond.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ){
      elSecond.classList.add('active')
    } 

  if( 
    elFlex.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ){
      elFlex.classList.add('active')
    } 

  if( 
    elThird.offsetTop - window.innerHeight * 0.8< window.pageYOffset ){
      elThird.classList.add('active')
    } 

  if(
    elMap.offsetTop - this.window.innerHeight * 0.8 < this.window.pageYOffset){
      elMap.classList.add('active')
  }

  if(
    elThirdImg.offsetTop - this.window.innerHeight * 0.8 < this.window.pageYOffset){
      elThirdImg.classList.add('active')
  }
})

// 지도 API
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(34.83610331110209, 128.71739169480693),
			level: 3
      
		};

		var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(34.83610331110209, 128.71739169480693); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
/////////////////////////////////////////






