//popup
let popup = document.querySelector(".popup");
let msg = document.querySelector(".popMessage");
let vstup = document.querySelectorAll(".vstup");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
   if(vstup[0].value == ""){
       popup.style.display = "flex";   
       popup.style.opacity = "1"; 
       msg.textContent = "Vyplň Meno!";
   }
   else if(vstup[1].value == ""){
       popup.style.display = "flex";   
       popup.style.opacity = "1"; 
       msg.textContent = "Vyplň Heslo!";
  }
  else{
      break;
  }
  setTimeout(() => {
     popup.style.opacity = "0";
     popup.style.display = "none"; 
  }, 3000);
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


