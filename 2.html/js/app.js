
var ans = document.getElementById('answer');
var qns = prompt('cual es su nombre');

if(qns =='juan'){
	ans.innerHTML= "BIENVENIDO ADMINISTRADOR: "+qns;
} else {
	ans.innerHTML ="BIENVENIDO VISITANTE: "+qns;
}
