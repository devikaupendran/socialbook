let settingsMenu = document.querySelector(".settings-menu");
let newProfileClick = document.getElementById("pc");
newProfileClick.addEventListener("click" , settingsMenuToggle);
    function settingsMenuToggle(){
         settingsMenu.classList.toggle("settings-menu-height");
    }   

let darkbtn = document.getElementById("dark-btn");
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}
