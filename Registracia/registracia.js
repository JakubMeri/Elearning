let popup = document.querySelector(".popup");
let msg = document.querySelector(".popMessage");
let btn = document.querySelector(".register-form");
let vstup = document.querySelectorAll(".vstup");
btn.addEventListener("submit", (e) => {
   if(vstup[0].value == ""){
       vstup[0].style.border = "solid 1px rgb(189, 2, 2)";
       vstup[0].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
       e.preventDefault();
       msg.textContent = "Zadaj Meno!";
       popup.style.display = "flex";   
       popup.style.opacity = "1"; 
   }
   else if(vstup[1].value == ""){
       e.preventDefault();
       vstup[1].style.border = "solid 1px rgb(189, 2, 2)";
       vstup[1].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
       msg.textContent = "Zadaj Priezvisko!";
       popup.style.display = "flex";   
       popup.style.opacity = "1"; 
  }
   else if(vstup[2].value == ""){
   e.preventDefault();
   vstup[2].style.border = "solid 1px rgb(189, 2, 2)";
   vstup[2].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
   msg.textContent = "Zadaj Email!";
   popup.style.display = "flex";   
   popup.style.opacity = "1"; 
  }
  else if(vstup[3].value == ""){
    e.preventDefault();
    vstup[3].style.border = "solid 1px rgb(189, 2, 2)";
    vstup[3].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
    msg.textContent = "Zadaj Heslo!";
    popup.style.display = "flex";   
    popup.style.opacity = "1"; 
   }
   else if(vstup[3].value.length < 8){
    e.preventDefault();
    vstup[3].style.border = "solid 1px rgb(189, 2, 2)";
    vstup[3].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
    msg.textContent = "Heslo musí mať viac ako 8 znakov!";
    popup.style.display = "flex";   
    popup.style.opacity = "1"; 
   }
   else if(vstup[4].value == ""){
    e.preventDefault();
    vstup[4].style.border = "solid 1px rgb(189, 2, 2)";
    vstup[4].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
    msg.textContent = "Zadaj Overovacie Heslo!";
    popup.style.display = "flex";   
    popup.style.opacity = "1"; 
   }
   else if(vstup[3].value != vstup[4].value){
       e.preventDefault();
       vstup[3].style.border = "solid 1px rgb(189, 2, 2)";
       vstup[3].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
       vstup[4].style.border = "solid 1px rgb(189, 2, 2)";
       vstup[4].style.boxShadow = "inset 0px 0px 4px rgb(189, 2, 2)";
       msg.textContent = "Heslá sa nezhodujú!";
       popup.style.display = "flex";   
       popup.style.opacity = "1"; 
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
})});

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