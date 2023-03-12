
function init(){
    
    const elFirst = document.querySelector('.first')
    const elSecond = document.querySelector('.second')
    const elThird = document.querySelector('.third')
    const elFourth = document.querySelector('.fourth')
    const elFifth = document.querySelector('.fifth')
    const elSixth = document.querySelector('.sixth')

    window.addEventListener('scroll',function(){
        if(
            elFirst.offsetTop - window.innerHeight < window.pageYOffset){
                elFirst.classList.add('active')
        }
  
        if(
            elSecond.offsetTop - window.innerHeight < window.pageYOffset){
                elSecond.classList.add('active')
            }
   
        if(
            elThird.offsetTop - window.innerHeight < window.pageYOffset){
                elThird.classList.add('active')
            }
   
        if(
            elFourth.offsetTop - window.innerHeight < window.pageYOffset){
                elFourth.classList.add('active')
            }
    
        if(
            elFifth.offsetTop - window.innerHeight < window.pageYOffset){
                elFifth.classList.add('active')
            }
   
        if(
            elSixth.offsetTop - window.innerHeight < window.pageYOffset){
                elSixth.classList.add('active')
            }
    })

}


const imgs = document.querySelectorAll('img')

window.onload = ()=>{
    init()
    window.scrollTo(0,1)
};


