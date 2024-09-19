if (localStorage.getItem("token") == null) { 
    alert("você precisa estar logado para acessar essa pagina"); 
    Window.location.href= "./assets/html/signin.html";
 } 

let userlogado = JSON.parse(localStorage.getItem("userlogado"));

let logado = document. querySelector ("#logaddo"); logado.innerHTML = 'Ola ${userlogado.nome}';

function sair()
 {localStorage.removeItem("token"); 
  localStorage.removeItem("userlogado");
  window.location.href = "./assets/html/signin.html"}