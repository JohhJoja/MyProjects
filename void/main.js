const img = document.querySelector('img');
const text = document.querySelector('.text');
img.addEventListener('mousemove', function(e){
    // console.log(img);
    img.style.left = e.pageX - img.getBoundingClientRect().width/2 + 'px';
    img.style.top = e.pageY - img.getBoundingClientRect().height/2 + 'px';
    console.log('fuck');
});
text.addEventListener('mousemove', function(e){
    // console.log(img);
    img.style.left = e.pageX - img.getBoundingClientRect().width/2 + 'px';
    img.style.top = e.pageY - img.getBoundingClientRect().height/2 + 'px';
    console.log('fuck');
});