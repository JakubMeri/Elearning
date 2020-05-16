//Selektory
let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let chat = document.querySelector(".chat");
let chatRoom = document.querySelector(".chat-room");
let btnMin = document.querySelector(".btnMin");
let btnMax = document.querySelector(".btnMax");
let chatBox = document.querySelector(".chat-box");
let showChat = document.getElementById("showChat");
let showProfile = document.getElementById("showProfile");
let closeChat = document.querySelector(".closeChat");
let logout = document.querySelector(".logout");
let chatArea = document.querySelector(".chat-area");
let profileBox = document.querySelector(".profile");
let btnCloseProf = document.querySelector(".btnProf");
let zmenaMena = document.querySelector(".meno");
let zmenaPriezviska = document.querySelector(".priezvisko");
let zmenaKruzku = document.querySelector(".kruzok");
let zmenaEmailu = document.querySelector(".email");
let zmenaHesla = document.querySelector(".heslo");
let nastaveniaVsetky = document.querySelectorAll(".zmena");


//Praca s chatom-----------------------------------------------
//Vypnutie okna
btn.addEventListener("click", () => {
box.style.opacity = "0";
clearInterval(messageHandler);
setTimeout(()=>{
    box.style.display = "none";
},400)
});
let messageHandler = null;
//Zobrazenie chatu velkeho
showChat.addEventListener("click", () =>{
box.style.display = "flex";
box.style.width = "1000px";
box.style.height = "600px";
btn.style.display = "block";
box.style.background = "white";
btnMin.style.display = "block";
btnMax.style.display = "block";
chatArea.style.display = "grid";  
box.style.bottom = "";
box.style.right = "";
loadSprava();
messageHandler = setInterval(loadSprava, 1000);
setTimeout(()=>{
    box.style.opacity = "1";
},200)
});
//Vysunutie chatu
let show = true;
chat.addEventListener("click", () => {
document.querySelector(".input").focus();
if(show == true)
{
    chatRoom.style.display = "block"; 
    chatBox.style.display = "block";
    messageHandler = setInterval(loadSprava, 1000);
    chatBox.style.opacity = "1";
    setTimeout(()=>{
        chatBox.style.bottom = "0%";
    },100)
}
else if(show == false){
    chatBox.style.bottom = "-100%";
    clearInterval(messageHandler);  
    setTimeout(()=>{
        chatRoom.style.display = "none";
    },800)
}
show = !show;
});

//Maximalizovanie okna
let max = true;
btnMax.addEventListener("click", () => {
    if(max ==true){
box.style.width = "100%";
box.style.height = "100%";
    }
    else{
        box.style.width = "1000px";
        box.style.height = "600px";  
    }
    max = !max;
});

//Minimalizovanie chatu
btnMin.addEventListener("click", () => {
    box.style.height = "30px";
    box.style.width = "260px";
    box.style.bottom = "0%";
    box.style.right = "0%";
    btn.style.display = "none";
    btnMin.style.display = "none";
    btnMax.style.display = "none";
    chatArea.style.display = "none";
    box.style.background = "rgba(0,0,0,.8)";
    clearInterval(messageHandler);
    setTimeout(()=>{
        box.style.display = "none";
        chat.style.display = "block";
    },400)
});
//Vypnutie chatu
closeChat.addEventListener("click", () =>{

 chatBox.style.bottom = "-100%";
 box.style.bottom = "";
 box.style.right = "";
 box.style.opacity = "0";
 show = true;
 chatBox.style.opacity = "0";
 clearInterval(messageHandler);
 setTimeout(()=>{
    chatBox.style.display = "none";
    chat.style.display = "none";
    chatRoom.style.display = "none";
},400);
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
//Praca s Profilom-----------------------------------------
//Nastavenia okna


//Vypnutie okna
btnCloseProf.addEventListener("click", () => {
    profileBox.style.opacity = "0";
    setTimeout(()=>{
      profileBox.style.display = "none";
  },200)
    });
//Otvorenie profilu
showProfile.addEventListener("click", () =>{
    profileBox.style.display = "flex";
    profileBox.style.width = "500px";
    profileBox.style.height = "600px";
    btnCloseProf.style.display = "block";
    profileBox.style.background = "white";
    profileBox.style.bottom = "";
    profileBox.style.right = "";
    setTimeout(()=>{
        profileBox.style.opacity = "1";
    },200)
    });

    //---------------------------------------------------------------------------------
    //Mobile version
    //Selectory
    let logoutMobile = document.querySelector(".logoutMobile");
    let homeBtn = document.getElementById("home");
    let homeMenu = document.querySelector(".mobileOverlayMenu");
    let backBtn = document.querySelector(".back");
    let backChat = document.querySelector(".backChat");
    let showMChat = document.getElementById("showMChat");
    let showMProfile = document.getElementById("showMProfile");
    let mobileChat = document.querySelector(".mobile-chat");
    let backProf = document.querySelector(".backProf");
    let mobileProf = document.querySelector(".mobile-profile");
    //Logout
    logoutMobile.addEventListener("click", () => {
        document.getElementById("load").className = "load";
    setTimeout(() => {
        document.location.href = "/Elearning/Logout.php";
    }, 2000);
    });
    //Open Menu
    homeBtn.addEventListener("click", () => {
            homeMenu.style.display = "flex";
            setTimeout(() => {
                homeMenu.style.right = "0";
                backBtn.style.display = "block";    
            }, 100); 
    });
    backBtn.addEventListener("click", () => {
        homeMenu.style.right = "-100%";
        backBtn.style.display = "none";  
        setTimeout(() => {
            homeMenu.style.display = "none";   
        }, 500);
    });
    //Show Mobile Chat
    showMChat.addEventListener("click", () =>{
        backBtn.style.display = "none";  
        mobileChat.style.display = "flex";
        messageHandler = setInterval(loadSprava, 1000);
        setTimeout(() => {
            mobileChat.style.right = "0";
            backChat.style.display = "block";    
        }, 100); 
});
backChat.addEventListener("click", () => {
    mobileChat.style.right = "-100%";
    backChat.style.display = "none";
    clearInterval(messageHandler);  
    setTimeout(() => {
        mobileChat.style.display = "none";
        backBtn.style.display = "block";     
    }, 500);
});
    //Show Mobile Profile
    showMProfile.addEventListener("click", () =>{
        backBtn.style.display = "none";
        mobileProf.style.display = "grid";
        setTimeout(() => {
        mobileProf.style.right = "0";
        backProf.style.display = "block";
        }, 0);
        });
    //Close Profile
    backProf.addEventListener("click", () => {
        backProf.style.display = "none";
        mobileProf.style.right = "-100%";
        backBtn.style.display = "block";
        setTimeout(() => {
        mobileProf.style.display = "none";     
        }, 500);
    });
    
/*-----------------------------------------------------
------------------------AJAX---------------------------*/
    //Nacitanie sprav

    function loadSprava(){
    
        
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'chat.php', true);
        
          xhr.onload = function(){
            if(this.status == 200){
              var message = JSON.parse(this.responseText);
              
              var output = '';
              
              for(var i in message){
                output += `<div class='message-large'>
                <p class='sender'>${message[i].meno} ${message[i].priezvisko}</p>
                <p class='message-text'>${message[i].sprava}</p>
                <p class='time'>${message[i].cas}</p>
                </div>`
              }
        
              document.querySelector(".view-message").innerHTML = output;
              document.querySelector(".chat-room").innerHTML = output;
              document.querySelector(".chatMobile-zone").innerHTML = output;
            }
          }
        
          xhr.send();
        
        }
        
        //Poslat Spravu
        let sendLargeChat = document.querySelector(".largechatBtn");
        sendLargeChat.addEventListener("click", (e)=>{
              e.preventDefault();
              
              
        
              let sprava = document.querySelector('.largechatInput').value;
              if(sprava == ""){

              }
              else{
              let params = "sprava=" + sprava;
        
        
              let xhr = new XMLHttpRequest();
              xhr.open('POST', 'chatsend.php', true);
              xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
              xhr.onload = function(){
                console.log(this.responseText);
              }
        
              xhr.send(params);
              document.querySelector(".ResetLargeChat").reset();
            }
        });
        //Min chat
        
        function loadMinSorava(){
        
        
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'smallchat.php', true);
        
          xhr.onload = function(){
            if(this.status == 200){
              var message = JSON.parse(this.responseText);
              
              var output = '';
              
              for(var i in message){
                output += `<div class='message-large'>
                <p class='sender'>${message[i].meno} ${message[i].priezvisko}</p>
                <p class='message-text'>${message[i].sprava}</p>
                <p class='time'>${message[i].cas}</p>
                </div>`
              }
        
              document.querySelector(".chat-room").innerHTML = output;
            }
          }
        
          xhr.send();
      
        }
        
        //Poslat Spravu Min chat
        let sendMinChat = document.querySelector(".send");
        sendMinChat.addEventListener("click", (e)=>{
              e.preventDefault();
             
              
        
              let sprava = document.querySelector('.input').value;
              if(sprava == ""){

              }
              else{
              let params = "sprava="+ sprava;
              
        
        
              let xhr = new XMLHttpRequest();
              xhr.open('POST', 'chatsend.php', true);
              xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
              xhr.onload = function(){
                console.log(this.responseText);
              }
        
              xhr.send(params);
              document.querySelector(".SmallChatReset").reset();
            }
        });
        
        //Mobile chat
        
        function loadMobileSprava(){
        
        
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'mobileChat.php', true);
        
          xhr.onload = function(){
            if(this.status == 200){
              var message = JSON.parse(this.responseText);
              
              var output = '';
              
              for(var i in message){
                output += `<div class='spravyMobil'>
                <p class='odosielatelMobil'>${message[i].meno} ${message[i].priezvisko}</p>
                <p class='textSpravy'>${message[i].sprava}</p>
                <p class='chatMTime'>${message[i].cas}</p>
                </div>`
              }
        
              document.querySelector(".chatMobile-zone").innerHTML = output;
            }
          }
        
          xhr.send();
        
        }
        
        //Poslat Spravu Mobile chat
        let sendMobChat = document.querySelector(".odoslatMobil");
        sendMobChat.addEventListener("click", (e)=>{
              e.preventDefault();
             
              
          
              let sprava = document.querySelector('.sendMobileMessage').value;
              if(sprava == ""){

              }
              else{
              let params = "sprava="+ sprava;
              
        
        
              let xhr = new XMLHttpRequest();
              xhr.open('POST', 'mobileChatSend.php', true);
              xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
              xhr.onload = function(){
                console.log(this.responseText);
              }
        
              xhr.send(params);
              document.querySelector(".ResetMobileChat").reset();
            }
        });
        
     //Zobrazit zadania
      function loadZadanie(){

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'showZadania.php', true);
      
        xhr.onload = function(){
          if(this.status == 200){
            let zadania = JSON.parse(this.responseText);
            
            let output = '<tr><th>ID</th><th>Popis zadania</th></tr>';
            
            for(let i in zadania){
              let poradie = Number(i) + 1;
              output += `<tr>
              <td>${poradie}</td>
              <td>${zadania[i].popiszadania}</td>
              </tr>`;
            }
      
            document.querySelector(".zadaniaZoznam").innerHTML = output;
            document.querySelector(".zadaniaZoznam2").innerHTML = output;

            let mojeZadanie = document.querySelector(".zadanie");
            //vyber zadania
            let vyberZadanie = document.querySelector(".zadania-vyber");
            let pole = [...zadania];
            vyberZadanie.addEventListener("click", () => {
            
                let vyber = Math.floor(Math.random() * pole.length);
                let vybrane = pole[vyber].popiszadania;
                
                 mojeZadanie.innerHTML = vybrane;   


            uloz();
            vyberZadanie.style.display = "none";
            upravaDatumuOdovzdania();
            });
            
            zadaniaVyber.addEventListener("click", () => {
                let vyber = Math.floor(Math.random() * pole.length);
                let vybrane = pole[vyber].popiszadania;
                
                 mojeZadanie.innerHTML = vybrane; 
                 document.querySelector(".tvojezadanieP").innerHTML = vybrane;   


            uloz();
            vyberZadanie.style.display = "none";
            zadaniaVyber.style.display = "none";
            document.querySelector(".vybratZadanie").style.display = "none";
            }
            );   
          }
        }
        xhr.send();


      }

      //ODOSLAT VYBRANE ZADANIE
       
        
  function uloz(){
      
    let zadanieOdoslane = document.querySelector('.zadanie').innerHTML;
   
    if(zadanieOdoslane == "")
    {

    }
    else{
    let data = "zadanie="+ zadanieOdoslane;
    
  

    let xhr2 = new XMLHttpRequest();
    xhr2.open('POST', 'vybraneZadanie.php', true);
    xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr2.onload = function(){
     /*  console.log(xhr2.responseText); */

    }
    xhr2.send(data);
    let zobrazSvojeZadanie = document.querySelector(".vybratZadanie");
    zobrazSvojeZadanie.style.display = "flex";
    setTimeout(() => {
        zobrazSvojeZadanie.style.opacity = "1";
    }, 0);
    }
  }
  // Zobrazenie datumu na odovzdanie zadania
  let datumOdov = document.querySelector(".datumOdov");

  (function datumOdovzdania(){
    let xhr = new XMLHttpRequest();
  xhr.open('GET', 'datumOdov.php', true);
  xhr.onload = function(){
    if(this.status == 200){
      let date = JSON.parse(this.responseText);
      if(date[0].zobraz == 0){
        let output =  `Dátum odovzdania vypršal.`;
        datumOdov.innerHTML = output; 
      }
      else{
      if(date[0].mesiac < 10){
        if(date[0].den < 10){
          let output = `Dátum odovzdania: 0${date[0].den}. 0${date[0].mesiac}. ${date[0].rok}  ${date[0].cas}`;
          datumOdov.innerHTML = output;
        }
        else{
        let output = `Dátum odovzdania: ${date[0].den}. 0${date[0].mesiac}. ${date[0].rok}  ${date[0].cas}`;
        datumOdov.innerHTML = output;
        }
      }
      else{
        if(date[0].den < 10){
          let output = `Dátum odovzdania: 0${date[0].den}. ${date[0].mesiac}. ${date[0].rok}  ${date[0].cas}`;
          datumOdov.innerHTML = output;
        }
        else{
        let output = `Dátum odovzdania: ${date[0].den}. ${date[0].mesiac}. ${date[0].rok}  ${date[0].cas}`;
        datumOdov.innerHTML = output;
        }
    }
  }
     if(date[0].zobraz != 1){ 
      odovzdatBtn.style.display = "none";
    
    }
    else{
      odovzdatBtn.style.display = "block";
    }
    }
    upravaDatumuOdovzdania();
  }
  xhr.send();
})();
const upravaDatumuOdovzdania = () => {
  setTimeout(() => {
  if(document.querySelector(".zadanie").innerHTML == ""){
    datumOdov.style.display = "none";
    odovzdatBtn.style.display = "none";
  }
  else{
    datumOdov.style.display = "block";
    odovzdatBtn.style.display = "block";
  }
}, 300);
}

  //Skrytie odovzdania
  function skrytZadania(){
    let datum = new Date();
    let denT = datum.getDate();
    let mesiacT = datum.getMonth() + 1;
    let rokT = datum.getFullYear();
    let hodT = datum.getHours();
    let minT = datum.getMinutes();
    if(minT < 10){
      minT = "0" + minT;
    }
    if(hodT < 10){
      hodT = "0" + hodT;
    }
    let date = datumOdov.innerHTML;
    let rep = date.replace("Dátum odovzdania: ", "");
    let reg = /[.:]?\s?/;
    let pole = rep.split(reg);
    let den = Number(pole[0] + pole[1]);
    let mesiac = Number(pole[2] + pole[3]);
    let rok = Number(pole[4] + pole[5] + pole[6] + pole[7]);
    let hod = Number(pole[10] + pole[11]);
    let min = Number(pole[12] + pole[13]);

    if(denT == den && mesiacT == mesiac && rokT == rok && hodT >= hod && minT >= min){
      let params = "zobraz=" + 0;
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'hideZadanieBtn.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(params);
    }
    else if(denT > den && mesiacT >= mesiac && rokT >= rok){
      let params = "zobraz=" + 0;
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'hideZadanieBtn.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(params);
    }
    else if(mesiacT > mesiac && rokT >= rok){
      let params = "zobraz=" + 0;
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'hideZadanieBtn.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(params);
    }
    else{
    }

  }
  setTimeout(() => {
    skrytZadania();
  }, 2000);



      //Profil udaje
    (function loadUsers(){       
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'profil.php', true);
        
          xhr.onload = function(){
            if(this.status == 200){
              var user = JSON.parse(this.responseText);
             
              let output = '';
              
              for(let i in user){
                output += `
                <li>${user[i].meno}</li>
                <li>${user[i].priezvisko}</li>
                <li>${user[i].Kruzok}</li>
                <li>${user[i].email}</li>
                `
              }
        
              document.querySelector(".premenne").innerHTML = output; 
              document.querySelector(".premenne2").innerHTML = output; 
            }
          }
          xhr.send();
        })();
      //Zadat kruzok
      let zadatKruzok = document.querySelector(".zadatKruzok");
      zadatKruzok.addEventListener("click", (e)=>{
            e.preventDefault();
           
            
      
            let kruzok = document.querySelector('.cislokruzku').value;
            let params = "kruzok="+ kruzok;
            
      
      
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'kruzok.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      
            xhr.onload = function(){
              console.log(this.responseText);
            }
      
            xhr.send(params);
            document.getElementById("zadanieKruzku").reset();
      });
      //presunutie na kurz
      let showKurz = document.querySelector(".zadatKruzok");
      let kruzok = document.querySelector(".kruzok");
      showKurz.addEventListener("click" , () => {
        kruzok.style.opacity = "0";
        setTimeout(() => {
            kruzok.style.display = "none";
        }, 500); 
      });

      //Zadania info
      const zadaniaInfo = document.querySelector(".zadania-info");
      const InfoBox = document.querySelector(".infoZadania");
      zadaniaInfo.addEventListener("click", () => {
            InfoBox.style.display = "block";
              
        setTimeout(()=>{
            InfoBox.style.opacity = "1";    
        },0)
        });
    
        //Zadania info close
        const closeInfo = document.querySelector(".closeInfo");
        closeInfo.addEventListener("click", () => {
            InfoBox.style.opacity = "0";
            setTimeout(() => {
            InfoBox.style.display ="none";
            }, 400);
        });
        //Tabulky
        const tabulka1 = document.querySelector(".tabulka1");
        const tabulka2 = document.querySelector(".tabulka2");
        const btnTbl1 = document.querySelector(".zadania-tab1");
        const btnTbl2 = document.querySelector(".zadania-tab2");
        const closeTbl1 = document.querySelector(".closeTabulka1");
        const closeTbl2 = document.querySelector(".closeTabulka2");
        //Tabulka1
        btnTbl1.addEventListener("click", () => {
            tabulka1.style.display = "flex";
              
        setTimeout(()=>{
            tabulka1.style.opacity = "1";    
        },0)
        });
    
        //Close Tabulka1
        closeTbl1.addEventListener("click", () => {
            tabulka1.style.opacity = "0";
            setTimeout(() => {
            tabulka1.style.display ="none";
            }, 400);
        });
        //Tabulka2
        btnTbl2.addEventListener("click", () => {
            tabulka2.style.display = "flex";
              
        setTimeout(()=>{
            tabulka2.style.opacity = "1";    
        },0)
        });
    
        //Close Tabulka1
        closeTbl2.addEventListener("click", () => {
            tabulka2.style.opacity = "0";
            setTimeout(() => {
            tabulka2.style.display ="none";
            }, 400);
        });
        //Odovzdat zadanie
        const odovzdatZadanie = document.querySelector(".odovzdatZadanie");
        const odovzdatBtn = document.querySelector(".odovzdat-zadanie");

        odovzdatBtn.addEventListener("click", () => {
            hideOdovzdanie();
            odovzdatZadanie.style.display = "flex";
            setTimeout(() => {
            odovzdatZadanie.style.opacity = "1";
            }, 0);
        });
        //Schovat odovzdanie
        const closeOdovzdanie = document.querySelector(".closeOdovzdanie");
        closeOdovzdanie.addEventListener("click", (e) => {
            e.preventDefault();
            odovzdatZadanie.style.opacity = "0";
            setTimeout(() => {
            odovzdatZadanie.style.display = "none";
            }, 300);
        });
        //Show zadania
        let zadanieHide = null;
        const showZadania = document.querySelector(".showZadania");
        const zadania = document.querySelector(".zadania");
        showZadania.addEventListener("click", () => {
            loadZadanie();
            zadania.style.display = "flex";
            zadanieHide = setInterval(skrytZadania, 5000);
            setTimeout(() => {
                zadania.style.opacity = "1";
            }, 0);
        });
        //Hide zadania
        const hideZadania = document.querySelector(".btnZ");
        hideZadania.addEventListener("click", () => {
          clearInterval(zadanieHide);
            zadania.style.opacity = "0";
            menuZadania.style.transform = "scale(0)";
            zobrazZadania = !zobrazZadania;
        
        setTimeout(() => {
            zadania.style.display = "none";
        }, 400);
    });
        //Mobile Zadania
        const mobileZadaniaShowMenu = document.querySelector(".zadaniaShowMenu");
        const menuZadania = document.querySelector(".zadania-menu");
        const moznosti = document.querySelectorAll(".btnZadania");
        let zobrazZadania = true;
        mobileZadaniaShowMenu.addEventListener("click", () =>{
            if(zobrazZadania == true)
            menuZadania.style.transform = "scale(1)";
            else
            menuZadania.style.transform = "scale(0)";
            zobrazZadania = !zobrazZadania;
        });
        //Zadania menu
        const zadaniaMInfo = document.getElementById("ZMInfo");
        const zadaniaMTab1 = document.getElementById("ZMT1");
        const zadaniaMTab2 = document.getElementById("ZMT2");
        const zadaniaVyber = document.getElementById("ZVM");
        const zadaniaOdovzdatM = document.getElementById("ZOM");
        let backInfo = document.querySelector(".backInfo");
        let backTbl1 = document.querySelector(".backTbl1");
        let backTbl2 = document.querySelector(".backTbl2");
        let odovzdatMZ = document.querySelector(".odovzdatMZ");
        const vybratbackMZ = document.querySelector(".vybratbackMZ");
        //Obrazovky
        const informacieZadaniaMobile = document.querySelector(".infoZadaniaMobile");
        const MobileTable1 = document.querySelector(".TabulkaM1");
        const MobileTable2 = document.querySelector(".TabulkaM2");
        const vyberMzadanie = document.querySelector(".vybratZadanieM");
        const odovZMobile = document.querySelector(".odovzdatZadanieM");

        zadaniaMInfo.addEventListener("click", () => {
            informacieZadaniaMobile.style.display = "block";
            backInfo.style.display = "block";
            mobileZadaniaShowMenu.style.display = "none";
            menuZadania.style.transform = "scale(0)";
            zobrazZadania = !zobrazZadania;
            setTimeout(() => {
                informacieZadaniaMobile.style.opacity = "1";
            }, 0);
        });
        backInfo.addEventListener("click", () =>{
            informacieZadaniaMobile.style.opacity = "0";
            backInfo.style.display = "none";
            mobileZadaniaShowMenu.style.display = "block";
            setTimeout(() => {
                informacieZadaniaMobile.style.display = "none"; 
            }, 400);
        });


        zadaniaMTab1.addEventListener("click", () => {
            MobileTable1.style.display = "flex";
            backTbl1.style.display = "block";
            mobileZadaniaShowMenu.style.display = "none";
            menuZadania.style.transform = "scale(0)";
            zobrazZadania = !zobrazZadania;
            setTimeout(() => {
            MobileTable1.style.opacity = "1";
            }, 0);
        });
        backTbl1.addEventListener("click", () =>{
            MobileTable1.style.opacity = "0";
            backTbl1.style.display = "none";
            mobileZadaniaShowMenu.style.display = "block"; 
            setTimeout(() => {
                MobileTable1.style.display = "none";
            }, 400);
        });

        zadaniaMTab2.addEventListener("click", () => {
            MobileTable2.style.display = "flex";
            backTbl2.style.display = "block";
            mobileZadaniaShowMenu.style.display = "none";
            menuZadania.style.transform = "scale(0)";
            zobrazZadania = !zobrazZadania;
            setTimeout(() => {
                MobileTable2.style.opacity = "1";
            }, 0);
        });
        backTbl2.addEventListener("click", () =>{
            MobileTable2.style.opacity = "0";
            backTbl2.style.display = "none";
            mobileZadaniaShowMenu.style.display = "block";  
            setTimeout(() => {
                MobileTable2.style.display = "none";
            }, 400);
        });

        //back Zadania
        const backZadania = document.querySelector(".backZadania");
        let mobileZadania = document.querySelector(".mobile-zadania");
        let mobilezadaniaShow = document.getElementById("showZadaniaM");

        mobilezadaniaShow.addEventListener("click", () => {
            loadZadanie();
            mobileZadania.style.right = "0%";
            backZadania.style.display ="block";
            backBtn.style.display = "none";
        });

        backZadania.addEventListener("click", () => {
            mobileZadania.style.right = "-100%";
            backZadania.style.display ="none";
            backBtn.style.display = "block";
            menuZadania.style.transform = "scale(0)";
            zobrazZadania = !zobrazZadania;
        });

        //moje zadanie zobrazit
        (function loadMojeZadanie(){       
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'mojeZadanie.php', true);
          
            xhr.onload = function(){
              if(this.status == 200){
                var zadanie = JSON.parse(this.responseText);
                let output = '';
                if(zadanie == ""){

                }
                else{

                
                output += zadanie[0].popiszadania;
                let mojeZadanie =document.querySelector(".zadanie");
                let zadanieP = document.querySelector(".tvojezadanieP");
                zadanieP.innerHTML = output;
                mojeZadanie.innerHTML = output;
                let zadanieBtnChoose = document.querySelector(".zadania-vyber");
                if(mojeZadanie != ""){
                    zadanieBtnChoose.style.display = "none";
                    zadaniaVyber.style.display = "none";
                } 
                else{
                    zadanieBtnChoose.style.display = "block";
                    zadaniaVyber.style.display = "none";
                }
              }
            }
          }
            xhr.send();
          })();

//HODNOTENIE
const showHodnotenie = document.getElementById("showHodnotenie");
const hodnotenie = document.querySelector(".hodnotenie");
const hideHodnotenie = document.querySelector(".hideHodnotenie");

showHodnotenie.addEventListener("click", () => {
hodnotenie.style.display = "flex";

setTimeout(() => {
    hodnotenie.style.opacity = "1";
}, 0);



  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'hodnotenie.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      let hodnotenie = JSON.parse(this.responseText);
      let output = '';
      
      output += "<tr class='nadpis'><td>SEMESTER</td><td>ZADANIE</td><td>SKÚŠKA</td><td>SPOLU</td></tr>";
      for(let i = 0; i<hodnotenie.length; i++){
        let spoluBody = Number(hodnotenie[i].semester) + Number(hodnotenie[i].zadanie) + Number(hodnotenie[i].Skuska);
        output += `<tr><td>${hodnotenie[i].semester}</td><td>${hodnotenie[i].zadanie}</td><td>${hodnotenie[i].Skuska}</td><td class="body-spolu">${spoluBody}</td></tr>`;

        setTimeout(() => {
          let spolu = document.querySelector(".body-spolu");
          spolu.addEventListener("mouseover", () =>{
            if(Number(spolu.innerHTML)<50){
              spolu.innerHTML = "Fx";
            }
            if(Number(spolu.innerHTML) > 50 && Number(spolu.innerHTML) < 60){
              spolu.innerHTML = "E";
            }
            if(Number(spolu.innerHTML) >= 60 && Number(spolu.innerHTML) < 70){
              spolu.innerHTML = "D";
            }
            if(Number(spolu.innerHTML) >= 70 && Number(spolu.innerHTML) < 80){
              spolu.innerHTML = "C";
            }
            if(Number(spolu.innerHTML) >= 80 && Number(spolu.innerHTML) < 90){
              spolu.innerHTML = "B";
            }
            if(Number(spolu.innerHTML) > 90){
              spolu.innerHTML = "A";
            }
          });
          spolu.addEventListener("mouseout", () =>{
            spolu.innerHTML = spoluBody;
          });
        }, 500);
      }

    document.querySelector(".hodnotenieZobraz").innerHTML = output;
    


    }
  }

  xhr.send();


});
hideHodnotenie.addEventListener("click", () => {
    hodnotenie.style.opacity = "0";
    setTimeout(() => {
        hodnotenie.style.display = "none";
    }, 400);
});
//MOBILE
const mobileHodnotenie = document.getElementById("hodnotenieM");
const mobileHodnotenieBox = document.querySelector(".hodnotenieMobile");
const backHodnotenieM = document.querySelector(".backHodnotenie");

mobileHodnotenie.addEventListener("click", () => {

mobileHodnotenieBox.style.right = "0";
backBtn.style.display = "none";
backHodnotenieM.style.display = "block";

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'hodnotenieMobile.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      let hodnotenieMobile = JSON.parse(this.responseText);
      
      let output = '';
      
    
      for(let i in hodnotenieMobile){
        let spoluBody = Number(hodnotenieMobile[i].semester) + Number(hodnotenieMobile[i].zadanie) + Number(hodnotenieMobile[i].Skuska);
        output += `<tr><td>SEMESTER</td><td>${hodnotenieMobile[i].semester}</td><tr><td>ZADANIE</td><td>${hodnotenieMobile[i].zadanie}</td></tr><tr><td>SKÚŠKA</td><td>${hodnotenieMobile[i].Skuska}</td></tr><tr><td>SPOLU</td><td>${spoluBody}</td></tr><br>`;
      }

    document.querySelector(".hodnotenieZobrazM").innerHTML = output;
    }
  }
  xhr.send();
});
//Hodnotenie Mobile s5
backHodnotenieM.addEventListener("click", () => {
  backBtn.style.display = "block";
  backHodnotenieM.style.display = "none";
  mobileHodnotenieBox.style.right = "-100%";
});
//TEST BOX
let test = document.querySelector(".testBOX");
//ODPOCET
function odpocet(){
let time_in_minutes = 4;
let current_time = Date.parse(new Date());
let deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor( (t/1000) % 60 );
  if(seconds < 10){
    seconds = "0"+seconds;
  }
	let minutes = Math.floor( (t/1000/60) % 60 );
	let hours = Math.floor( (t/(1000*60*60)) % 24 );
	let days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	let clock = document.querySelector(".timer");
	function update_clock(){
    let t = time_remaining(endtime);
		clock.innerHTML = "00:"+"0"+t.minutes+':'+t.seconds;
    if(t.total<=0){ 
    clearInterval(timeinterval); clock.innerHTML="00:00:00"
    test.style.display ="none";
    odoslanieBodov();
  }
	}
	update_clock(); // run function once at first to avoid delay
	let timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);
}



function loadtest(url){
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function(){
  if(this.status == 200){
    let hodnotenie = JSON.parse(xhr.responseText);

     let output1 = `
     <p>1. ${hodnotenie[0].otazka}</p>
     <li><input class='otazka1Odpoved' type="checkbox" name="1" value="${hodnotenie[0].spravna}">a) ${hodnotenie[0].odpoved}</li>
     <li><input class='otazka1Odpoved' type="checkbox" name="1" value="${hodnotenie[1].spravna}">b) ${hodnotenie[1].odpoved}</li>
     <li><input class='otazka1Odpoved' type="checkbox" name="1" value="${hodnotenie[2].spravna}">c) ${hodnotenie[2].odpoved}</li>
     <li><input class='otazka1Odpoved' type="checkbox" name="1" value="${hodnotenie[3].spravna}">d) ${hodnotenie[3].odpoved}</li>
     `;
     let output2 = `
     <p>2. ${hodnotenie[5].otazka}</p>
     <li><input class='otazka2Odpoved' type="radio" name="2" value="${hodnotenie[4].spravna}">a) ${hodnotenie[4].odpoved}</li>
     <li><input class='otazka2Odpoved' type="radio" name="2" value="${hodnotenie[5].spravna}">b) ${hodnotenie[5].odpoved}</li>
     <li><input class='otazka2Odpoved' type="radio" name="2" value="${hodnotenie[6].spravna}">c) ${hodnotenie[6].odpoved}</li>
     `;
     let output3 = `
     <p>3. ${hodnotenie[7].otazka}</p>
     <li><input class='otazka3Odpoved' type="radio" name="3" value="${hodnotenie[7].spravna}">a) ${hodnotenie[7].odpoved}</li>
     <li><input class='otazka3Odpoved' type="radio" name="3" value="${hodnotenie[8].spravna}">b) ${hodnotenie[8].odpoved}</li>
       `;
     let output4 = `
     <p>4. ${hodnotenie[9].otazka}</p>
     <li><input class='otazka4Odpoved' type="radio" name="4" value="${hodnotenie[9].spravna}">a) ${hodnotenie[9].odpoved}</li>
     <li><input class='otazka4Odpoved' type="radio" name="4" value="${hodnotenie[10].spravna}">b) ${hodnotenie[10].odpoved}</li>
     <li><input class='otazka4Odpoved' type="radio" name="4" value="${hodnotenie[11].spravna}">c) ${hodnotenie[11].odpoved}</li>
     <li><input class='otazka4Odpoved' type="radio" name="4" value="${hodnotenie[12].spravna}">d) ${hodnotenie[12].odpoved}</li>
     `;
  document.querySelector(".otazka1").innerHTML = output1; 
  document.querySelector(".otazka2").innerHTML = output2; 
  document.querySelector(".otazka3").innerHTML = output3; 
  document.querySelector(".otazka4").innerHTML = output4; 

  }
}

xhr.send();
}
//ZACATIE TESTU 1
let testBtn1 = document.getElementById("prednaska1");
testBtn1.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test1.php');
  odpocet();
});
//ZACATIE TESTU 2
let testBtn2 = document.getElementById("prednaska2");
testBtn2.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test2.php');
  odpocet();
});
//ZACATIE TESTU 3
let testBtn3 = document.getElementById("prednaska3");
testBtn3.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test3.php');
  odpocet();
});
//ZACATIE TESTU 4
let testBtn4 = document.getElementById("prednaska4");
testBtn4.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test4.php');
  odpocet();
});
//ZACATIE TESTU 5
let testBtn5 = document.getElementById("prednaska5");
testBtn5.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test5.php');
  odpocet();
});
//ZACATIE TESTU 6
let testBtn6 = document.getElementById("prednaska6");
testBtn6.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test6.php');
  odpocet();
});
//ZACATIE TESTU 7
let testBtn7 = document.getElementById("prednaska7");
testBtn7.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test7.php');
  odpocet();
});
//ZACATIE TESTU 8
let testBtn8 = document.getElementById("prednaska8");
testBtn8.addEventListener("click", () => {
  test.style.display = "flex";
  loadtest('testPrednaska/test8.php');
  odpocet();
});
//SKUSKA
let skuskaBtn = document.getElementById("skuska");
skuskaBtn.addEventListener("click", () => {
  window.location = "http://localhost/Elearning/User/skuska/skuska.php";
});
//HODNOTENIE TESTU
let body = 0;
let vyhodnotenie1 = document.getElementById("test1");


const odoslanieBodov = () =>{
  let otazka1 = document.querySelectorAll(".otazka1Odpoved:checked");
for(let i = 0; i<otazka1.length; i++){
  if(otazka1[i].value == 1 ){
    body+=0.25;
  }
  else if(otazka1[i].value == 0 ){
    body=0;
  }
}
let otazka2 = document.querySelectorAll(".otazka2Odpoved:checked");
for(let i = 0; i<otazka2.length; i++){
  if(otazka2[i].value == 1 ){
    body+=0.5;
  }
  else if(otazka2[i].value == 0 ){
    body=0;
  }
}
let otazka3 = document.querySelectorAll(".otazka3Odpoved:checked");
for(let i = 0; i<otazka3.length; i++){
  if(otazka3[i].value == 1 ){
    body+=0.5;
  }
  else if(otazka3[i].value == 0 ){
    body=0;
  }
}
let otazka4 = document.querySelectorAll(".otazka4Odpoved:checked");
for(let i = 0; i<otazka4.length; i++){
  if(otazka4[i].value == 1 ){
    body+=0.5;
  }
  else if(otazka4[i].value == 0 ){
    body=0;
  }
}
sendPoints('testPrednaska/testbody.php');
}
vyhodnotenie1.addEventListener("click",() =>{
  test.style.display = "none";
  odoslanieBodov();
  clearInterval(timeinterval);
});

const sendPoints = (url) => {
  let params ="body=" + body;       
let xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.onload = function(){
  console.log(this.responseText);
}

xhr.send(params);
}


//Zapnutie testu
const zapnutTest = () => {
          
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'zobrazenieTestu.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      let message = JSON.parse(this.responseText);
      for (let i = 0; i < message.length; i++) {
        let cislo = Number(message[i].zapnutie);
        let test = eval(message[i].nazovTestu);
        showTest(cislo, test);
      }
    }
  }

  xhr.send();
}

zapnutTest();

//zobrazovanie testov




const showTest = (vstup, btn) => {
  switch (vstup) {
    case 2: btn.style.display = "none";
    break;
     
    case 1: btn.style.display = "block";
    break;
  
    default:
      break;
  }
}

//test mobil
let showTestBtn = document.getElementById("showTest");
showTestBtn.addEventListener("click", () => {
let testy = document.querySelectorAll(".btn-test");
testy.forEach( a => {
  if(a.style.display == "block"){
    if(a.innerHTML == "Skúška"){
      showTestBtn.innerHTML = "Použi PC";
      setTimeout(() => {
        showTestBtn.innerHTML = "dostupné testy";
      }, 3000);
    }
    else{

   
    let cisloTestu = a.innerHTML.split(" ")[1];
  test.style.display = "flex";
  loadtest(`testPrednaska/test${cisloTestu}.php`);
  odpocet(); 
}
  }
  else{
    showTestBtn.innerHTML = "Žiaden test";
    setTimeout(() => {
      showTestBtn.innerHTML = "dostupné testy";
    }, 3000);
  }
});
});

//už odovzdané zadanie

const hideOdovzdanie = () => {
  fetch("hodnotenie.php")
  .then( res => res.json())
  .then( data => {
    if(Number(data[0].odovzdane) == 1){
      document.getElementById("odovzdaneZadanie").style.display = "none";
      document.getElementById("upload").style.display = "none";
      document.querySelector(".hideSpravaZadanie").style.display = "none";
      document.getElementById("sprievodnyText").innerHTML = "ODOVZDANÉ!";
    }
  });
}
hideOdovzdanie();
//nove heslo
document.getElementById("resetHesla").addEventListener("click", () =>{
  let hlaska = document.querySelector(".uspesnyReset");
  let noveheslo = document.getElementById("noveHeslo").value;
  if(noveheslo.length < 8){
    hlaska.innerHTML = "MIN. 8 ZNAKOV";
    hlaska.style.color = "red";
    setTimeout(() => {
      hlaska.style.display = "none";
      hlaska.innerHTML = "";
      hlaska.style.color = "green";
    }, 2000);
  }
  else{
    let params = "heslo=" + noveheslo;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'noveHeslo.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
    xhr.onload = function(){
      hlaska.style.display = "block";
      hlaska.innerHTML = "ZMENENÉ HESLO!";
    }
  
    xhr.send(params);
    document.getElementById("noveHeslo").value = "";
    setTimeout(() => {
      hlaska.style.display = "none";
      hlaska.innerHTML = "";
    }, 2000);
  }  
});
