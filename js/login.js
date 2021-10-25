function funcionSubmit(event){
    var xmlhttp = event.target;
    if (xmlhttp.readyState == 4){
        if (xmlhttp.status == 201){
            saveUser(xmlhttp.responseText);
            location.href = "mensajes.html";
        }else{
            mostrar_Error("El usuario y/o contraseña ingresadas son incorrectas",1);
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
        if( user != "" && pass != ""){
            ajax("get","Usuarios/"+user+"/"+pass,"","");
        }else{
            mostrar_Error("Los campos no pueden ser vacios",1);
        }
    });
}

