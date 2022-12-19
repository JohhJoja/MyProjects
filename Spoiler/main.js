const title = document.querySelectorAll('.title');
const block = document.querySelector('.block');
let i = 0;

while(i<title.length){
  title[i].addEventListener("click", function(event){
    let q = 0;
    while(q<title.length){
      if(title[q] == event.target){
        q++;
        continue;
      }
      title[q].classList.remove("active");
      title[q].nextElementSibling.classList.remove("active");
      q++;
    }
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("active");
  });
i++;
}
