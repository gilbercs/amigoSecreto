//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//declaração de variaves
let names = [];

//Função p/ Adicionar Amigo
function adicionarAmigo() {
	let friend = document.getElementById("amigo");
	let name = friend.value.trim();
	if (validateName(name)) {
		names.push(name);
		upDateList();
		friend.value = "";
	}else{
		friend.value = "";
	}  
}
//Validar entrada
function validateName(name){
	if (!name || name.trim() === "" ) {
	alert("Campo vazio! Por favor, insira um nome!");
	return false;
	}
	if (names.includes(name)) {
		alert(name+" já foi adicionado!");
		return false;
	}
	return true;
}
//visualizar a lista
function upDateList(){
	let listaAmigos = document.getElementById("listaAmigos");
	listaAmigos.innerHTML = "";
	names.forEach(name =>{
		let li = document.createElement("li");
		li.textContent = name;
		listaAmigos.appendChild(li);
	});
}
//Função p/ realizar o sorteio de forma aleatória
function sortearAmigo(){
	//Condição p/ sorteio
	if(names.length < 2){
	alert("Adicione pelo menos dois nomes para realizar o sorteio!");
	return;
	}
	//sortear nomes de forma aleatória
	let sorteado = names[Math.floor(Math.random() * names.length)];
	document.getElementById("resultado").textContent = "O amigo secreto é: "+ sorteado;
}