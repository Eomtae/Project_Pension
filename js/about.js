function init(){

    const elFirst = document.querySelector('.first')
    const elSecond = document.querySelector('.second')
    const elThird = document.querySelector('.third')
    const elFourth = document.querySelector('.fourth')
    
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
        if(
            elFourth.offsetTop - window.innerHeight < window.pageYOffset){
                elFourth.classList.add('active')
            }    
    })
    
    }
    
    window.onload = ()=>{
        init();
        window.scrollTo(0,1)
    }
    