function funcionSubmit(event){
    var xmlhttp = event.target;
    if (xmlhttp.readyState == 4){
        if (xmlhttp.status == 201){
            saveUser(xmlhttp.responseText);
            location.href = "mensajes.html";
        }
    }
}

function saveUser(data){
    localStorage.setItem("data",data);
}

window.addEventListener("load",cargadoOK);
function cargadoOK(){
    var form = document.querySelector("#form");
    form.addEventListener("submit", function(e){
        e.preventDefault()
        let user = document.querySelector("#usuario").value;
        let pass = document.querySelector("#clave").value;
        ajax("get","Usuarios/"+user+"/"+pass);
    });
}

