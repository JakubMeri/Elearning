
//get data
const EDITOR = document.getElementById("EDITOR");
const getData = document.getElementById("edit-data");
//NAHLAD SELECTOR
let NAHLAD = document.querySelector(".teacher-content");
const showData = document.querySelector(".show-teacher-data");

getData.addEventListener("click", (e) =>{
    e.preventDefault();
    if(CKEDITOR.instances.EDITOR.getData() == ""){

    }
    else{
        let data = "data=" + encodeURIComponent(CKEDITOR.instances.EDITOR.getData());
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'insertData.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
        xhr.onload = function(){
        console.log(this.responseText);
      }
    
      xhr.send(data);
      CKEDITOR.instances.EDITOR.setData("");
    }
})



//logout
    const load = document.querySelector(".load");
    const logout = document.querySelector(".logout");
    logout.addEventListener("click", () => {
    document.getElementById("load").className = "load";
    setTimeout(() => {
    document.location.href = "/Elearning/Logout.php";
}, 2000);
});


//show Nahlad
    let showNAhlad = document.querySelector(".show-prew");
    showNAhlad.addEventListener("click", (e) => {
        e.preventDefault();
        NAHLAD.style.display = "block";
        fetch("loadData.php")
        .then(res => res.json())
        .then(data => showData.innerHTML= data[0].obsah)
        setTimeout(() => {
            hideNahlad();
            set();
        }, 500); 
    })

//hide nahlad

    const hideNahlad = () => {const hideNahlad = document.querySelector(".close-prew");
    hideNahlad.addEventListener("click", (e) => {
        e.preventDefault();
        NAHLAD.style.display = "none";
    })}

//Uprav data
const set = () =>{
    const set = document.querySelector(".set");
    set.addEventListener("click", (e) =>{
        e.preventDefault();
        let data = showData.innerHTML;
        CKEDITOR.instances.EDITOR.setData(data);
        NAHLAD.style.display = "none";
    })
}