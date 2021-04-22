// Service's animations delay
const doAnimationApp = function (){
    setTimeout(()=>{
        document.querySelector('#app h2').classList.add('appear');
    }, 200)
    setTimeout(()=>{
        document.querySelector('.app_text_list').classList.add('appear');
    }, 500)
}

// Service's animations delay
const doAnimationService = function (){
    setTimeout(()=>{
        document.querySelector('#service h2').classList.add('appear');
        document.querySelector('.ser_list').classList.add('appear');
        document.querySelector('.ser_cont').classList.add('appear');
    }, 200)
}

// Intro article's animations delay
const doAnimationArticles = function (){
    setTimeout(()=>{
        document.querySelector('.intro_art1').classList.add('intro_art_ani');
    }, 0)
    setTimeout(()=>{
        document.querySelector('.intro_art2').classList.add('intro_art_ani');
    }, 300)
    setTimeout(()=>{
        document.querySelector('.intro_art3').classList.add('intro_art_ani');
    }, 600)
}

// Do Animation according the scroll location
function setAnimation(range1, range2, doAnimation){
    let indexNum = 0;
    window.addEventListener('load', ()=>{
        let scrollLocation = window.scrollY;
        if(range1<scrollLocation && scrollLocation<range2 && indexNum === 0){
            doAnimation();
            indexNum++;
        } else{
            return 0;
        }
    })
    window.addEventListener('scroll', ()=>{
        let scrollLocation = window.scrollY;
        if(range1<scrollLocation && scrollLocation<range2 && indexNum === 0){
            doAnimation();
            indexNum++;
        } else{
            return 0;
        }
    })
}

function init(){
    setAnimation(700, 1800, doAnimationArticles);
    setAnimation(1200, 2800, doAnimationService);
    setAnimation(2100, 3500, doAnimationApp);
}

init();