window.addEventListener("load",get_mensajes);

function get_mensajes(){
	let user = JSON.parse(localStorage.getItem("data"));
    console.log(user.mensajes);
    if(user.mensajes.length>0){
    	var seccion = document.querySelector("section.messages");
    	let nombre = user.nombre;
    	let mensaje = user.mensajes.texto;
    	let date = new date( user.mensajes.fecha);
    	let fecha = date.getFullYear() + "/" +	date.getMonth() + "/" + date.getDay();
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
	          <p>${fecha}</p>
	        </footer>
	      </article>``;`
    }else{
    	var seccion = document.querySelector("section.messages");

	        seccion.innerHTML += `
	        <div>
	            <p>NO TENES MENSAJES</p>
	        </div>`;
    }
}