

function ajax(type,api,post="",funcion=""){
    event.preventDefault();
    var xmlhttp = new XMLHttpRequest();
    if(funcion != ""){
        xmlhttp.onreadystatechange = funcion;
    }else{
        xmlhttp.onreadystatechange = funcionSubmit;
    }
    xmlhttp.open(type, 'http://santiagots-001-site5.dtempurl.com/api/'+api, true);
    xmlhttp.setRequestHeader("Content-Type","application/json");
    if(typeof(post) === 'object'){
        xmlhttp.send(JSON.stringify(post));
    }else{
        xmlhttp.send(); 
    }
}

function save_data(){
    var xmlhttp = event.target;
    if (xmlhttp.readyState == 4){
        if (xmlhttp.status == 200){
            localStorage.setItem("info", xmlhttp.responseText);
        }
    }
}
function gets_contactos() {
    var xmlhttp = event.target;
    if (xmlhttp.readyState == 4){
        if (xmlhttp.status == 200){
            view_all_search(xmlhttp.responseText);
        }
    }
}
function saveUser(data){
    localStorage.setItem("data", data);
}


function mostrar_Error(mensaje,error){
    var section = document.querySelector("#error");
    if(error == 1){
        color = "error-rojo";
    }else{
        color = "confirm-verde";
    }
    section.innerHTML = `
    <div class="${color}">
      <span>${mensaje}</span> 
    </div>` ;
  }

function nada() {
    console.log("nada");
}