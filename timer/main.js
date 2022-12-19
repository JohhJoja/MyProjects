const alah = document.querySelector(".alah");
const al = document.querySelectorAll(".a");
console.log(alah);

let widthhh = alah.getBoundingClientRect().width;
let p;
let arr = [];

console.log(arr);
function a(a){
    p = a.getBoundingClientRect().left;
    arr.push(p);
    a.style.left = a.getBoundingClientRect().left + widthhh + "px";
}
al.forEach(function(item){
    a(item)
})
let i =0;


////////////
function aaa(item, index){
    let a = index * 1000;
    function q(){
        item.style.left = arr[0];
    }
    setTimeout(q, a);
}

function alibaba(){
    al.forEach((item,index)=>aaa(item,index))
}
/////////////
setTimeout(alibaba, 1000)


console.log(arr);


const block_1 = document.querySelector(".block_1");
const block_2 = document.querySelector(".block_2");
const new_timer_big = document.querySelector(".new_timer_big");
const new_timer_small = document.querySelector(".new_timer_small")

const block_3 = document.createElement('div');
block_3.classList.add("lolik");
new_timer_big.append(block_3)

function test(){
    block_2.style.transform  = "rotateZ(360deg)"
}
function test2(){
    block_1.style.transform  = "rotateZ(180deg)"
}
function test3(){
    block_3.style.opacity = "1";
}

setTimeout(test, 0);
setTimeout(test2, 5000);
setTimeout(test3,5000);

///////////

let text = new_timer_small.innerHTML;
console.log(text);
new_timer_small.innerHTML = text;

function low(a){
    if(a>0){
    text= text-1;
    new_timer_small.innerHTML = text;
    console.log(text);
    setTimeout(low,1000, a-1)
}
}

setTimeout(low, 1000, text)

//////////////

const container = document.querySelector(".container");
let it = 0;
function kruchu(){
    if(it == 0){
        container.style.marginTop = "400px"
        it = 1;
        console.log(it);
    }
    else if(it == 1){
        container.style.marginTop = "450px"
        it = 0;
        console.log(it);
    }
}

// setInterval(kruchu, 2000);



// container.addEventListener("mouseover", function(){
//     container.style.cssText = `
//     margin-left: 25%;
//     margin-top: 200px;
//     margin-bottom: 200px;
//     width: 10em; 
//     height: 10em; 
    
//     transform-style: preserve-3d;
//     animation: rotate2 10s infinite linear; 
//     transition-duration: 2s;
//     `
// })

// const wraper4 = document.querySelector('.wraper4');
// wraper4.addEventListener("mouseover", function(){
//     wraper4.style.cssText = `
//     margin-top: 600px;
  
//   height: 100%;
//   max-width: 100%;
//   perspective: 1000px; 
//   perspective-origin: center 200px;
//   transform: scaleX(4) scaleY(4);
//   position: relative;
//   transition-duration: 2s;
  
//     `
// });