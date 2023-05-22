
//Tab Menu
function init(){
    fetch('./js/room.json')
        .then((response) => response.json())
        .then((data) => {
            result(data)
        });


    const elChoose = document.querySelectorAll('.choose button')
    const elSwiper = document.querySelector('.swiper-wrapper')

    let idx= 0;
        function result(data){
            elChoose.forEach((btn,key)=>{
                btn.addEventListener('click',function(e){
                    elSwiper.classList.add('on')
                    elChoose[idx].classList.remove('on')
                    e.target.classList.add('on')
                    idx=key;
                    
                    let Imgbox = data.swiper;
                    elSwiper.innerHTML = ''; // 값을 비워줘야 계속 발생 되지 않음
                    Imgbox[key].forEach((obj, key) => {
                        elSwiper.innerHTML +=
                        `<div class="swiper-slide">
                        <img src="${obj.url}" alt="">
                        </div>`
                    })
                })
            })

            let event = new MouseEvent('click');
            elChoose[0].dispatchEvent(event); //첫번째 초기값 자동으로 나타나게끔
        }
        

    ///// 스크롤 이벤트
        const elFirst = document.querySelector('.first')
        const elSecond = document.querySelector('.second')
        const elThird = document.querySelector('.third')

        window.addEventListener('scroll',function(){
            if(
                elFirst.offsetTop - window.innerHeight < window.pageYOffset){
                    elFirst.classList.add('active')
                }
        
            if(
                elSecond.offsetTop - window.innerHeight< window.pageYOffset){
                    elSecond.classList.add('active')
                }
        
            if(
                elThird.offsetTop - window.innerHeight < window.pageYOffset){
                    elThird.classList.add('active')
                }
        })

}


window.onload = ()=>{
    init();
    window.scrollTo(0,1)
}