window.addEventListener("load",get_contacts);
window.addEventListener("load",search);;
function get_contacts() {
	let contact = JSON.parse(localStorage.getItem("data"));
	var nav = document.querySelector("ul.result");
	if(contact.contactos.length>0){
		let nombre = contact.nombre;
		nav.innerHTML += `<li>${nombre}</li>`;
	}else{
		nav.innerHTML += `<li>No tenes contactos</li>`;
	}
}

function search(){
  var form = document.querySelector("#buscar");
  form.addEventListener("submit", function(e){
      e.preventDefault()
      let post = '';
      let contacto = document.querySelector("#contacto").value;
      if(contacto != ""){
        ajax("get","Contactos/Nombre/"+contacto , post);
      }else{
        alert("Ingrese un id de contacto.");
      }
  });
}

function setearAgg(event) {;
  li = event.target;
  if (li.classList.contains("active")){
    li.classList.remove("active");
  } else {
    li.classList.add("active");
  }
}

function funcionSubmit(event){
  var xmlhttp = event.target;
  if (xmlhttp.readyState == 4){
    if (xmlhttp.status == 200){
      view_search(xmlhttp.responseText);
    }
  }
}

function view_search(data) {
	var ul = document.querySelector("ul.result");
  var datas = JSON.parse(data);
  ul.innerHTML = "";
	if(datas.length>0){
    for (let index = 0; index < datas.length; index++) {
      ul.innerHTML += `<li id="${datas[index].id}" class="contacto">${datas[index].nombre}</li>
      `;
    }
		var contacto = document.querySelectorAll(".contacto");
    for (let index = 0; index < contacto.length; index++) {
      contacto[index].addEventListener("click",setearAgg);
    }
	}else{
		ul.innerHTML += `<li>No tenes contactos</li>`;
	}
}

function agregarContacto() {
  var usuarios = document.querySelectorAll('.contacto.active');
  if (usuarios.length == 0){
    Mostrar_Error("Por favor, seleccione un contacto.");
  } else if (usuarios.length > 1){
    Mostrar_Error("Por favor, no seleccione mas de un contacto.");
  }else{
    var miId = JSON.parse(sessionStorage.getItem('usuario'));
    var suId = usuarios[0].id; //Ya que la lista siempre va a ser de un usuario, uso 0

    var json = {
        "IdUsuario": ""+miId.Id+"",
        "IdContacto": suId,
    }
  }
}

function Mostrar_Error(mensaje){
  var div = document.querySelector("#alerta");

  div.innerHTML = `
  <div class="alerta roja">
    <span>${mensaje}</span> 
  </div>` ;
}