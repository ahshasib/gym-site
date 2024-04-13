document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let toplayer = document.querySelector('.top');
    let handel = document.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('skewed')!= -1){
        skew = 990;
    }
    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth/2)*0.5;
        handel.style.left = e.clientX + delta + 'px';
        toplayer.style.width = e.clientX + skew + delta + 'px';
    })
});


var TrandingSlider = new Swiper('.tranding-slider',{
    effect:'coverflow',
    grabCursor:true,
    centeredSlides:true,
    loop:true,
    slidesPerView:'auto',
   coverflowEffect:{
    rotate:0,
    stretch:0,
    depth:100,
    modifier:2.5,
   },
   pagination:{
    el:'.swiper-pagination',
    clickable: true,
   },
   navigation: {
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
   },
   
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2700,
    delay: 450,
    reset: true
});

    sr.reveal('.carousel-caption', { delay: 200, origin: 'left' });
    sr.reveal('.carousel-caption .carosel-taki', { delay: 200, origin: 'left' });
    sr.reveal('.carousel-caption .carosel-baki', { delay: 200, origin: 'left' });
    sr.reveal('.carousel-caption .carosel-daki', { delay: 200, origin: 'left' });

// sr.reveal('.carousel-caption', { delay: 200 , origin: 'left' });
// sr.reveal('.carousel-caption .carosel-taki', { delay: 200, origin: 'left' });
// sr.reveal('.carousel-caption .carosel-baki', { delay: 200, origin: 'left' });
// sr.reveal('.carousel-caption .carosel-daki', { delay: 200, origin: 'left' });
let buttoncarosel = document.querySelector('.carousel-control-prev');
let buttoncarosel2 = document.querySelector('.carousel-control-next');
buttoncarosel.onclick=()=>{
    sr.reveal('.carosel-baki', { delay: 200 , origin: 'left', reset:true });
    
}
buttoncarosel.onclick=()=>{
sr.reveal('.carosel-taki', { delay: 200 , origin: 'left', reset:true });

}

buttoncarosel2.onclick=()=>{
    sr.reveal('.carosel-baki', { delay: 200 , origin: 'left', reset:true });
    
}
buttoncarosel2.onclick=()=>{
sr.reveal('.carosel-taki', { delay: 200 , origin: 'left', reset:true });

}

sr.reveal('.textnum', { delay: 450 , origin: 'top', });
sr.reveal('.sec2text', { delay: 450 , origin: 'top', });
sr.reveal('.middlecontent', { delay: 450 , origin: 'top', });

sr.reveal('.iconset', { delay: 450 , origin: 'right', });


sr.reveal('.sec3num', { delay: 450 , origin: 'top', });
sr.reveal('.sec3text', { delay: 500 , origin: 'top', });
sr.reveal('.card', { delay: 500 , origin: 'top', });



sr.reveal('.content-wrap img', { delay: 450 , origin: 'top', });
sr.reveal('.bottom .content-body', { delay: 500 , origin: 'right', });
sr.reveal('.top .content-body', { delay: 500 , origin: 'left', });


sr.reveal('.swiperset', { delay: 450 , origin: 'bottom', });

sr.reveal('.plandiv', { delay: 450 , origin: 'left', });
sr.reveal('.addvideo', { delay: 500 , origin: 'top', });
sr.reveal('.extradiv .extradiv1', { delay: 550 , origin: 'right', });


sr.reveal('.membership', { delay: 450 , origin: 'top', });
sr.reveal('.first', { delay: 450 , origin: 'left', });
sr.reveal('.middle', { delay: 450 , origin: 'top', });
sr.reveal('.last', { delay: 450 , origin: 'right', });


sr.reveal('.footer-list', { delay: 450 , origin: 'top', });
sr.reveal('.address', { delay: 450 , origin: 'top', });
sr.reveal('.footer-input', { delay: 450 , origin: 'top', });