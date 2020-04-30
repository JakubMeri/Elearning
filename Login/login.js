//popup
let popup = document.querySelector(".popup");
let msg = document.querySelector(".popMessage");
let vstup = document.querySelectorAll(".vstup");
let btn = document.querySelector(".login-form");
btn.addEventListener("submit", (e) => {
   if(vstup[0].value == ""){
    e.preventDefault();
       popup.style.display = "flex";   
       popup.style.opacity = "1"; 
       msg.textContent = "Zadaj Email!";
       vstup[0].style.border = "2px solid rgb(189, 2, 2)";
       vstup[0].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
       vstup[0].focus();
   }
   else if(vstup[1].value == ""){
    e.preventDefault();
       popup.style.display = "flex";   
       popup.style.opacity = "1"; 
       msg.textContent = "Zadaj Heslo!";
       vstup[1].style.border = "2px solid rgb(189, 2, 2)";
       vstup[1].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
       vstup[1].focus();
  }
  else{

  }
  setTimeout(() => {
     popup.style.opacity = "0";
     popup.style.display = "none"; 
  }, 3000);
});

vstup.forEach( input => {
    input.addEventListener("keyup", () =>{
        input.style.border = "1px solid white";
        input.style.boxShadow = "none";
    });   
});
//dropp menu
let menuBtn = document.querySelector(".menu");
let droppMenu = document.querySelector(".dropp-menu");

let display = true;
menuBtn.addEventListener('click', () => {
if(display === true){
    droppMenu.style.display = "flex";
    menuBtn.innerHTML = `<i class="fas fa-times"></i>`;
}
    else if(display === false){
    droppMenu.style.display = "none";
    menuBtn.innerHTML = "|||";
}
display = !display;
});


