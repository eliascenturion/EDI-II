window.addEventListener("load",get_mensajes);
window.addEventListener("load",get_contacts);

function get_mensajes(){	
	let user = JSON.parse(localStorage.getItem("info"));
	if( user == null){
		 user = JSON.parse(localStorage.getItem("data"));
	}
	ajax("get", "Usuarios/"+user.id,"",save_data);
	user = JSON.parse(localStorage.getItem("info"));
	if(user.mensajes.length>0){
		console.log(user);
		var seccion = document.querySelector("section.messages");
		for (let index = 0; index < user.mensajes.length; index++) {
			let nombre = user.nombre;
			let mensaje = user.mensajes[index].texto;
			/* let date = new date(user.mensajes.fecha);
			let fecha = date.getFullYear() + "/" +	date.getMonth() + "/" + date.getDay(); */
			seccion.innerHTML += ` 
			<article>
				<header>
					<h3>${nombre}</h3>
				</header>
				<main>
					<p>${mensaje}</p>
				</main>
				<footer>
					<ion-icon name="reload-circle"></ion-icon>
					<p></p>
				</footer>
			</article>
			<br>`;
		}
	}else{
		var seccion = document.querySelector("section.messages");
		seccion.innerHTML += `
		<div>
				<p>NO TENES MENSAJES</p>
		</div>`;
	}
}
function get_contacts() {
	let contact = JSON.parse(localStorage.getItem("info"));
	var nav = document.querySelector("nav.contactos");
	
	if(contact.contactos.length>0){
		for (var i = 0; i < contact.contactos.length; i++) {
			let nombre = contact.contactos[i].nombre;
			nav.innerHTML += `<p>${nombre}</p>`;
		}
	}else{
		nav.innerHTML += `<p>No tenes contactos</p>`;
	}
}