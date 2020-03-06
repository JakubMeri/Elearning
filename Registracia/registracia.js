let vstup = document.querySelectorAll(".vstup");
let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
   if(vstup[0].value == ""){
       console.log("vypln meno");
   }
   if(vstup[1].value == ""){
       console.log("vypln email");
  }
   if(vstup[2].value == ""){
   console.log("vypln heslo");
  }
   if(vstup[2].value != vstup[3].value){
       console.log("heslo sa nezhoduje");
   }
});

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
