// const button= document.querySelector(".button");
// const container2= document.querySelector(".container2");
// const button2 = document.querySelector(".button2");
//
// b2 = getComputedStyle(button2);
// console.log(b2);
// let a = "50vw";
// let b = parseInt(b2.width)/2;
// console.log(b);
// button2.style.left = -b + "px";
// // button2.style.marginLeft = a;
// button.addEventListener("click", function(){
//   container2.classList.remove("non");
//   button2.classList.remove("non");
// });

//a.indexOf("****");
//a.includes("****");
//a.startWith("");
//a.endWith("");
//a.slice(start,end) - вывод от старта до конца(не включительно)
//toUppercase
//toLowercase


// const container = document.querySelector(".container");
// container.style.cssText = `
//   margin: 40px;
//   margin-top: 40px;
//   background-color: green;
//   padding: 20px;
//   padding-top: 40px;
//   padding-bottom: 40px;
// `;
// C1 = "red";
// C2 = "orange";
// C3 = "black";
// C4 = "blue";
//
// const alfa = ["A","B","C","D"];
// let A,B,C,D;
//
// A = document.createElement("div");
// A.style.cssText = `
//     margin: 40px;
//     background-color: ${C1};
//     padding: 20px;
//   `;
// B = A.cloneNode(true);
// C = A.cloneNode(true);
// D = A.cloneNode(true);
// B.style.backgroundColor = C2;
// C.style.backgroundColor = C3;
// D.style.backgroundColor = C4;
// container.before(A);
// container.after(B);
// container.prepend(C);
// container.append(D);
//
// B.setAttribute("Id", "iisuse")
// B_Style = getComputedStyle(B);
// console.log(B_Style.width);
//
// B.style.marginLeft = parseInt(B.style.marginLeft) + 30 + "px";
// B.style.marginRight = parseInt(B.style.marginRight) + 30 + "px";
// console.log(B_Style.width);


const buttton = document.querySelector('.buttton');
const coin = document.querySelector('.coin');
let a = [];
const q = document.createElement("div");
q.style.cssText = `
background: orange;
width: 100px;
height: 70px;
border-top-left-radius: 50%;
border-top-right-radius: 50%;
border-bottom-left-radius: 50%;
border-bottom-right-radius: 50%;
border: 2px solid brown;
box-shadow: 0 10px 0 brown;
position: absolute;
top: 300px;
left: 55px;
// transform: rotateZ(10deg);
`;
coin.before(q);
let R = 0;
let W = 100;
let M = 0;
let i = 0;
buttton.addEventListener("click", function(event){
  const clone = q.cloneNode();
  q.style.marginTop = parseInt(getComputedStyle(q).marginTop) - 12 + "px";
  if(i==8) {q.style.marginLeft = '109px'; q.style.marginTop = 0;}
  if(i==20) {q.style.marginLeft = '55px'; q.style.marginTop = "70px";}
  // q.style.marginLeft = `${M}px`
  // q.style.transform = `rotateZ(${R}deg)`;
  // q.style.width = `${W}px`;
  q.before(clone);
  i++;
  console.log(i);
});


const test_button = document.querySelector(".test_button");
const test_text = document.querySelector('.test_text');

// test_button.addEventListener("click", function(){
//   test_button.classList.remove("active");
//   test_button.classList.add("non");
//   test_text.classList.remove("non");
//   test_text.classList.add("active");
// });
function Remove_Button(){
  test_button.classList.remove("active");
  test_button.classList.add("non");
  test_text.classList.remove("non");
  test_text.classList.add("active");
}
function Remove_Text(){
  test_text.classList.remove("active");
  test_text.classList.add("non");
  test_button.classList.remove("non");
  test_button.classList.add("active");
}

const documentq = document.documentElement;
documentq.addEventListener("click", function(event){
  if(event.target.closest(".test_button")){
    Remove_Button();
  }
  else if(!event.target.closest(".test_text")){
    Remove_Text();
  }
});
documentq.addEventListener("keyup", function(event){
  if(event.code == "Escape"){
   Remove_Text();
  }
});

const test_container = document.querySelector('.test_container');
let america = "";
documentq.addEventListener("keyup", function(event){

  if(event.key == "n") america+="n";
  else if(event.key == "i") america+="i";
  else if(event.key == "g") america+="g";
  else if(event.key == "e") america+="e";
  else if(event.key == "r") america+="r";
  else if(event.key == "Enter") proverca();

  console.log(america);
});
function proverca(){
  if(america == "niger"){
    const nigger = document.createElement("div");
    nigger.innerHTML = `
      <img src="https://i.ytimg.com/vi/DdIGXUgqQcs/maxresdefault.jpg"></img>
    `;
    test_container.after(nigger);
  }
}

const mainForm = document.forms[0];
//or
// const mainForm = document.forms.main_form;
const elements = mainForm.elements;
const text_inpyt = elements.text_inpyt;
//or
//const text_inpyt = mainForm.elements.text_inpyt;

console.log(mainForm);



let arr = "alah@gmail.com";
let arr_true_false = arr.includes("@");
console.log(arr_true_false);
//https://i.ytimg.com/vi/DdIGXUgqQcs/maxresdefault.jpg



//transform: matrix(1,0.3, 0, 0.3, 0, 0);
// const test = document.querySelector('.test');
// const AA = document.createElement("div");
// AA.classList.add("coin");
// test.before(AA);

























//
