
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                effect:"fade",
                loop: true,
                autoplay:{
                  delay:4000,
                },
                pagination: {
                  clickable: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });//스와이퍼 JS입니다.

