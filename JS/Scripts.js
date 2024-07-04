function modalBienvenida(){
	document.getElementById("modalBienvenida").style.display ="block";
	document.getElementById("textohero").style.animationPlayState ="paused";
	document.getElementById("subtextohero").style.animationPlayState ="paused";
	document.documentElement.style.overflow="hidden";
}
function cerrarModalB(){
	document.getElementById("modalBienvenida").style.display ="none";
	document.getElementById("textohero").style.animationPlayState ="running";
	document.getElementById("subtextohero").style.animationPlayState ="running";
	document.documentElement.style.overflow="auto";
}
function modalInfo(){
	document.getElementById("modalInfo").style.display ="block";
	document.documentElement.style.overflow="hidden";
	var mensaje;
	var nombre = document.getElementById("forNombre").value;
	var correo = document.getElementById("forEmail").value;
	var asunto = document.getElementById("forAsunto").value;
	var msg = document.getElementById("forMensaje").value;
	(function formCheck(){
		if(!document.getElementById("forNombre").checkValidity()){
			mensaje = "Introduce un nombre correcto";
			document.getElementById("mensajeInfo").innerHTML = mensaje;
		}else if(!document.getElementById("forEmail").checkValidity()){
			mensaje = "Introduce un correo correcto";
			document.getElementById("mensajeInfo").innerHTML = mensaje;
		}else if(!document.getElementById("forAsunto").checkValidity()){
			mensaje = "Introduce un asunto correcto";
			document.getElementById("mensajeInfo").innerHTML = mensaje;
		}else if(!document.getElementById("forMensaje").checkValidity()){
			mensaje = "Introduce un mensaje correcto";
			document.getElementById("mensajeInfo").innerHTML = mensaje;
		}else {
			mensaje = "Apreciado/a "+nombre+", confirmamos la solicitud de información del correo "+correo+" con el asunto "+asunto+" con el siguiente mensaje: "+msg+" .";
			document.getElementById("mensajeInfo").innerHTML = mensaje;
		}
	})();
}
function cerrarModalI(){
	document.getElementById("modalInfo").style.display ="none";
	document.documentElement.style.overflow="auto";
	document.getElementById("forNombre").value = "";
	document.getElementById("forEmail").value = "";
	document.getElementById("forAsunto").value = "";
	document.getElementById("forMensaje").value = "";
}

var posPreviaScroll = document.documentElement.scrollTop;
window.onscroll = function() {esconderMostrarMenu()};
function esconderMostrarMenu() {
	var posActualScroll = document.documentElement.scrollTop;
	if (posPreviaScroll>posActualScroll) {
		document.getElementById("navbar").style.top = "0";
		if(posActualScroll>200) {
			document.getElementById ("navbar").style.height="50px";
			document.getElementById ("navbar").style.fontSize="1.5rem";
			document.getElementById ("menu").style.lineHeight="50px";
			document.getElementById ("subMenu").style.top="50px";
			document.getElementById ("logo").style.padding="0px";
		} else {
			document.getElementById ("navbar").style.height="135px";
			document.getElementById ("navbar").style.fontSize="1.8rem";
			document.getElementById ("menu").style.lineHeight="135px";
			document.getElementById ("subMenu").style.top="90px";
			document.getElementById ("logo").style.padding="45px";
		}
	}else{
		if(posActualScroll<200) {
			document.getElementById ("navbar").style.height="50px";
			document.getElementById ("navbar").style.fontSize="1.5rem";
			document.getElementById ("menu").style.lineHeight="50px";
			document.getElementById ("logo").style.padding="0px";
			document.getElementById ("subMenu").style.top="50px";
		} else {
			document.getElementById ("navbar").style.top="-135px";
		}
	}
	posPreviaScroll = posActualScroll;
}
// Inicio Lightbox

var listRutaImgG = [];
var numImg=0;
function readyLight(){
	
	var listImgG = document.getElementsByClassName("imgGal");
	
	for(var i = 0; i<listImgG.length; i++){
		listRutaImgG.push(listImgG[i].src);
	}

	for(var i = 0; i<listImgG.length; i++){
		listImgG[i].addEventListener('click', openLight);
	}
	function openLight(){
		var rutaImgClick = event.currentTarget.src;
		numImg = listRutaImgG.indexOf(rutaImgClick);
		document.getElementById("imageToShow").innerHTML="<img class='imageLight' src="+ listRutaImgG[numImg]+">";
		document.getElementById("modalLight").style.display="block";
		document.documentElement.style.overflow="hidden";
		closeLight();
	}
	function closeLight(){
		window.addEventListener("click", function(event){
			if(!event.target.matches(".imageLight") && !event.target.matches(".imgGal")&& !event.target.matches(".lbButtons")&& !event.target.matches(".fa-solid")){
				document.getElementById("modalLight").style.display="none";
				document.documentElement.style.overflow="auto";
			}
		})
	}
}
function nextImgG(){
	numImg++;
	if(numImg == listRutaImgG.length){
		numImg=0;
	}
	document.getElementById("imageToShow").innerHTML="<img class='imageLight' src="+ listRutaImgG[numImg]+">";
}
function prevImgG(){
	numImg--;
	if(numImg < 0){
		numImg=listRutaImgG.length-1;
	}
	document.getElementById("imageToShow").innerHTML="<img class='imageLight' src="+ listRutaImgG[numImg]+">";
}

function marcarPestana(contenedorAMostrar, tabClick){
	var listaConPestanas = document.getElementsByClassName("contenedorPestanas");
	for(var i=0; i<listaConPestanas.length; i++){
		listaConPestanas[i].style.display="none";
	}
	document.getElementById(contenedorAMostrar).style.display="block";
	var tabLinks= document.getElementsByClassName("etiquetaPestanas");
	for (var i=0; i<tabLinks.length; i++){
		tabLinks[i].classList.remove("pestanaActiva");
	}
	document.getElementById(tabClick).classList.add("pestanaActiva");
	var vuelo= document.getElementsByClassName("vuelos");
	for (var i=0; i<vuelo.length; i++){
		vuelo[i].classList.remove("animacionV");
	}
	var vuelosC = document.getElementById(contenedorAMostrar).children;
	for(var i=0; i<vuelosC.length; i++){
		vuelosC[i].classList.add("animacionV");
	}
}
