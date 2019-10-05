/*
Fichier js qui permet de switch entre le fr et l anglais
*/

function switchFr(){
	console.log("switchFR");
	var styleSheet=document.styleSheets[0];
	styleSheet.addRule(".eng","display:none;");
	styleSheet.addRule(".fr","display:inherit");
}

function switchEng(){
	console.log("switchEng");
	var styleSheet=document.styleSheets[0];
	styleSheet.addRule(".fr","display:none;");
	styleSheet.addRule(".eng","display:inherit");
}

function listernetLang(){
	git();
	var iconEng=document.getElementById('iconENG');
	iconENG.addEventListener("mouseover",function(){
		iconENG.src="assets/icons/iconEngHover.png";
		iconENG.style.cursor="pointer";
	});
	iconENG.addEventListener("mouseout",function(){
		iconENG.src="assets/icons/iconEng.png";
	});

	var iconFr=document.getElementById('iconFR');
	iconFr.addEventListener("mouseover",function(){
		iconFr.src="assets/icons/iconFRHover.png";
		iconFr.style.cursor="pointer";
	});
	iconFr.addEventListener("mouseout",function(){
		iconFr.src="assets/icons/iconFr.png";
	});
}


// Partie Js pour le github
function git() {
	var httpRequest = new XMLHttpRequest();
	var url="https://api.github.com/users/Lupusanghrenn/repos?sort=updated";
	httpRequest.open("GET", url, true);
	httpRequest.setRequestHeader("Content-Type", "application/json");
	httpRequest.addEventListener("load", gitListener);
	httpRequest.send();
}

function gitListener(event){
	//console.log(event.currentTarget.response);
	var rawTxt = event.currentTarget.responseText;
	var tab = JSON.parse(rawTxt);

	var ul = document.getElementById("githubUl");

	console.log(ul);

	for (var i = 0; i < tab.length; i++) {
		var currentRepos = tab[i];
		var li = document.createElement("li");
		//li.style="padding-bottom:5%";
		li.style="";
		var span1 = document.createElement("span");
		span1.setAttribute("class","icon fa-graduation-cap 12u");
		span1.innerHTML="  "+currentRepos.name;
		var br=document.createElement("br");
		var span2 = document.createElement("span");
		//span2.setAttribute("class","pull-right");
		span2.innerHTML="<i>"+currentRepos.description+"</i>";

		li.appendChild(span1);
		li.appendChild(br);
		li.appendChild(span2);
		ul.appendChild(li);
		console.log(currentRepos.name);
	}
}


window.onload=listernetLang;