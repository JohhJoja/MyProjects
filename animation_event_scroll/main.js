 const animItems = document.querySelectorAll('.anim-items');

 if(animItems.length > 0){
   window.addEventListener("scroll", animOnScroll);
    function animOnScroll(){
     for(let i = 0; i < animItems.length; i++){
       const animItem = animItems[i];
       const animItemHeight = animItem.offsetHeight;
       const animItemOffset = offset(animItem).top;
       const animStart = 4;

       let animItemPoint = window.innerHeight - animItemHeight / animStart;


       if(animItemHeight > window.innerHeight){
         animItemPoint = window.innerHeight - window.innerHeight/animStart;
       }

       if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
         animItem.classList.add("active");
       }
       else{
         if(!animItem.classList.contains("ones")){
           animItem.classList.remove("active");
         }

       }
     }
   }
   function offset(el){
     const rect = el.getBoundingClientRect(),
       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
   }
 }
animOnScroll();


const button_soderz = document.querySelector('.button_soderz');

function AA(){
  const part3 = document.querySelector('.part3');
  part3.scrollIntoView({
    block: "center",
    inline: "center",
    behavior: "smooth"
  })
}
button_soderz.addEventListener("click",AA);





































//
