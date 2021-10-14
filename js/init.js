window.addEventListener("load",verificar_login);
function verificar_login(){
    let user = JSON.parse(localStorage.getItem("data"));
    if(user === null){
        document.location = "index.html";
    }
}

