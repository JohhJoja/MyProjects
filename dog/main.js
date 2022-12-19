const back_img = document.querySelector('.back img');
const front_img = document.querySelector('.front img');
const back = document.querySelector('.back');
const front = document.querySelector('.front');
let i = 1;
let j = 180;
let k = -180;
back.style.left = `180px`;
front.style.left = `-180px`;
let move;
let moveback;
function remove(){
    console.log('remove!');
    move = null;
}
move = function(){
    if(j>10){
        j-=5;
        back.style.left = `${j}px`;
    }
    if(k<10){
        k+=5;
        front.style.left = `${k}px`;   
    }
}

let move_dog_move = function(){
    console.log('move_dog_move');
    moveback = function(){
        console.log('moveback');
        if(j>10){
            j+=5;
            back.style.left = `${j}px`;
        }
        if(true){
            k+=5;
            front.style.left = `${k}px`;   
        }
    }
}

function back_n_top(){
    if(i==1) back.style.top = '0px';
    if(i==2) back.style.top = '1px';
    if(i==3) back.style.top = '2px';
    if(i==4) back.style.top = '3px';
    if(i==5) back.style.top = '8px';
    if(i==6) back.style.top = '9px';
    if(i==7) back.style.top = '7px';
    if(i==8) back.style.top = '8px';
    if(i<8){
        back_img.setAttribute('src',`c${i}.png`);
    front_img.setAttribute('src', `m${i}.png`);
    i++;
    }
    if(i==8) i=1;
    if(move) move();
    if(moveback) moveback();
}
let back_n_top_time = 100;

setInterval(back_n_top, back_n_top_time);
setTimeout(move_dog_move,2700);
setTimeout(remove, 2700);






