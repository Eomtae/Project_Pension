//Tab Menu

fetch('./js/room.json')
    .then((response) => response.json())
    .then((data) => {
        result(data)
    });


const elChoose = document.querySelectorAll('.choose button')
/* Choose.forEach((obj,key)=>{
 console.log(choose)
}) */
const elSwiper = document.querySelector('.swiper-wrapper')
const elSwiperSl = document.querySelector('.swiper-slide')
// const elFirstSw = document.querySelector('.swiper_301')
// const elSecondSw = document.querySelector('.swiper_302')
// const elThirdSw = document.querySelector('.swiper_303')
// const elFourthSw = document.querySelector('.swiper_305')
// const elFifthSw = document.querySelector('.swiper_401')
// const elSixthSw = document.querySelector('.swiper_402')
// const elSeventhSw = document.querySelector('.swiper_403')

let idx= 0;
    function result(data){
    elChoose.forEach((btn,key)=>{
        btn.addEventListener('click',function(e){
            elSwiper.classList.add('on')
        elChoose[idx].classList.remove('on')
        e.target.classList.add('on')
        idx=key;
        
        let Imgbox = data.swiper;
        Imgbox[key].forEach((obj, key) => {
            elSwiper.innerHTML +=
            `<div class="swiper-slide">
            <img src="${obj.url}" alt="">
            </div>`
            console.log(obj.url)
                        })
                    })
                })

    
    }
    //////////////////////////스와이퍼
    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });/////////////////////////스와이퍼

