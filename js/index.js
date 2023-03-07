
//스크롤 이벤트
const elFirst = document.querySelector('.first')
window.addEventListener('scroll',function(){ 
  if( 
    elFirst.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ){
      elFirst.classList.add('active')
    } 
})

const elSecond = document.querySelector('.second-text')
window.addEventListener('scroll',function(){ 
  if( 
    elSecond.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ){
      elSecond.classList.add('active')
    } 
})

const elFlex = document.querySelector('.flexbox')
window.addEventListener('scroll',function(){ 
  if( 
    elFlex.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ){
      elFlex.classList.add('active')
    } 
})

const elThird = document.querySelector('.third-text')
window.addEventListener('scroll',function(){ 
  if( 
    elThird.offsetTop - window.innerHeight * 0.8 < window.pageYOffset ){
      elThird.classList.add('active')
    } 
})

const elMap = document.querySelector('#map')
window.addEventListener('scroll',function(){
  if(
    elMap.offsetTop - this.window.innerHeight * 0.8 < this.window.pageYOffset){
      elMap.classList.add('active')
  }
})

const elThirdImg = document.querySelector('.third-imgbox')
window.addEventListener('scroll',function(){
  if(
    elThirdImg.offsetTop - this.window.innerHeight * 0.8 < this.window.pageYOffset){
      elThirdImg.classList.add('active')
  }
})
console.log('hgh')

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






