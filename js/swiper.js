// Observe Node's events ----------------------------------------------------------
function controlSwiper(nodeToObserve, observeOption, functionTarget){
  const target = nodeToObserve;
  const config = observeOption;
  let observer = new MutationObserver(functionTarget);

  observer.observe(target, config);
}


// Pager of Swiper ---------------------------------------------------------------------------------------
function controlPager(SLIDES, PAGER, SWIPER_ACTIVE, ACTIVE_PART){
  let indexNum = 0;
  for(let i=0; i<PAGER.length; i++){
    let class_name = `slide_0${i+1}`
    PAGER[i].classList.remove(ACTIVE_PART);
    
    for(let j=0; j<SLIDES.length; j++){
      if(indexNum>0){break;}
      let match_class = SLIDES[j].classList.contains(class_name) && SLIDES[j].classList.contains(SWIPER_ACTIVE);
      if(match_class){
        PAGER[i].classList.add(ACTIVE_PART);
        indexNum++;
        break;
      }
    }
  }
}


// Banner's swiper ---------------------------------------------------------------------------------------
function swiperBanner(){

  var swiper = new Swiper('.banner_swiper_container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.ban_swiper-button-next',
      prevEl: '.ban_swiper-button-prev',
    },
  });

  const BANNER_CONTENTS = document.querySelectorAll('#banner section .container');

  const changeBannerSwiper = () =>{
    for(let i=0; i<BANNER_CONTENTS.length; i++){
      const bannerActive = BANNER_CONTENTS[i].parentNode.classList.contains("swiper-slide-active");
      if(bannerActive){
        BANNER_CONTENTS[i].classList.add("ban_cont_active");
      } else{
        BANNER_CONTENTS[i].classList.remove("ban_cont_active");
      }
    }
  }
  
  for(let i=0; i<BANNER_CONTENTS.length; i++){
    const target = BANNER_CONTENTS[i].parentNode;
    const config = {attributes: true, childList: true}
    controlSwiper(target, config, changeBannerSwiper);
  }

  const bannerPager = ()=>{
    const SLIDES = document.querySelectorAll('#banner .swiper-wrapper section');
    const PAGER = document.querySelectorAll('.banner_pager span');
    const SWIPER_ACTIVE = "swiper-slide-active";
    const BANNER_ACTIVE = "banner_active";
    controlPager(SLIDES, PAGER, SWIPER_ACTIVE, BANNER_ACTIVE)
  }

  const target = document.querySelector('#banner .swiper-wrapper')
  const config = {attributes: true, childList: true, subtree: true}
  controlSwiper(target, config, bannerPager);
}


// Service's swiper ---------------------------------------------------------------------------------------
function swiperService(){
  var swiper = new Swiper('.ser_swiper_container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.ser_swiper-button-next',
      prevEl: '.ser_swiper-button-prev',
    },
  });
  var swiper = new Swiper('.serlist_swiper_container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
  });

  const SLIDES = document.querySelectorAll('.ser_cont .swiper-wrapper article');
  const MENUS = document.querySelectorAll('.ser_list li.not_border');
  const MENU_LIST = document.querySelector('.ser_list_swiper');
  const SWIPER_ACTIVE = "swiper-slide-active";
  const SWIPER_PREV = "swiper-slide-prev", SWIPER_NEXT = "swiper-slide-next"; 
  const SER_ACTIVE = "ser_active";
  
  const changeSerSwiper = ()=>{
    for(let i=0; i<SLIDES.length; i++){
      let active = SLIDES[i].classList.contains(SWIPER_ACTIVE);
      if(active){
        MENUS[i].classList.add(SER_ACTIVE);
      } else{
        MENUS[i].classList.remove(SER_ACTIVE);
      }
    }

    // Menu list movement according to Slide
    const mobileWidth = window.innerWidth;
    if(mobileWidth<768){
      if(MENUS[0].classList.contains(SER_ACTIVE)||MENUS[1].classList.contains(SER_ACTIVE)){
        MENU_LIST.style.transform = `translate3d(${-0}px, 0px, 0px)`;
      } else if(MENUS[2].classList.contains(SER_ACTIVE)||MENUS[3].classList.contains(SER_ACTIVE)){
        MENU_LIST.style.transform = `translate3d(${-240}px, 0px, 0px)`;
      } else if(MENUS[4].classList.contains(SER_ACTIVE)){
        if(mobileWidth<550){  
        MENU_LIST.style.transform = `translate3d(${mobileWidth*.85-712}px, 0px, 0px)`;
        }
      }
    }
  }
  
  const target = document.querySelector('.ser_cont .swiper-wrapper');
  const config = {attributes: true, childList: true, subtree: true}
  controlSwiper(target, config, changeSerSwiper);

  // When each menu is clicked
  for(let i=0; i<MENUS.length; i++){

    MENUS[i].addEventListener('click', ()=>{
      // remove all SER_ACTIVE
      for(let del of MENUS){
        del.classList.remove(SER_ACTIVE);
      }
      
      // add SER_ACTIVE on clicked one
      MENUS[i].classList.add(SER_ACTIVE);

      // Movement of SLIDEs according to menu
      const browserWidth = window.innerWidth;
      const slideWidth_str = SLIDES[0].style.width;
      const slideWidth = Number(slideWidth_str.replace('px', ""));
      if(browserWidth < 360){
        target.style.transform = `translate3d(${i*-330}px, 0px, 0px)`;
      } else if(browserWidth < 768){
        target.style.transform = `translate3d(${i*-(slideWidth+30)}px, 0px, 0px)`;
      } else if(browserWidth < 1281){
        target.style.transform = `translate3d(${i*-816}px, 0px, 0px)`;
      } else{
        target.style.transform = `translate3d(${i*-1224}px, 0px, 0px)`;
      }
           
      // Add & remove the classes on SLIDES
      let class_name = `slide_0${i+1}`

      for(let del of SLIDES){
        del.classList.remove(SWIPER_ACTIVE);
        if(i !== 0) {del.classList.remove(SWIPER_PREV);}
        if(i !== SLIDES.length-1) {del.classList.remove(SWIPER_NEXT);}
      }

      for(let j=0; j<SLIDES.length; j++){
        if(SLIDES[j].classList.contains(class_name)){
          SLIDES[j].classList.add(SWIPER_ACTIVE);
          if(i !== 0) {SLIDES[j-1].classList.add(SWIPER_PREV);}
          if(i !== SLIDES.length-1) {SLIDES[j+1].classList.add(SWIPER_NEXT);}
        }
      }
    });
  }
}


// App's swiper -------------------------------------------------------------------
function swiperApp(){
  
  var swiper = new Swiper('.app_swiper_container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.app_swiper-button-next',
      prevEl: '.app_swiper-button-prev',
    },
  });
  
  const changeAppSwiper = ()=>{
    const SLIDES = document.querySelectorAll('.app_image .swiper-wrapper li');
    const TEXTS = document.querySelectorAll('.app_text_list li');
    const PAGER = document.querySelectorAll('.app_pager span');
    const SWIPER_ACTIVE = "swiper-slide-active";
    const APP_ACTIVE = "app_active";
    
    for(let i=0; i<SLIDES.length; i++){
      let active = SLIDES[i].classList.contains(SWIPER_ACTIVE);
      if(active){
        TEXTS[i].classList.add(APP_ACTIVE);
      } else{
        TEXTS[i].classList.remove(APP_ACTIVE);
      }
    }
    
    controlPager(SLIDES, PAGER, SWIPER_ACTIVE, APP_ACTIVE);
    
  }
  
  const target = document.querySelector('.app_image_list .swiper-wrapper');
  const config = {attributes: true, childList: true, subtree: true}
  controlSwiper(target, config, changeAppSwiper);
}


// init ---------------------------------------------------------------------------------
function init(){
  swiperBanner();
  swiperService();
  swiperApp();
}

init();

