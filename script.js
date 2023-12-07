const menu = document.querySelector('#navbar');
const texts = document.querySelector('#texts');
const navClose=document.querySelector('#nav-close');
const formHome=document.querySelector(".form");
const btn1=document.querySelector(".battin");
const way=document.querySelector("#way");
const readmore1=document.querySelector(".third-page_text_btn");
const readmore2=document.querySelector(".fourth-page_text_btn");
const ptext1=document.querySelector('.fourPageP');
const ptext2=document.querySelector('.threePageP')
const searchIput=document.querySelector('#searchinput');
const searchBtn=document.querySelector('#searchBtn');
const input1=document.querySelector("#input1");
const input2=document.querySelector("#input2");
const input3=document.querySelector("#input3");
const p1=document.querySelector("#p1");
const p2=document.querySelector("#p2");
const p3=document.querySelector("#p3");
const p4=document.querySelector("#p4");
const forma=document.querySelector('.forma')
const regex1=/^[A-Za-z]{3,20}$/;
const regex2=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regex3=/^[0-9A-Za-z!-?]{6,30}$/;

formHome.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(regex1.test(input1.value)){
        console.log(input1.value);
        p1.style.visibility='hidden';
    } else{
        p1.style.visibility='visible';
        console.log('false');
    }
});
formHome.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(regex2.test(input2.value)){
        console.log(input2.value);
        p2.style.visibility='hidden';
    } else{
        p2.style.visibility='visible';
        console.log('false');
    }
});

formHome.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(regex3.test(input3.value)){
        console.log(input3.value);
        p3.style.visibility='hidden';
    } else{
        p3.style.visibility='visible';
        console.log('false');
    }
});
// document.addEventListener('keydown',(e)=>{
//     if(e.keycode===13){
//        forma.searchIput.value=" ";
//     }
// });
forma.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(regex2.test(searchIput.value)){
    searchBtn.addEventListener('click',()=>{
      searchIput.value=' ';
    });
    console.log(searchIput.value);
    p4.style.visibility='hidden';
  } else{
      p4.style.visibility='visible';
      console.log('false');
  }
});

// const regex=/^[a-zA-Z]{3,10}$/;
// const regex2=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
menu.addEventListener('click',()=>{
  texts.classList.add('active');
  navClose.style.display="block";
});
navClose.addEventListener('click',()=>{
  texts.classList.remove("active");
  navClose.style.display="none";
});
btn1.addEventListener('click',()=>{
  formHome.style.display='block';
});
way.addEventListener('click',()=>{
  formHome.style.display='none';
});
readmore2.addEventListener('click',()=>{
  ptext1.style.display='block';
  ptext1.style.fontSize='.6rem';
});
readmore1.addEventListener('click',()=>{
  ptext2.style.display='block';
  ptext2.style.fontSize='.6rem';
});
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


