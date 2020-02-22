//Selektory
let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let chat = document.querySelector(".chat");
let chatRoom = document.querySelector(".chat-room");
let btnMin = document.querySelector(".btnMin");
let btnMax = document.querySelector(".btnMax");
let chatDelete = document.querySelector(".chatDelete");
let chatBox = document.querySelector(".chat-box");
let showChat = document.getElementById("showChat");
let closeChat = document.querySelector(".closeChat");
let logout = document.querySelector(".logout");
let chatArea = document.querySelector(".chat-area");
let btnProfSettings = document.querySelector(".btnProfSettings");
let btnCloseProf = document.querySelector(".btnProf");
let zmenaMena = document.querySelector(".meno");
let zmenaPriezviska = document.querySelector(".priezvisko");
let zmenaKruzku = document.querySelector(".kruzok");
let zmenaEmailu = document.querySelector(".email");
let zmenaHesla = document.querySelector(".heslo");
let nastaveniaVsetky = document.querySelectorAll(".zmena");
let hideStudenti = document.querySelector(".btnStudenti");
let studenti = document.querySelector(".studenti");
let zobrazStudentov = document.getElementById("showStudenti");



//Studenti zobrazenie
zobrazStudentov.addEventListener("click", () =>{
    studenti.style.display = "flex";
    studenti.style.width = "1000px";
    studenti.style.height = "600px";
    hideStudenti.style.display = "block";
    setTimeout(()=>{
        studenti.style.opacity = "1";
    },0)
    });
//Studenti Vypnutie
hideStudenti.addEventListener("click", () => {
    studenti.style.opacity = "0";
    
    setTimeout(()=>{
        studenti.style.display = "none";
    },400)
    });
//Vypnutie okna
btn.addEventListener("click", () => {
box.style.opacity = "0";
clearInterval(messageHandler);
setTimeout(()=>{
    box.style.display = "none";
},400)
});
//Praca s chatom-----------------------------------------------
let messageHandler = null;
let messageHandlerM = null;
let messageHandlerMin = null;
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
loadChat();
messageHandler = setInterval(loadChat, 1000);
setTimeout(()=>{
    box.style.opacity = "1";
},0)
});
//Vysunutie chatu
let show = true;
chat.addEventListener("click", () => {
document.querySelector(".input").focus();
if(show == true)
{
    chatRoom.style.display = "block"; 
    chatBox.style.display = "block";
    loadChat();
    messageHandlerMin = setInterval(loadChatMin, 1000);
    chatBox.style.opacity = "1";
    setTimeout(()=>{
        chatBox.style.bottom = "0%";
    },100)
}
else if(show == false){
    chatBox.style.bottom = "-100%";
    clearInterval(messageHandlerMin);  
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

//Delete chatu
chatDelete.addEventListener("click", (e) =>{
  if(confirm("Chcete zmazat chat?")){
  e.preventDefault();
  let zmaz = "delete";
  var params = "delete=" + zmaz;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'deleteChat.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function(){
    console.log(this.responseText);
  }

  xhr.send(params);
}
else{

}
setTimeout(() => {
  loadChat();
}, 0);
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
clearInterval(messageHandlerMin); 
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


    //---------------------------------------------------------------------------------
    //Mobile version
    //Selectory
    let logoutMobile = document.querySelector(".logoutMobile");
    let homeBtn = document.getElementById("home");
    let homeMenu = document.querySelector(".mobileOverlayMenu");
    let backBtn = document.querySelector(".back");
    let backChat = document.querySelector(".backChat");
    let showMChat = document.getElementById("showMChat");
    let mobileChat = document.querySelector(".mobile-chat");
    let backStud = document.querySelector(".BackStud");
    let studentMob = document.querySelector(".studentiMob");
    let showStudentMobile = document.getElementById("showStudentiM");
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
      loadSpravaM();
      messageHandler = setInterval(loadSpravaM, 1000);
      setTimeout(() => {
          mobileChat.style.right = "0";
          backChat.style.display = "block";    
      }, 100); 
});
//back Mobile chat
backChat.addEventListener("click", () => {
  mobileChat.style.right = "-100%";
  backChat.style.display = "none";
  clearInterval(messageHandler);  
  setTimeout(() => {
      mobileChat.style.display = "none";
      backBtn.style.display = "block";     
  }, 500);
});
    //Show Mobile Student
    showStudentMobile.addEventListener("click", () =>{
      backBtn.style.display = "none";  
      studentMob.style.display = "flex";
      setTimeout(() => {
        studentMob.style.right = "0";
        backStud.style.display = "block";    
      }, 100); 
});
//back Mobile Student
  backStud.addEventListener("click", () => {
  studentMob.style.right = "-100%";
  backStud.style.display = "none";  
  setTimeout(() => {
    studentMob.style.display = "none";
      backBtn.style.display = "block";     
  }, 500);
});


/*-----------------------------------------------------
------------------------AJAX---------------------------*/
    //Nacitanie studentov

function loadUsers(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'studenti.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      var studenti = JSON.parse(this.responseText);
      
      var output = '';
      output += "<tr class='nadpis'><td>ID</td><td>Meno</td><td>Priezvisko</td><td>Krúžok</td><td>Email</td></tr>";
    
      for(var i in studenti){
        let pocet = Number(i) + 1;
        output += `<tr><td>${pocet}</td> <td>${studenti[i].meno}</td><td>${studenti[i].priezvisko}</td><td>${studenti[i].Kruzok}</td><td>${studenti[i].email}</td></tr><br>`;
      }

    document.querySelector(".tabulkaSL").innerHTML = output;
   

      
    }
  }

  xhr.send();
}
loadUsers();

//zmaz studenta
let delbutton = document.querySelector(".subDel")
delbutton.addEventListener("click", (e)=>{
      e.preventDefault();
      let input = document.querySelector('.delUname').value;
      let pole =  input.split(" ");
      let params = "meno="+pole[0] +"&priezvisko=" +pole[1];
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'studentZmaz.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(params);
      document.querySelector(".StudentReset").reset(); 
      setTimeout(() => {
        loadUsers();
      }, 0);
      
    });
//MOBIL
    //Nacitanie studentov

    function loadUsersM(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'studentiMob.php', true);
  
    xhr.onload = function(){
      if(this.status == 200){
        let studenti = JSON.parse(this.responseText);
        
        let output = '';
        output += "<tr class='nadpis'><td>ID</td><td>Meno</td><td>Priezvisko</td><td>Krúžok</td><td>Email</td></tr>";
      
        for(let i in studenti){
          let pocet = Number(i) +1;
          output += `<tr><td>${pocet}</td> <td>${studenti[i].meno}</td><td>${studenti[i].priezvisko}</td><td>${studenti[i].Kruzok}</td><td>${studenti[i].email}</td></tr><br>`;
        }
  
      document.querySelector(".tabulkaS").innerHTML = output;
     
  
        
      }
    }
  
    xhr.send();
  }
  loadUsersM();
  //zmaz studenta
  let delStudMobile = document.querySelector(".studentZmaz")
  delStudMobile.addEventListener("click", (e)=>{
        e.preventDefault();
        let input = document.querySelector('.inputDelStud').value;
        let pole =  input.split(" ");
        let params = "meno="+pole[0] +"&priezvisko=" +pole[1];
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'studentDelMob.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
        xhr.onload = function(){
          console.log(this.responseText);
        }
  
        xhr.send(params);
        document.querySelector(".resetMobileStudent").reset();
        setTimeout(() => {
          loadUsersM();
        }, 0);
      });
//Zobrazenie sprav v chate


function loadChat(){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'chat.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      var message = JSON.parse(this.responseText);
      
      var output = '';
      
      for(var i in message){
        output += `<div class='message-large'>
        <p class='sender'>${message[i].meno}</p>
        <p class='message-text'>${message[i].sprava}</p>
        <p class='time'>${message[i].cas}</p>
        </div>`
      }

      document.querySelector(".view-message").innerHTML = output;
    }
  }

  xhr.send();

}

//Poslat Spravu
let sendLargeChat = document.querySelector(".largechatBtn");
sendLargeChat.addEventListener("click", (e)=>{
      e.preventDefault();
     
      

      let sprava = document.querySelector('.largechatInput').value;
      let params = "sprava="+ sprava;
      
      


      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'chatsend.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        
      }

      xhr.send(params);
      document.querySelector(".ResetLargeChat").reset();
});

//Min chat

function loadChatMin(){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'smallchat.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      var message = JSON.parse(this.responseText);
      
      var output = '';
      
      for(var i in message){
        output += `<div class='message-large'>
        <p class='sender'>${message[i].meno}</p>
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
      let params = "sprava="+ sprava;
      


      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'chatsend.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(params);
      document.querySelector(".SmallChatReset").reset();
});

//Mobile chat

function loadSpravaM(){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'mobileChat.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      var message = JSON.parse(this.responseText);
      
      var output = '';
      
      for(var i in message){
        output += `<div class='spravyMobil'>
        <p class='odosielatelMobil'>${message[i].meno}</p>
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
      let params = "sprava="+ sprava;
      


      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'mobileChatSend.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(params);
      document.querySelector(".ResetMobileChat").reset();
});
//Zadania praca
function pracasoZadaniami(url){
  let zadanie = document.querySelector('.noveZadanie').value;
  let params = "zadanie="+ zadanie;
  


  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function(){
    console.log(this.responseText);
  }

  xhr.send(params);
  document.querySelector(".formZadania").reset();
}
//ZadaniaM praca
function pracasoZadaniamiM(url){
  let zadanie = document.querySelector('.noveZadanieM').value;
  let params = "zadanie="+ zadanie;
  


  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function(){
    console.log(this.responseText);
  }

  xhr.send(params);
  document.querySelector(".formZadaniaM").reset();
}
//Zobraz zadania okno
let zadanie = document.querySelector(".zadania");
let zavrietZadania = document.querySelector(".btnZ");
let zobrazZadania = document.getElementById("showZadania");
zobrazZadania.addEventListener("click", () => {
  zadanie.style.display = "flex";
  setTimeout(() => {
  zadanie.style.opacity = "1";
  }, 0);
});

//Skryt zadania okno
zavrietZadania.addEventListener("click", () => {
  zadanie.style.opacity = "0";
  setTimeout(() => {
    zadanie.style.display = "none";
  }, 400);
});

// Pridat zadanie
let pridatZadanie = document.querySelector(".zadanieNew");
let pridatZadanieM = document.querySelector(".zadanieNewM");
pridatZadanie.addEventListener("click", (e)=>{
      e.preventDefault();
     
      pracasoZadaniami('zadania.php');
});
pridatZadanieM.addEventListener("click", (e)=>{
  e.preventDefault();
 
  pracasoZadaniamiM('zadania.php');
});
//Dell zadanie
let delZadanie = document.querySelector(".zadanieDel");
let delZadanieM = document.querySelector(".zadanieDelM");
delZadanie.addEventListener("click", (e)=>{
      e.preventDefault();
     
      pracasoZadaniami('odstranZadanie.php');
});
//Dell zadanieM
delZadanieM.addEventListener("click", (e)=>{
  e.preventDefault();
  pracasoZadaniamiM('odstranZadanie.php');
});

     //Zobrazit zadania
     function loadzadania(url){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
      
        xhr.onload = function(){
          if(this.status == 200){
            var zadania = JSON.parse(this.responseText);
            
            var output = '<tr><th>ID</th><th>Popis zadania</th><th>Krúžok</th><th>Priradené</th></tr>';
            
            for(var i in zadania){
              let poradie = Number(i) + 1;
              output += `<tr>
              <td>${poradie}</td>
              <td>${zadania[i].popiszadania}</td>
              <td>${zadania[i].Kruzok}</td>
              <td>${zadania[i].priradene}</td>
              </tr>`;
            }
      
            document.querySelector(".zadaniaZoznam").innerHTML = output;
            document.querySelector(".zadaniaZoznam2").innerHTML = output;
          }
        }
      
        xhr.send();
      }    

      let kruzok1 = document.querySelector(".kruzok1");
      let kruzok2 = document.querySelector(".kruzok2");
      let kruzok3 = document.querySelector(".kruzok3");
      let kruzok4 = document.querySelector(".kruzok4");
      let kruzok1M = document.querySelector(".kruzok1M");
      let kruzok2M = document.querySelector(".kruzok2M");
      let kruzok3M = document.querySelector(".kruzok3M");
      let kruzok4M = document.querySelector(".kruzok4M");

      kruzok1.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania.php");
      });

      kruzok2.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania2.php");
      });

      kruzok3.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania3.php");
      });

      kruzok4.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania4.php");
      });
      
      kruzok1M.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania.php");
      });

      kruzok2M.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania2.php");
      });

      kruzok3M.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania3.php");
      });

      kruzok4M.addEventListener("click", (e) => {
        e.preventDefault();
        loadzadania("showZadania4.php");
      });

      //mobil zobrazenie menu
      let mobileZadaniaMenuBtn = document.querySelector(".menuZadania");
      let mobileZadaniaMenu = document.querySelector(".menu-zadanie");
      let zobrazenieZMenu = true;
      mobileZadaniaMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(zobrazenieZMenu == true)
        mobileZadaniaMenu.style.transform = "scale(1)";
        else
        mobileZadaniaMenu.style.transform = "scale(0)";
        zobrazenieZMenu = !zobrazenieZMenu;
      });
//Mobile zadania
let zadaniaBackM = document.querySelector(".BackZadania");
let mobileZadania = document.querySelector(".mobile-zadania");
let showZadaniaMobile = document.getElementById("showmobilezadania");
//Mobile zadania show
showZadaniaMobile.addEventListener("click", () => {
mobileZadania.style.right = "0";
zadaniaBackM.style.display = "block";
backBtn.style.display = "none";
});


//Zadania s5
zadaniaBackM.addEventListener("click", () =>{
backBtn.style.display = "block";
mobileZadania.style.right = "-100%";
zadaniaBackM.style.display = "none";
});

//Hodnotenie

function zobrazHodnotenie(){
let xhr = new XMLHttpRequest();
xhr.open('GET', 'hodnotenie.php', true);

xhr.onload = function(){
  if(this.status == 200){
    let studenti = JSON.parse(this.responseText);
    
    let output = '';
    output += "<tr class='nadpisH'><td>ID</td><td>Študent</td><td>Krúžok</td><td>Semester</td><td>Zadanie</td><td>Skuska</td><td>SPOLU</td></tr>";
  
    for(let i in studenti){
      let spoluBody = Number(studenti[i].semester) + Number(studenti[i].zadanie) + Number(studenti[i].Skuska);
      let poradie = Number(i) + 1;
      output += `<tr class='riadok'><td>${poradie}</td> <td>${studenti[i].meno} ${studenti[i].priezvisko}</td><td>${studenti[i].Kruzok}</td><td>${studenti[i].semester}</td><td>${studenti[i].zadanie}</td><td>${studenti[i].Skuska}</td><td>${spoluBody}</td></tr><br>`;
    }

  document.querySelector(".zobrazenieHodnotenia").innerHTML = output;
 
  let vybranystudent = document.querySelectorAll(".riadok");
  for(let i=0; i<vybranystudent.length; i++){
    vybranystudent[i].addEventListener("click", (e)=>{
      let a = e.currentTarget.innerHTML;
      let b = a.replace(/<\/td>/g," ");
      let c = b.replace(/<td>/g,"");

      let pole = c.split(" ");
      let meno = `${pole[2]} ${pole[3]}`;
      let kruzok = pole[4]; 
      document.querySelector(".zobrazenieMena").innerHTML = meno;
      document.querySelector(".zobrazenieKruzku").innerHTML = kruzok
    });
  }
  
    
  }
}

xhr.send();
}

//Odoslanie bodov
let meno = document.querySelector(".zobrazenieMena");
let kruzok = document.querySelector(".zobrazenieKruzku");
let inputHod = document.querySelector(".studentInput");
const ulozHod = document.querySelector(".studentBtn");
//----------------------------------------------------------
const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const alert3 = document.querySelector(".alert3");

ulozHod.addEventListener("click", (e) => {
e.preventDefault();

if(meno.innerHTML == "Študent" && kruzok.innerHTML == "Krúžok" ){
  alert1.style.display = "flex";
  setTimeout(() => {
    alert1.style.opacity = "1";
  }, 0);
  setTimeout(() => {
    alert1.style.opacity = "0";
    setTimeout(() => {
      alert1.style.display = "none";
    }, 400);
  }, 3000);
}
else if(inputHod.value == ""){
  alert2.style.display = "flex";
  setTimeout(() => {
    alert2.style.opacity = "1";
  }, 0);
  setTimeout(() => {
    alert2.style.opacity = "0";
    setTimeout(() => {
      alert2.style.display = "none";
    }, 400);
  }, 3000);
}
else if(inputHod.value > 24){
  alert3.style.display = "flex";
  setTimeout(() => {
    alert3.style.opacity = "1";
  }, 0);
  setTimeout(() => {
    alert3.style.opacity = "0";
    setTimeout(() => {
      alert3.style.display = "none";
    }, 400);
  }, 3000);
}
else{
let xhr1 = new XMLHttpRequest();
xhr1.open('POST', 'ohodnotit.php', true);
xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr1.onload = function(){
  console.log(xhr1.responseText);
}

xhr1.send("meno=" + meno.innerHTML + "&kruzok=" + kruzok.innerHTML + "&body=" + inputHod.value);
inputHod.value = "";
document.querySelector(".zobrazenieMena").innerHTML = "Študent";
document.querySelector(".zobrazenieKruzku").innerHTML = "Krúžok"
setTimeout(() => {
  zobrazHodnotenie();
}, 0);
}
});
//Show hodnotenie
let showHodnotenie = document.getElementById("showHodnotenie");
let hodnotenieZobraz = document.querySelector(".hodnotenie");
let zavriHodnotenie = document.querySelector(".btnHodnotenie");

showHodnotenie.addEventListener("click", () =>{
  zobrazHodnotenie();
  hodnotenieZobraz.style.display = "flex";
  setTimeout(() => {
    hodnotenieZobraz.style.opacity = "1";
  }, 0);
});

//Zavriet hodnotenie
zavriHodnotenie.addEventListener("click", () => {
  hodnotenieZobraz.style.opacity = "0";
  setTimeout(() => {
    hodnotenieZobraz.style.display = "none";
  }, 400);
});


//mobile hodnotenie
let mobileHodnotenie = document.getElementById("hodnotenieM");
let closeMobileHodnotenie = document.querySelector(".BackHodnotenie");
let hodnotenieMBox = document.querySelector(".hodnotenieM");

mobileHodnotenie.addEventListener("click", () => {
  loadHodnotenie();
  backBtn.style.display = "none";
  hodnotenieMBox.style.right = "0";
  closeMobileHodnotenie.style.display = "block";

});
closeMobileHodnotenie.addEventListener("click", () => {
  backBtn.style.display = "block";
  hodnotenieMBox.style.right = "-100%";
  closeMobileHodnotenie.style.display = "none";
});
function loadHodnotenie(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'hodnotenie.php', true);
  
  xhr.onload = function(){
    if(this.status == 200){
      var studenti = JSON.parse(this.responseText);
      
      var output = '';
      output += "<tr class='nadpisH'><td>ID</td><td>Študent</td><td>Krúžok</td><td>SPOLU</td></tr>";
    
      for(var i in studenti){
        let poradie = Number(i) + 1;
        output += `<tr class='riadok'><td>${poradie}</td> <td>${studenti[i].meno} ${studenti[i].priezvisko}</td><td>${studenti[i].Kruzok}</td><td>${studenti[i].spolu}</td></tr><br>`;
      }
  
    document.querySelector(".zobrazenieHodnotenia2").innerHTML = output;
   
      
    
    
      
    }
  }
  
  xhr.send();
  }

  //Reset zadani

  let resetZadani = document.querySelector(".resetZadania");

  resetZadani.addEventListener("click", (e) => {
  
  if(confirm("Naozaj chceš reštartovať zadania?")){
  e.preventDefault();
  
  let params = "reset="+ "reset";
  


  let xhr = new XMLHttpRequest();
  xhr.open('POST', "resetZadani.php", true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function(){
    console.log(this.responseText);
  }

  xhr.send(params);
}
else{

}
  });

  //Nastavenie odovzdania zadani
  const datum = document.querySelector(".datepicker");
  const cas = document.querySelector(".timepicker");
  const setOdovzdanie = document.querySelector(".nastavenie");
  let zobrazenyTermin = document.querySelector(".nastaveny");

  setOdovzdanie.addEventListener("click", () => {
  if(datum.value == "" && cas.value == ""){

  }
  else{
    let den = datum.value.substr(8,3);
    let mesiac = datum.value.substr(5,2);
    let rok = datum.value.substr(0,4);
    let zobraz = 1;
    zobrazenyTermin.innerHTML = den +"." + mesiac+"."+rok + " / " + cas.value;

    let params = `den= ${den} &mesiac= ${mesiac} &rok= ${rok} &cas= ${cas.value} &zobraz= ${zobraz}`;
    testHandler(params, "odovzdanieZadania.php");
  }
  });
  




  //Zapnutie testu
  let testOn = document.querySelectorAll(".check");

  function testHandler(params, url){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
    xhr.onload = function(){
      console.log(this.responseText);
    }
  
    xhr.send(params);
  }

  
  testOn.forEach( a => {
    a.addEventListener("click", () =>{
      if(a.checked == true){
        const hodnota = 1;
        let params = "nazovTestu=" + a.id +"&zapnutie=" + hodnota;
          testHandler(params, "testHandler.php");
      }
      else{
        const hodnota = 0;
        let params = "nazovTestu=" + a.id +"&zapnutie=" + hodnota;
        testHandler(params, "testHandler.php");
      }
    });
  });

  //Zobrazenie formulara na testy
  const otazkyBox = document.querySelector(".otazkyHandler");
  const btnOClose = document.querySelector(".btnO");
  const showTest = document.getElementById("showTest");

  showTest.addEventListener("click", () =>{
    otazkyBox.style.display = "flex";
    tab1.checked = true;
    tab1Box.style.display = "block";
    tab2Box.style.display = "none";
    tab3Box.style.display = "none";
    otazkyBox.style.width = "920px";
    otazkyBox.style.height = "560px";
    btnOClose.style.display = "block";
    setTimeout(()=>{
      otazkyBox.style.opacity = "1";
    },0)
    });
//Studenti Vypnutie
btnOClose.addEventListener("click", () => {
  otazkyBox.style.opacity = "0";
    
    setTimeout(()=>{
      otazkyBox.style.display = "none";
    },400)
    });

//Tab controler
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab1Box = document.querySelector(".tab1");
const tab2Box = document.querySelector(".tab2");
const tab3Box = document.querySelector(".tab3");

tab1.addEventListener("click", () => {
if(tab1.checked){
  tab1Box.style.display = "block";
  tab2Box.style.display = "none";
  tab3Box.style.display = "none";
}
else{
  tab1Box.style.display = "none";
}
});
tab2.addEventListener("click", () => {
if(tab2.checked){
  tab2Box.style.display = "block";
  tab1Box.style.display = "none";
  tab3Box.style.display = "none";
  setTimeout(() => {
    loadQueAnsw();
  }, 0);
}
else{
  tab2Box.style.display = "none";
  }
});

tab3.addEventListener("click", () => {
if(tab3.checked){
  tab3Box.style.display = "block";
  tab2Box.style.display = "none";
  tab1Box.style.display = "none";
  setTimeout(() => {
    loadOtazky();
  }, 0);
}
else{
  tab3Box.style.display = "none";
  }
});


//Vytvorenie otazky a odpovedi
const checkBox = document.querySelectorAll(".spravnaOdpoved");
const inputy = document.querySelectorAll(".odpovedInput");
const otazka = document.querySelector(".otazkyInput");
const btnOtazky = document.getElementById("pridatOtazku");

function skuskaHandler(params, url){
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function(){
    console.log(xhr.responseText);
  }

  xhr.send(params);
}


btnOtazky.addEventListener("click", (e) =>{
e.preventDefault();
let poleInput = [];
let poleCheck = [];
inputy.forEach(a =>{
if(a.value == ""){

}
else{
  poleInput.push(a.value);
}
a.value = "";
});
checkBox.forEach(a =>{
  if(a.checked == true){
    poleCheck.push(1);
    a.checked = false;
  }
  else{
    poleCheck.push(0);
    a.checked = false;
  }
  });
let param = "otazka=" + otazka.value+ "&odpovede=" + JSON.stringify(poleInput) + "&spravna=" +JSON.stringify(poleCheck);
skuskaHandler(param, "skuskaPridat.php");
otazka.value = "";
});

//Zmazanie otazok
function loadOtazky(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'skuskaDelete.php', true);
  
  xhr.onload = function(){
    if(this.status == 200){
      let otazky = JSON.parse(this.responseText);
      
      let output = '';
  
    
      for(let i in otazky){
        let poradie = Number(i)+1;
        if(poradie<10){
          output += `<span id="${otazky[i].id}" class="list-box-item"><p class="poradieO">0${poradie}.</p>    <p class="otazkaZobraz">${otazky[i].nazov}</p> <button class="qDelete fas fa-times"></button></span>`
        }
        else{
          output += `<span id="${otazky[i].id}" class="list-box-item"><p class="poradieO">${poradie}.</p>    <p class="otazkaZobraz">${otazky[i].nazov}</p> <button class="qDelete fas fa-times"></button></span>`
        }
      }
    document.querySelector(".zoznam").innerHTML = output;
    }
  }
  xhr.send();
  }
  loadOtazky();

  //DELETE Question
 let zoznamOnaDel = document.querySelector(".zoznam");
 let btnDecline = document.getElementById("nieQ");
 let btnConfirm = document.getElementById("anoQ");
 let popupDel = document.querySelector(".confirmDelQ");

 zoznamOnaDel.addEventListener("click", (e) =>{
    

   if (e.target.classList.contains("qDelete")) {
     popupDel.style.display = "flex";
     console.log(e.target.parentElement.id);
     let otazkaNaZmazanie = "delete=" + e.target.parentElement.id;
     btnConfirm.addEventListener("click", () =>{
      //Sem kod na zmazanie otazky
      skuskaHandler(otazkaNaZmazanie, "skuskaDelete.php");
      popupDel.style.display = "none";
      setTimeout(() => {
        loadOtazky();
      }, 0);
    });
   }
   else{

   }
   btnDecline.addEventListener("click", () =>{
    popupDel.style.display = "none";
    setTimeout(() => {
      loadOtazky();
    }, 0);
   });
 });
 const showQUpdate = document.querySelector(".updateContainer");

 function loadQueAnsw(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'skuskaUpdateLOAD.php', true);
  
  xhr.onload = function(){
    if(this.status == 200){
      let otazky = JSON.parse(this.responseText);
      
      let output = '';
  
      for(let i in otazky){
        let poradie = Number(i)+1;
        if(poradie<10){
          output += `<span id="${otazky[i].id} "class="updateQ"><p class="poradieQ">0${poradie}.</p> <p class="otazkaU">${otazky[i].nazov}</p> <button class="btnUpdateQ fas fa-edit"></button></span>`;
      }
      else{
        output += `<span id="${otazky[i].id}" class="updateQ"><p class="poradieQ">${poradie}.</p> <p class="otazkaU">${otazky[i].nazov}</p><button class="btnUpdateQ fas fa-edit"></button></span>`;
      }
    }
    showQUpdate.innerHTML = output;
    }
  }
  xhr.send();
  setTimeout(() => {
    loadOtazky();
  }, 0);
  }
loadQueAnsw();
 //UPDATE QUESTION
 const updateZoznam = document.querySelector(".updateContainer");
 let upravaOtazok = document.querySelector(".upravaO");
 const otazkaU = document.getElementById("otazka");
 let updateInput = document.querySelectorAll(".update-input");
 let updateCheck = document.querySelectorAll(".spravnaOdpovedU");
 let upravenieOtazky = document.getElementById("btnUpdateQ");

 updateZoznam.addEventListener("click", (e) =>{
  e.preventDefault();

  if(e.target.classList.contains("btnUpdateQ")){
    upravaOtazok.classList.remove("upravaOtazokHide");
    upravaOtazok.classList.add("upravaOtazok");
    const otazka = e.target.parentElement.getElementsByTagName("p")[1].innerHTML;
    otazkaU.innerHTML = otazka;
    let param = "otazka=" + Number(e.target.parentElement.id);
    skuskaHandler(param, "skuskaUpdateQhandler.php");

    //get dataUpdate
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'skuskaUpdateQ.php', true);
    
    xhr.onload = function(){
      if(this.status == 200){
        let otazky = JSON.parse(this.responseText);
        
        for(let i = 0; i < otazky.length; i++){
          updateInput[i].value = otazky[i].odpoved;
        }
        for(let i = 0; i < otazky.length; i++){
          updateInput[i].id = otazky[i].cisloO;
        }
        for(let i = 0; i < otazky.length; i++){
          if(otazky[i].spravna == 1){
            updateCheck[i].checked = true;
          }
          else{
            updateCheck[i].checked = false;
          }
        }
      }
    }
    xhr.send();
  }
  else{

  }
 });
 
         //Update otazky
         upravenieOtazky.addEventListener("click", (e) => {
          e.preventDefault();
            let poleOdpoved = [];
            let poleSpravna = [];
            let cisloOtazky = [];
           
            updateInput.forEach( a => {
            poleOdpoved.push(a.value);
            a.value = "";
            });
            updateCheck.forEach( a => {
             if(a.checked ==true){
               poleSpravna.push(1);
               a.checked = false;
             }
             else{
               poleSpravna.push(0);
               a.checked = false;
             }
             });
            updateInput.forEach( a => {
              cisloOtazky.push(a.id);
            });
           let parameter = `idO=${JSON.stringify(cisloOtazky)} &poleO=${JSON.stringify(poleOdpoved)} &poleS=${JSON.stringify(poleSpravna)}`;
             skuskaHandler(parameter, "skuskaUpdate.php");
             upravaOtazok.classList.add("upravaOtazokHide");
             upravaOtazok.classList.remove("upravaOtazok");
            });



 //Zatvorenie okna s upravou
 let btnUClose = document.querySelector(".btnUClose");

 btnUClose.addEventListener("click", () => {
  upravaOtazok.classList.add("upravaOtazokHide");
  upravaOtazok.classList.remove("upravaOtazok");
 });

 //show heslo
 const showHeslo = () => {
   fetch("showPwd.php")
   .then(data => data.json())
   .then(res =>{
    document.getElementById("aktualneHeslo").innerHTML = res[0].heslo;
   });
 }
 showHeslo();

//nastavenie noveho hesla na skusku
let hesloInput = document.getElementById("nastavHeslo");
let setHeslo = document.getElementById("hesloOk");

setHeslo.addEventListener("click", () => {
  let params = "heslo=" + hesloInput.value;
  testHandler(params,"updatePwd.php");
  setTimeout(() => {
    showHeslo();
  }, 100);
  hesloInput.value = "";
})


//RENDER ZADANIA
let zadaniaContainer = document.querySelector(".containerZadania");

const loadVsetkyZadania = () => {
  fetch("zadaniaFolder.php")
  .then(res => res.text())
  .then(data => {
    let pole = data.split(",");
    for(let i = 0; i < pole.length; i++){
      let cislo = i +1;
      if(pole[i] == ""){

      }
      else{
        zadaniaContainer.innerHTML += `<span><p>${cislo}.</p><a href=../Upload/${pole[i]}>${pole[i].replace(".pdf", "")}</a></span>`;
      }
    }
    })
}
loadVsetkyZadania();