let testBox = document.querySelector(".testBox");
let datum = document.getElementById("datum");
let textPocetOtazok = document.getElementById("pocetOtazok");
let casNaTestBox = document.getElementById("maxCas");
let pocetOtazok = 20; //<---nastavenia poctu otazok
let casNaTest = 40;//<--nastavenie casu na skusku
casNaTestBox.innerHTML = casNaTest;

let date = new Date();
let den = date.getDate();
let mesiac = date.getMonth() + 1;
let rok = date.getFullYear();

datum.innerHTML = `Skúška z UIES (${den}. ${mesiac}. ${rok})`;

function getDataHandler(url, pocetOtazok){
let xhr = new XMLHttpRequest;

xhr.open("GET", url, true);
let otazkyPole = [];
xhr.onload = function(){
    if(this.status == 200){
        let data = JSON.parse(this.responseText);
        let cislo = 0;
        for (let i = 0; i < data.length; i++) {
            otazkyPole.push(data[i].id)
        }
        let hladana = [];
        textPocetOtazok.innerHTML = pocetOtazok;
        for (let j = 0; j < pocetOtazok; j++) {
            let dlzka = otazkyPole.length;
            let najdene = otazkyPole[Math.floor(Math.random()*dlzka)];
            let remove = otazkyPole.indexOf(najdene);
            hladana.push(najdene);
            otazkyPole.splice(remove, 1);
            
        }
        /* console.log(hladana) */
        for (let k = 0; k < hladana.length; k++) {
            data.forEach( a => {
                if(a.id == hladana[k]){
                    cislo++;
                    testBox.innerHTML += `<div class="otazka" value=${hladana[k]}><h3><span class='data'>${cislo}</span>.  ${a.nazov}</h3></div>`;
                    
                    }
            })

        }
        
               }
    else{
        console.log("problem");
    }

}
xhr.send();
}

getDataHandler("otazky.php", pocetOtazok);



function getDataHandler2(url){
let xhr = new XMLHttpRequest;
let otazky = document.querySelectorAll(".otazka");
xhr.open("GET", url, true);

xhr.onload = function(){
    if(this.status == 200){
        let data = JSON.parse(this.responseText);
        data.forEach( a => {
            for(let i = 0 ; i < otazky.length; i++){
                if(Number(otazky[i].getAttribute("value")) == Number(a.ido)){
                    otazky[i].innerHTML += `<li><input class="odpoved" type="checkbox" value=${a.spravna}><p>${a.nazov}</p></li>`;          
                }
            }
        });
    }

    else{
        console.log("problem");
    }
}
xhr.send();
}
//pridelovanie bodov k otazkam
const addbody = () => {
    let otazkySpolu = document.querySelectorAll(".otazka");
    otazkySpolu.forEach( otazka => {
        let odpoved = otazka.querySelectorAll(".odpoved")
        let pole = [];
        odpoved.forEach( odp => {
            pole.push(odp.value);
            
        })
/*         console.log(`${otazka.getAttribute("value")}. -----------------------------------------`)
        console.log(pole) */
        let pole2 = [];
        pole.forEach( a => {
            if(Number(a) == 1)
            {
                pole2.push(a)
            }
            else{
            
            }
        })
        let body = 3 / pole2.length;
/*         console.log(pole2)
        console.log(`Pocet bodov za spravnu odpoved: ${body}`)
        console.log("\n") */
        odpoved.forEach( b =>{
            b.value += ` ${body}`
        });
    });
}

setTimeout(() => {
    getDataHandler2("odpovede.php")
    
}, 500);


setTimeout(() => {
    let navigation = document.querySelector(".navigation");
    let otazkySpolu = document.querySelectorAll(".otazka");
    let next = document.getElementById("next");
    let before = document.getElementById("before");
let pocet = otazkySpolu.length;
let cislo = 0;
otazkySpolu[0].style.display = "flex";
for (let i = 0; i < pocet; i++) {
    cislo ++;
    navigation.innerHTML += `<button class="btnQ" id=${otazkySpolu[i].getAttribute("value")}>${cislo}</button>`;
}
let btnQ = document.querySelectorAll(".btnQ");
btnQ.forEach( a => {
a.addEventListener("click", (e) => {
e.preventDefault();
if(e.target.classList.contains("btnQ")){
    before.style.display = "block";
    next.style.display = "block";
    for(let j = 0; j < otazkySpolu.length; j++){
        if(e.target.id == otazkySpolu[j].getAttribute("value")){
            otazkySpolu[j].style.display = "flex";
        }
        else{
            otazkySpolu[j].style.display = "none";
        }
    }
    
}
});
});
}, 600);

function otazkyHandler(){
        document.addEventListener("click", (e) => {
        let btnQ = document.querySelectorAll(".btnQ");
        let otazkySpolu = document.querySelectorAll(".otazka");
        let next = document.getElementById("next");
        let before = document.getElementById("before");
        let odoslat = document.getElementById("odoslat");
        let body = document.getElementById("body");
        let emoji = document.querySelector(".emoji");
        let resultDiv = document.querySelector(".result");
        let popup = document.querySelector(".popup"); 
        let ano = document.querySelector(".ano");
        let nie = document.querySelector(".nie");
        const emojiArray = ['<i class="fas fa-smile-beam"></i>',
        '<i class="far fa-sad-tear"></i>',
        '<i class="fas fa-laugh-beam"></i>'];
        let pole = [];
        let vysledneBody = [];
        if(e.target.id == "next"){
            for (let i = 0; i < otazkySpolu.length; i++) {
                
                if(otazkySpolu[i].style.display == "flex"){
                    let number = Number(otazkySpolu[i].querySelector(".data").innerHTML);
                   otazkySpolu[i].style.display = "none";
                   pole[0] = number;
                }
            }
            for (let i = 0; i < otazkySpolu.length; i++) {
               if(otazkySpolu[i].querySelector(".data").innerHTML == pole[0]){
                   if(pole[0] +1 <= btnQ.length){
                otazkySpolu[pole[0]].style.display = "flex";
                before.style.display = "block";
                             }
                else if(pole[0] == btnQ.length){
                    otazkySpolu[pole[0]-1].style.display = "flex";
                    before.style.display = "block";
                    next.style.display = "none";
                    odoslat.style.display = "block";
                }
               }
            }
        }
        else if(e.target.id == "before"){
            next.style.display = "block";
            for (let i = 0; i < otazkySpolu.length; i++) {
                if(otazkySpolu[i].style.display == "flex"){
                   let number = Number(otazkySpolu[i].querySelector(".data").innerHTML);
                   otazkySpolu[i].style.display = "none";
                   pole[0] = number;
                }
            }
            if(pole[0] == 1){
                otazkySpolu[0].style.display = "flex";
                before.style.display = "none";
            }
            else{
                pole[0]--;
                before.style.display = "block";
                for (let i = 0; i < otazkySpolu.length; i++) {
                    if(otazkySpolu[i].querySelector(".data").innerHTML == pole[0]){
                        if(pole[0]>1){
                     otazkySpolu[pole[0]-1].style.display = "flex";
                     odoslat.style.display = "none";
                        }
                     else if(pole[0] <= 1){
                         
                         otazkySpolu[0].style.display = "flex";
                         pole[0] = 1;
                     }
                    }
                 } 
             }
            }
            else if(e.target.id == "odoslat"){
                popup.style.display = "flex";
                ano.addEventListener("click", ()=>{
                    let vysledok = document.querySelector(".result");
                    vysledok.style.display = "flex";
                    let counter = [];
                    let pocetBodov = 0;
                    otazkySpolu.forEach( a => {
                        let odpovede = a.querySelectorAll(".odpoved");
                        odpovede.forEach( b => {
                            if(b.checked == true){
                                if(b.value[0] == "1"){
                            counter.push(b.value.split(" ")[1])
                        }
                        else{
                            counter.push(`-${b.value.split(" ")[1]}`) 
                        }
                                }
                        });
                        counter.forEach( a => {
                            pocetBodov += Number(a);
    
                        });
                        if(pocetBodov < 0){
    
                        }
                        else{
                            vysledneBody.push(pocetBodov);
                        }
                        console.log(pocetBodov)
                        pocetBodov = 0;
                        counter = [];
                    });
                    let hodnotenie = 0;
                    console.log(vysledneBody)
                    vysledneBody.forEach( a => {
                        hodnotenie += Number(a);
    
                    });
                    if(hodnotenie < 0){
                        hodnotenie = 0;
                        body.innerHTML = hodnotenie;
                        resultDiv.style.background = "red";
                        emoji.innerHTML = emojiArray[1];
                    }
                    if(hodnotenie < 30){
                        body.innerHTML = hodnotenie;
                        resultDiv.style.background = "red";
                        emoji.innerHTML = emojiArray[1];
                    }
                    else if(hodnotenie > 30 && hodnotenie < 50){
                    body.innerHTML = hodnotenie;
                    resultDiv.style.background = "orange";
                    emoji.innerHTML = emojiArray[0];
                }
                else if(hodnotenie >= 50){
                    body.innerHTML = hodnotenie;
                    resultDiv.style.background = "green";
                    emoji.innerHTML = emojiArray[2];
                }
                let params = "body=" + hodnotenie;
                updateHandler(params, "updateBody.php");
                });
                nie.addEventListener("click", () =>{
                    popup.style.display = "none";
                })
            }
    });
}
otazkyHandler();


function selected(){
    let otazkySpolu = document.querySelectorAll(".otazka");
    let btnQ = document.querySelectorAll(".btnQ");
    otazkySpolu.forEach( a => {
        let cisloO = a.querySelector(".data").innerHTML;
        let checkbox = a.querySelectorAll(".odpoved");
        checkbox.forEach( b=> {
          b.addEventListener("click", () => {
              if( b.checked == true){
                btnQ.forEach( c => {
                    if(Number(c.innerHTML) == Number(cisloO)){
                        c.style.border = "solid 2px rgba(231, 216, 5, 0.986)";
                        }
                });
              }
              else{
                btnQ.forEach( c => {
                    if(Number(c.innerHTML) == Number(cisloO)){
                        c.style.border = "solid 2px black";
                        }
                });
            }
          })
        })
    });
}

setTimeout(() => {
    selected();
    addbody();
}, 1000);

const zahajitTest = () => {
    const btnBeg = document.getElementById("zahajit");
    const heslo = document.getElementById("heslo");
    const hlaska = document.getElementById("hlaska");
    let start = document.querySelector(".start");
    btnBeg.addEventListener("click", ()=>{
        fetch("heslo.php")
        .then(data => data.json())
        .then(res => {
            let hodnota = heslo.value;
            if(hodnota == ""){
                hlaska.innerHTML = "Zadaj heslo!";
                heslo.focus();
                heslo.addEventListener("keyup", ()=>{
                    hlaska.innerHTML= "";
                });
            }
            else if(hodnota != res[0].heslo){
                hlaska.innerHTML = "Nesprávne heslo!";
                heslo.focus();
                heslo.value ="";
                heslo.addEventListener("keyup", ()=>{
                    hlaska.innerHTML= "";
                });
            }
            else if(hodnota == res[0].heslo){
               start.style.opacity = "0";
               setTimeout(() => {
                start.style.display = "none";
                odpocet(casNaTest);
               }, 1000);
            }
        })
    })

}
zahajitTest();

function odpocet(time_in_minutes){
    casNaTest.innerHTML = time_in_minutes;
    let current_time = Date.parse(new Date());
    let deadline = new Date(current_time + time_in_minutes*60*1000);
    
    
    function time_remaining(endtime){
      let t = Date.parse(endtime) - Date.parse(new Date());
      let seconds = Math.floor( (t/1000) % 60 );
      let minutes = Math.floor( (t/1000/60) % 60 );
      let hours = Math.floor( (t/(1000*60*60)) % 24 );
      if(seconds < 10){
        seconds = "0"+seconds;
      }
      if(minutes < 10){
        minutes = "0"+minutes;
      }
        return {'total':t, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
    }
    function run_clock(id,endtime){
        let vystup = document.getElementById(`${id}`);
        
        function update_clock(){
        let t = time_remaining(endtime);
        vystup.innerHTML = `${t.minutes}:${t.seconds}`;
            if(t.total<=0){ 
            clearInterval(timeinterval); 
            vystup.innerHTML = "00:00";
            end();
            }
        }
        update_clock(); 
        let timeinterval = setInterval(update_clock,1000);
    }
    run_clock('cas',deadline);
    }



    //Time ends send data
    const end = () => {
        let otazkySpolu = document.querySelectorAll(".otazka");
        let body = document.getElementById("body");
        let emoji = document.querySelector(".emoji");
        let resultDiv = document.querySelector(".result");
        const emojiArray = ['<i class="fas fa-smile-beam"></i>',
        '<i class="far fa-sad-tear"></i>',
        '<i class="fas fa-laugh-beam"></i>'];
        let vysledok = document.querySelector(".result");
        vysledok.style.display = "flex";
        let counter = [];
        let vysledneBody = [];
        let pocetBodov = 0;
        otazkySpolu.forEach( a => {
            let odpovede = a.querySelectorAll(".odpoved");
            odpovede.forEach( b => {
                if(b.checked == true){
                    if(b.value[0] == "1"){
                counter.push(b.value.split(" ")[1])
            }
            else{
                counter.push(`-${b.value.split(" ")[1]}`) 
            }
                    }
            });
            counter.forEach( a => {
                pocetBodov += Number(a);

            });
            if(pocetBodov < 0){

            }
            else{
                vysledneBody.push(pocetBodov);
            }
            console.log(pocetBodov)
            pocetBodov = 0;
            counter = [];
        });
        let hodnotenie = 0;
        console.log(vysledneBody)
        vysledneBody.forEach( a => {
            hodnotenie += Number(a);

        });
        if(hodnotenie < 0){
            hodnotenie = 0;
            body.innerHTML = hodnotenie;
            resultDiv.style.background = "red";
            emoji.innerHTML = emojiArray[1];
        }
        if(hodnotenie < 30){
            body.innerHTML = hodnotenie;
            resultDiv.style.background = "red";
            emoji.innerHTML = emojiArray[1];
        }
        else if(hodnotenie > 30 && hodnotenie < 50){
        body.innerHTML = hodnotenie;
        resultDiv.style.background = "orange";
        emoji.innerHTML = emojiArray[0];
    }
    else if(hodnotenie >= 50){
        body.innerHTML = hodnotenie;
        resultDiv.style.background = "green";
        emoji.innerHTML = emojiArray[2];
    }
    let params = "body=" + hodnotenie;
    updateHandler(params, "updateBody.php");
    }

    //Vyhodnotenie skusky do databazy
function updateHandler(params, url){
let xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.onload = function(){
  console.log(this.responseText);
}

xhr.send(params);
}

    

    