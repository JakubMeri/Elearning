let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let btnMin = document.querySelector(".btnMin");
let btnMax = document.querySelector(".btnMax");
let btnPred1 = document.querySelector(".pred1");
let btnPred2 = document.querySelector(".pred2");
let btnPred3 = document.querySelector(".pred3");
let btnPred4 = document.querySelector(".pred4");
let btnPred5 = document.querySelector(".pred5");
let btnPred6 = document.querySelector(".pred6");
let btnPred7 = document.querySelector(".pred7");
let btnPred8 = document.querySelector(".pred8");
let logout = document.querySelector(".logout");
let prednaskyInfo = document.querySelector(".teacher-content");

btn.addEventListener("click", () => {
box.style.opacity = "0";

setTimeout(()=>{
    box.style.display = "none";
    prednaskyInfo.style.display = "block";
},400)

});
//Max okna
/* let max = true;
btnMax.addEventListener("click", () => {
    if(max ==true){
box.style.width = "90%";
box.style.height = "100%";
    }
    else{
        box.style.width = "1000px";
        box.style.height = "700px";  
    }
    max = !max;
});
 */
//slider
   let slide = document.querySelector(".slide");
   let btnLeft = document.querySelector(".btn1");
   let btnRight = document.querySelector(".btn2");
// zoznam obrazkov 
   let array1 = ["UIES_pr1-3-01.jpg", "UIES_pr1-3-02.jpg", "UIES_pr1-3-03.jpg", "UIES_pr1-3-04.jpg", "UIES_pr1-3-05.jpg", "UIES_pr1-3-06.jpg", "UIES_pr1-3-07.jpg", "UIES_pr1-3-08.jpg", "UIES_pr1-3-09.jpg", "UIES_pr1-3-10.jpg", "UIES_pr1-3-11.jpg", "UIES_pr1-3-12.jpg", "UIES_pr1-3-13.jpg", "UIES_pr1-3-14.jpg", "UIES_pr1-3-15.jpg", "UIES_pr1-3-16.jpg", "UIES_pr1-3-17.jpg"];
   let array2 = ["2-01.jpg", "2-02.jpg", "2-03.jpg", "2-04.jpg", "2-05.jpg", "2-06.jpg", "2-07.jpg", "2-08.jpg", "2-09.jpg", "2-10.jpg", "2-11.jpg", "2-12.jpg", "2-13.jpg", "2-14.jpg", "2-15.jpg", "2-16.jpg", "2-17.jpg", "2-18.jpg", "2-19.jpg", "2-20.jpg", "2-21.jpg"];
   let array3 = ["3-01.jpg", "3-02.jpg", "3-03.jpg", "3-04.jpg", "3-05.jpg", "3-06.jpg", "3-07.jpg", "3-08.jpg", "3-09.jpg", "3-10.jpg", "3-11.jpg", "3-12.jpg", "3-13.jpg", "3-14.jpg", "3-15.jpg", "3-16.jpg", "3-17.jpg", "3-18.jpg", "3-19.jpg"];
   let array4 = ["4-01.jpg", "4-02.jpg", "4-03.jpg", "4-04.jpg", "4-05.jpg", "4-06.jpg", "4-07.jpg", "4-08.jpg", "4-09.jpg", "4-10.jpg", "4-11.jpg", "4-12.jpg", "4-13.jpg", "4-14.jpg", "4-15.jpg", "4-16.jpg", "4-17.jpg", "4-18.jpg", "4-19.jpg", "4-20.jpg", "4-21.jpg", "4-22.jpg", "4-23.jpg", "4-24.jpg", "4-25.jpg"];
   let array5 = ["5-01.jpg", "5-02.jpg", "5-03.jpg", "5-04.jpg", "5-05.jpg", "5-06.jpg", "5-07.jpg", "5-08.jpg", "5-09.jpg", "5-10.jpg", "5-11.jpg", "5-12.jpg", "5-13.jpg", "5-14.jpg", "5-15.jpg", "5-16.jpg", "5-17.jpg", "5-18.jpg", "5-19.jpg", "5-20.jpg", "5-21.jpg"];
   let array6 = ["6-01.jpg", "6-02.jpg", "6-03.jpg", "6-04.jpg", "6-05.jpg", "6-06.jpg", "6-07.jpg", "6-08.jpg", "6-09.jpg", "6-10.jpg", "6-11.jpg", "6-12.jpg", "6-13.jpg", "6-14.jpg", "6-15.jpg", "6-16.jpg", "6-17.jpg", "6-18.jpg", "6-19.jpg", "6-20.jpg", "6-21.jpg", "6-22.jpg", "6-23.jpg", "6-24.jpg", "6-25.jpg", "6-26.jpg", "6-27.jpg", "6-28.jpg", "6-29.jpg", "6-30.jpg", "6-31.jpg", "6-32.jpg", "6-33.jpg", "6-34.jpg", "6-35.jpg"];
   let array7 = ["7-01.jpg", "7-02.jpg", "7-03.jpg", "7-04.jpg", "7-05.jpg", "7-06.jpg", "7-07.jpg", "7-08.jpg", "7-09.jpg", "7-10.jpg", "7-11.jpg", "7-12.jpg", "7-13.jpg", "7-14.jpg", "7-15.jpg", "7-16.jpg", "7-17.jpg", "7-18.jpg", "7-19.jpg", "7-20.jpg", "7-21.jpg", "7-22.jpg", "7-23.jpg", "7-24.jpg", "7-25.jpg", "7-26.jpg", "7-27.jpg", "7-28.jpg", "7-29.jpg", "7-30.jpg", "7-31.jpg", "7-32.jpg", "7-33.jpg", "7-34.jpg", "7-35.jpg", "7-36.jpg", "7-37.jpg", "7-38.jpg"];
   let array8 = ["8-01.jpg", "8-02.jpg", "8-03.jpg", "8-04.jpg", "8-05.jpg", "8-06.jpg", "8-07.jpg", "8-08.jpg", "8-09.jpg", "8-10.jpg", "8-11.jpg", "8-12.jpg", "8-13.jpg", "8-14.jpg", "8-15.jpg", "8-16.jpg", "8-17.jpg", "8-18.jpg", "8-19.jpg"];


   //Zobrazenie Prednasky 1
btnPred1.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array1[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array1.length - 1)){
     count = (array1.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array1[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array1.length){
     count--; 
 }
 slide.style.background = `url(${url}${array1[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});
//Zobrazenie Prednasky 2
btnPred2.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array2[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array2.length - 1)){
     count = (array2.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array2[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array2.length){
     count--; 
 }
 slide.style.background = `url(${url}${array2[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});
//Zobrazenie Prednasky 3
btnPred3.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array3[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array3.length - 1)){
     count = (array3.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array3[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array3.length){
     count--; 
 }
 slide.style.background = `url(${url}${array3[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});
//Zobrazenie Prednasky 4
btnPred4.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array4[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array4.length - 1)){
     count = (array4.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array4[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array4.length){
     count--; 
 }
 slide.style.background = `url(${url}${array4[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});
//Zobrazenie Prednasky 5
btnPred5.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array5[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array5.length - 1)){
     count = (array5.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array5[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array5.length){
     count--; 
 }
 slide.style.background = `url(${url}${array5[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});
//Zobrazenie Prednasky 6
btnPred6.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array6[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array6.length - 1)){
     count = (array6.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array6[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array6.length){
     count--; 
 }
 slide.style.background = `url(${url}${array6[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});
//Zobrazenie Prednasky 7
btnPred7.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array7[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array7.length - 1)){
     count = (array7.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array7[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array7.length){
     count--; 
 }
 slide.style.background = `url(${url}${array7[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});
//Zobrazenie Prednasky 8
btnPred8.addEventListener("click", () => {
    box.style.display = "flex";
    prednaskyInfo.style.display = "none";
    const url = "/Elearning/Data/Prednasky/";
    let count = 0;
    slide.style.background = `url(${url}${array8[0]}) center`;
    slide.style.backgroundSize ="cover";
 btnRight.addEventListener("click", ()=>{
     if(count == (array8.length - 1)){
     count = (array8.length - 1);
 }
     else if(count >= 0){
     count++;
 }
 slide.style.background = `url(${url}${array8[count]}) center`; 
 slide.style.backgroundSize = "cover";
     });
 btnLeft.addEventListener("click", ()=>{
     if(count == 0){
     count = 0;
 }
     else if(count <= array8.length){
     count--; 
 }
 slide.style.background = `url(${url}${array8[count]}) center`;
 slide.style.backgroundSize = "cover";
     });
    setTimeout(() => {
    box.style.opacity = "1";    
    }, 0);
});



//Logout
logout.addEventListener("click", () => {
    document.getElementById("load").className = "load";
setTimeout(() => {
    document.location.href = "/Elearning/Logout.php";
}, 2000);
});


let IDLE_TIMEOUT = 60 * 60;
let _idleSecondsCounter = 0;
document.onclick = function() {
    _idleSecondsCounter = 0;
};
document.onmousemove = function() {
    _idleSecondsCounter = 0;
};
document.onkeypress = function() {
    _idleSecondsCounter = 0;
};
window.setInterval(CheckIdleTime, 1000);
function CheckIdleTime() {
    _idleSecondsCounter++;
    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
        document.location.href = "../Logout.php";
    }
}

//Load prednasky info
const loadPrednaskaInfo = () =>{
    let NAHLAD = document.querySelector(".show-teacher-data");
    fetch("loadData.php")
    .then(res => res.json())
    .then(data => NAHLAD.innerHTML= data[0].obsah)
}
loadPrednaskaInfo();











//Mobilna verzia-----------------------------------------
//Prednaska 1
let prednaska1 = document.querySelector(".prednaska1");
let back1 = document.querySelector(".pre-1-back");
let prednaska1Button = document.querySelector(".predM1");
let slider = document.querySelector(".slider");

prednaska1Button.addEventListener("click", () => {
    prednaska1.style.display = "flex";
    slider.innerHTML = array1.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska1.style.opacity = "1";
}, 0);
});
back1.addEventListener("click", () => {
    prednaska1.style.opacity = "0";
    setTimeout(() => {
    prednaska1.style.display = "none";
    }, 500);
});
//Prednaska2
let prednaska2 = document.querySelector(".prednaska2");
let back2 = document.querySelector(".pre-2-back");
let prednaska2Button = document.querySelector(".predM2");
let slider2 = document.querySelector(".slider2");

prednaska2Button.addEventListener("click", () => {
    prednaska2.style.display = "flex";
    slider2.innerHTML = array2.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska2.style.opacity = "1";
}, 0);
});
back2.addEventListener("click", () => {
    prednaska2.style.opacity = "0";
    setTimeout(() => {
    prednaska2.style.display = "none";
    }, 500);
});
//Prednaska3
let prednaska3 = document.querySelector(".prednaska3");
let back3 = document.querySelector(".pre-3-back");
let prednaska3Button = document.querySelector(".predM3");
let slider3 = document.querySelector(".slider3");

prednaska3Button.addEventListener("click", () => {
    prednaska3.style.display = "flex";
    slider3.innerHTML = array3.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska3.style.opacity = "1";
}, 0);
});
back3.addEventListener("click", () => {
    prednaska3.style.opacity = "0";
    setTimeout(() => {
    prednaska3.style.display = "none";
    }, 500);
});
//Prednaska4
let prednaska4 = document.querySelector(".prednaska4");
let back4 = document.querySelector(".pre-4-back");
let prednaska4Button = document.querySelector(".predM4");
let slider4 = document.querySelector(".slider4");

prednaska4Button.addEventListener("click", () => {
    prednaska4.style.display = "flex";
    slider4.innerHTML = array4.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska4.style.opacity = "1";
}, 0);
});
back4.addEventListener("click", () => {
    prednaska4.style.opacity = "0";
    setTimeout(() => {
    prednaska4.style.display = "none";
    }, 500);
});
//Prednaska5
let prednaska5 = document.querySelector(".prednaska5");
let back5 = document.querySelector(".pre-5-back");
let prednaska5Button = document.querySelector(".predM5");
let slider5 = document.querySelector(".slider5");

prednaska5Button.addEventListener("click", () => {
    prednaska5.style.display = "flex";
    slider5.innerHTML = array5.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska5.style.opacity = "1";
}, 0);
});
back5.addEventListener("click", () => {
    prednaska5.style.opacity = "0";
    setTimeout(() => {
    prednaska5.style.display = "none";
    }, 500);
});
//Prednaska6
let prednaska6 = document.querySelector(".prednaska6");
let back6 = document.querySelector(".pre-6-back");
let prednaska6Button = document.querySelector(".predM6");
let slider6 = document.querySelector(".slider6");

prednaska6Button.addEventListener("click", () => {
    prednaska6.style.display = "flex";
    slider6.innerHTML = array6.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska6.style.opacity = "1";
}, 0);
});
back6.addEventListener("click", () => {
    prednaska6.style.opacity = "0";
    setTimeout(() => {
    prednaska6.style.display = "none";
    }, 500);
});
//Prednaska7
let prednaska7 = document.querySelector(".prednaska7");
let back7 = document.querySelector(".pre-7-back");
let prednaska7Button = document.querySelector(".predM7");
let slider7 = document.querySelector(".slider7");

prednaska7Button.addEventListener("click", () => {
    prednaska7.style.display = "flex";
    slider7.innerHTML = array7.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska7.style.opacity = "1";
}, 0);
});
back7.addEventListener("click", () => {
    prednaska7.style.opacity = "0";
    setTimeout(() => {
    prednaska7.style.display = "none";
    }, 500);
});
//Prednaska8
let prednaska8 = document.querySelector(".prednaska8");
let back8 = document.querySelector(".pre-8-back");
let prednaska8Button = document.querySelector(".predM8");
let slider8 = document.querySelector(".slider8");

prednaska8Button.addEventListener("click", () => {
    prednaska8.style.display = "flex";
    slider8.innerHTML = array8.map( (a) =>{
        return `<img class='img-slide' src='/Elearning/Data/Prednasky/${a}'>`;
    });
setTimeout(() => {
    prednaska8.style.opacity = "1";
}, 0);
});
back8.addEventListener("click", () => {
    prednaska8.style.opacity = "0";
    setTimeout(() => {
    prednaska8.style.display = "none";
    }, 500);
});

