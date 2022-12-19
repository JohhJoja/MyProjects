const body = document.documentElement;
const check_box = document.querySelectorAll('.check_box');
const input = document.querySelectorAll('input');

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

for(let i = 0; i < check_box.length; i++){
  check_box[i].addEventListener("click", function(event){
    console.log(check_box[0]);
  })}

//     check_box[i].forEach(function(item,index,array){
//         console.log(item);
//         let c = item.getElementsByTagName("input")[0];
//         console.log(c);
//         if(c.classList.contains("active")){
//           item.classList.add("active");
//           c.classList.remove("active");
//         }
//         else{
//           item.classList.remove("active");
// c.classList.add("active");
//             }
//
//         }
//       );

//
//     });
// }


// .block_form {
//
// }
//
// .title {
//
// }
//
// .input {
//
// }
//
// . {
//
// }
//
// .rediobutton {
//
// }
//
// .rediobutton_item {
//
// }
