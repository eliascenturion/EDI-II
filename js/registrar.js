window.addEventListener("load",cargadoOK);
function cargadoOK(){
  var form = document.querySelector("#form-register");
  form.addEventListener("submit", function(e){
      e.preventDefault()
      let user = document.querySelector("#usuario").value;
      let pass = document.querySelector("#clave").value;
      let pass_confirm = document.querySelector("#clave-confirm").value;
      let email = document.querySelector("#email").value;
      if(pass == pass_confirm){
        let post = {
          "nombre": user,
          "email": email,
          "clave": pass
        }
        ajax("post","Usuarios/",post);
      }else{
        alert("La contraseña no coincide");
      }
  });
}
function funcionSubmit(event){
  var xmlhttp = event.target;
  if (xmlhttp.readyState == 4){
      if (xmlhttp.status == 201){
          saveUser(xmlhttp.responseText);
          location.href = "mensajes.html";
      }
  }
}

