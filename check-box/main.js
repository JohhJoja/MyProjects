const body = document.documentElement;
const check_box = document.querySelectorAll('.check_box');
const input = document.querySelectorAll('input');
const check_box1 = document.querySelector('.check_box1');
const check_box2 = document.querySelector('.check_box2');

check_box.forEach(function(item,index,array){
  let c = item.getElementsByTagName("input")[0];
  if(c.checked == true){
    item.classList.add("active");
    c.classList.add("active");
  }
  else{
    item.classList.remove("active");

    c.classList.remove("active");
  }
  }
);


check_box1.addEventListener("click", function(event){
  let c = check_box1.getElementsByTagName("input")[0];
  if(c.classList.contains("active")){
    check_box1.classList.add("active");
    c.classList.remove("active");
    c.setAttribute("checked","");

    }
  else{
    check_box1.classList.remove("active");
c.classList.add("active");
c.removeAttribute("checked");
      }
    }
  );



check_box2.addEventListener("click", function(event){
  let c = check_box2.getElementsByTagName("input")[0];
  console.log(c);
  if(c.classList.contains("active")){
    check_box2.classList.add("active");
    c.classList.remove("active");
    c.setAttribute("checked","");
    }
  else{
  check_box2.classList.remove("active");
  c.classList.add("active");
  c.removeAttribute("checked");
      }
   }
);


const rediobutton = document.querySelector('.rediobutton');
const rediobutton_item = document.querySelectorAll('.rediobutton_item');
const rediobutton_item1 = document.querySelector('.rediobutton_item1');
const rediobutton_item2 = document.querySelector('.rediobutton_item2');
const rediobutton_item3 = document.querySelector('.rediobutton_item3');

rediobutton_item.forEach((item, i) => {
  let c = item.getElementsByTagName("input")[0];
  if(c.checked == true){
    item.classList.add("active");
    c.classList.add("active");
  }
  else{
    item.classList.remove("active");
    c.classList.remove("active");
  }
});

rediobutton_item.forEach((item, i) => {
  item.addEventListener("click", function(){
    let c = item.getElementsByTagName("input")[0];
    if(c.classList.contains("active")){
      rediobutton_item.forEach((item,i)=>{
        let c = item.getElementsByTagName("input")[0];
        item.classList.remove("active");
        c.classList.remove("active");
        c.removeAttribute("checked");
      });
      item.classList.remove("active");
      c.classList.remove("active");
      c.removeAttribute("checked");
      }
      else{
        rediobutton_item.forEach((item,i)=>{
          let c = item.getElementsByTagName("input")[0];
          item.classList.remove("active");
          c.classList.remove("active");
          c.removeAttribute("checked");
        });
      item.classList.add("active");
      c.classList.add("active");
      c.setAttribute("checked","");
          }
  });

});


const button = document.querySelector('button');
function AA(){
  button.classList.remove("active");
}
button.addEventListener("mousedown", function(){
  button.classList.add("active");
  setTimeout(AA,1000);
});

































//
