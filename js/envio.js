window.addEventListener("load",get_contacts);
function get_contacts() {
	let user = JSON.parse(localStorage.getItem("data"));
	ajax("get", "Usuarios/"+user.id,"",save_data);
	let contact = JSON.parse(localStorage.getItem("info"));
	var select = document.querySelector("#para");
	
	var envio  = document.querySelector("#envioMensaje");	
	envio.addEventListener("submit",function(){
		event.preventDefault();
		envioMensaje(user.id);
	});
	if(contact.contactos.length>0){
		for (var i = 0; i < contact.contactos.length; i++) {
			let nombre = contact.contactos[i].nombre;
			let id = contact.contactos[i].id;	
			select.innerHTML += `<option value="${id}">${nombre}</option>`;
		}
	}
}

function envioMensaje(id){
	let para = document.querySelector("#para").value;
	let envio = document.querySelector("#mensaje").value;

	let json = {
		"texto" : envio,
		"idDestinatario" : parseInt(para),
		"idRemitente" : parseInt(id)
	}
	if(para != "" && envio != ""){
		ajax("post","mensajes",json);
	}else if(para == "" || para == 0){
		mostrar_Error("Seleccione un contacto para enviar el mensaje",1);
	}else if(envio == ""){
		mostrar_Error("El mensaje no puede ser vacio",1);
	}
	
}

function funcionSubmit(event){
  var xmlhttp = event.target;
  if (xmlhttp.readyState == 4){
    if (xmlhttp.status == 201){
      console.log(xmlhttp.responseText);
			mostrar_Error("El mensaje se envio con exito",0);
    }
  }
}