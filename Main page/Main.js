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