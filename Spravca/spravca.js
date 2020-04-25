function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.php', true);
  
    xhr.onload = function(){
      if(this.status == 200){
        var studenti = JSON.parse(this.responseText);
        
        var output = '';
        output += "<thead><tr class='nadpis'><th>ID</th><th>Meno</th><th>Priezvisko</th><th>Krúžok</th><th>Email</th><th>Typ užívateľa</th></tr></thead><tbody class='info'>";
      
        for(var i in studenti){
          let pocet = Number(i) + 1;
          output += `<tr><td>${pocet}</td> <td>${studenti[i].meno}</td><td>${studenti[i].priezvisko}</td><td>${studenti[i].Kruzok == null ? "-" : studenti[i].Kruzok}</td><td>${studenti[i].email}</td><td>${studenti[i].typ_uzivatela}</td></tr>`;
        }
        output += "</tbody>";
        document.querySelector(".tabulkaSL").innerHTML = output;
 
      }
    }
  
    xhr.send();
    setTimeout(() => {
        selectUser();
    }, 500);
  }
  loadUsers();
//MODULE
const module = document.querySelector(".module");
const showModule = (meno, priezvisko,email, kruzok, typ_uzivatela) => {
    module.style.display = "flex";
    document.querySelector(".meno").innerHTML = meno;
    document.querySelector(".priezvisko").innerHTML = priezvisko;
    document.querySelector(".kruzok").value = kruzok;
    document.querySelector(".email").innerHTML = email;
    document.querySelector(".typU").value = typ_uzivatela;
    updateUser();
}


//SELECT USER
const selectUser = () => {
const table = document.querySelector(".info");
table.addEventListener("click", e => {
    e.preventDefault();
    let meno = e.target.parentElement.children[1].innerHTML;
    let priezvisko = e.target.parentElement.children[2].innerHTML;
    let kruzok = e.target.parentElement.children[3].innerHTML;
    let email = e.target.parentElement.children[4].innerHTML;
    let typUzivatela = e.target.parentElement.children[5].innerHTML;
    showModule(meno, priezvisko, email, kruzok, typUzivatela);
})
}


//close module
const closeModule = document.querySelector(".close-module");
closeModule.addEventListener("click", ()=>{
    module.style.display = "none";
});


//UpdateUser
const updateUser = () => {
const submit = document.querySelector(".set-data");
submit.addEventListener("click", () => {
    let kruzok =  document.querySelector(".kruzok").value;
    let typ = document.querySelector(".typU").value;
    let email = document.querySelector(".email").innerHTML;
    let data = `kruzok=${kruzok == "-" ? null : kruzok} &email=${email} &typ=${typ}`;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'updateUsers.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
      
    }

    xhr.send(data);
    
    module.style.display = "none";
    loadUsers();
});

}



//LOGOUT
const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
    document.getElementById("load").className = "load";
setTimeout(() => {
    document.location.href = "/Elearning/Logout.php";
}, 2000);
});
