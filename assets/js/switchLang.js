/*
Fichier js qui permet de switch entre le fr et l anglais
*/

function switchFr(){
	console.log("switchFR");

	var css = ".eng { display : none } .fr { display : inherit}";
	var head = document.head || document.getElementsByTagName('head')[0];

	var style = document.createElement("style");
	head.appendChild(style);

	style.type="text/css";
	if (style.styleSheet){
	  // This is required for IE8 and below.
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
}

function switchEng(){
	console.log("switchEng");

	var css = ".fr { display : none } .eng { display : inherit}";
	var head = document.head || document.getElementsByTagName('head')[0];

	var style = document.createElement("style");
	head.appendChild(style);

	style.type="text/css";
	if (style.styleSheet){
	  // This is required for IE8 and below.
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
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

	var httpRequest2 = new XMLHttpRequest();
	var url="https://api.github.com/users/Kitolex/repos?sort=full_name";
	httpRequest2.open("GET", url, true);
	httpRequest2.setRequestHeader("Content-Type", "application/json");
	httpRequest2.addEventListener("load", function(event){
		var tab=JSON.parse(event.currentTarget.responseText);
		var tmp=[];
		tmp.currentTarget=[];
		var i=0;
		var project = tab[i];
		while(project.name!="JulietteSortDeSaChambre"){
			i++;
			project=tab[i];
		}
		tmp.currentTarget.responseText=JSON.stringify([project]);
		gitListener(tmp);
	});
	httpRequest2.send();
}

function gitListener(event){
	//console.log(event.currentTarget.response);
	var rawTxt = event.currentTarget.responseText;
	var tab = JSON.parse(rawTxt);

	var ul = document.getElementById("githubUl");

	for (var i = 0; i < tab.length; i++) {
		var currentRepos = tab[i];
		var li = document.createElement("li");
		//li.style="padding-bottom:5%";
		li.style="";
		var span1 = document.createElement("a");
		span1.setAttribute("href","https://www.github.com/"+currentRepos.owner.login+"/"+currentRepos.name);
		span1.setAttribute("target","_BLANK");

		switch(currentRepos.language){
			case "JavaScript":
				span1.setAttribute("class","icon fa-js 12u");
				break;
			case "HTML":
				span1.setAttribute("class","icon fa-js 12u");
				break;
			case "C#":
				span1.setAttribute("class","icon fa-gamepad 12u");
				break;
			case null:
				span1.setAttribute("class","icon fa-gamepad 12u");
				break;
			case "Java":
				span1.setAttribute("class","icon fa-code 12u");
				break;
			case "C++":
				span1.setAttribute("class","icon fa-image 12u");
				break;
			default:
				span1.setAttribute("class","icon fa-graduation-cap 12u");
		}
		span1.innerHTML+="  "+currentRepos.name;
		var br=document.createElement("br");
		var span2 = document.createElement("span");
		//span2.setAttribute("class","pull-right");
		span2.innerHTML="<i>"+currentRepos.description+"</i>";

		li.appendChild(span1);
		li.appendChild(br);
		li.appendChild(span2);
		ul.appendChild(li);
	}
}


window.onload=listernetLang;