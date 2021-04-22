// Nav & Scroll
function handleNav(){
    const NAV = document.querySelector('nav');

    window.addEventListener('scroll', ()=>{
        const MOBILE_NAV_ACTIVE = (document.querySelector('.menu_mobile').style.display == 'block')
        if(MOBILE_NAV_ACTIVE){return 0;}
        
        let preScrollY = window.scrollY;
        setTimeout(()=>{
            let newScrollY = window.scrollY;
            if(newScrollY === preScrollY){return 0;}
            if(newScrollY > preScrollY){
                NAV.classList.add('hide');
            } else{
                NAV.classList.remove('hide');
            }
        }, 50)
    })
}

//Bottom App box & Scroll
function handleAppBox(){
    const APP_BOX = document.querySelector('.footer_app_dl a');
    const HIDE_SCROLL_Y = 500;

    window.addEventListener('scroll', ()=>{
        if(window.scrollY < HIDE_SCROLL_Y){
            APP_BOX.style.bottom = '-55px';
        } else{
            APP_BOX.style.bottom = '0px';
        }
    })
}



// Mobile menu
function handleMobileMenu(){

    const MOBILE_MENU_BTN = document.querySelector('.menu_icon');
    const MOBILE_MENU = document.querySelector('.menu_mobile');
    const MOBILE_MENU_LISTS = document.querySelectorAll('.menu_mobile li');

    MOBILE_MENU_BTN.addEventListener('click', (e)=>{
        if(MOBILE_MENU.style.display == 'block'){
            MOBILE_MENU.style.display = 'none';
            MOBILE_MENU_BTN.style.backgroundImage = 'url(img/mobile/btn_menu@4x.png)';
        } else{
            MOBILE_MENU.style.display = 'block';
            MOBILE_MENU_BTN.style.backgroundImage = 'url(img/mobile/btn_menu_exit@4x.png)';
        }
        e.preventDefault(); // return false;
    })

    for(i=0; i<MOBILE_MENU_LISTS.length; i++){
        MOBILE_MENU_LISTS[i].addEventListener('click', ()=>{
            MOBILE_MENU.style.display = 'none';
            MOBILE_MENU_BTN.style.backgroundImage = 'url(img/mobile/btn_menu@4x.png)';
        })
    }
}

function init(){
    handleNav();
    handleMobileMenu();
    handleAppBox();
}

init();







