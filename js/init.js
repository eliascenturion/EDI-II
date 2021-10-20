

function ajax(type,api,post,funcion){
  
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
    console.log(xmlhttp);
    if (xmlhttp.readyState == 4){
        if (xmlhttp.status == 200){
            alert("asd");
            localStorage.setItem("info", xmlhttp.responseText);
        }
    }
}

function saveUser(data){
    localStorage.setItem("data", data);
}

function isEmpty(str) {
    try {
      if (str == null) return true;
      else {
        str = String(str);
        if (str.replace == undefined) return true;
        return (str.replace(/\s/g,"")=="");
      }
    } catch(e) {
      console.log(e);
      return false;
    }
}

