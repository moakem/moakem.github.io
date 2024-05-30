function tryIt (element){
	var selectedColor = element.getAttribute("value");
	var selectedColorName = element.name;
	const children = document.querySelectorAll('.large');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");
	
	document.getElementById("lSelected").innerHTML = selectedColorName;
	document.getElementById("image0_8_3").setAttribute("href", "Colors/" + selectedColor + ".jpg");
}



function tryIt2 (element){
	var selectedColor = element.getAttribute("value");
	var selectedColorName = element.name;
	const children = document.querySelectorAll('.medium');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");

	document.getElementById("mSelected").innerHTML = selectedColorName;
	document.getElementById("image1_8_3").setAttribute("href", "Colors/" + selectedColor + ".jpg");
}

function tryIt3 (element){
	var selectedColor = element.getAttribute("value");
	var selectedColorName = element.name;
	const children = document.querySelectorAll('.small');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");
		
	document.getElementById("sSelected").innerHTML = selectedColorName;
	document.getElementById("image2_8_3").setAttribute("href", "Colors/" + selectedColor + ".jpg");
}


function layers(type){
	const children = document.querySelectorAll('li');
	console.log(children);
	switch(type.id){
	case "sm":
		document.getElementById("large").style.display = "none";
		document.getElementById("pattern0_8_3").style.display = "none";
		document.getElementById("medium").style.display = "none";
		document.getElementById("pattern1_8_3").style.display = "none";
		document.getElementById("small").style.display = "block";
		document.getElementById("pattern2_8_3").style.display = "block";
		document.getElementById("mockup").style.height = "67%";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "med":
		document.getElementById("large").style.display = "none";
		document.getElementById("pattern0_8_3").style.display = "none";
		document.getElementById("medium").style.display = "block";
		document.getElementById("pattern1_8_3").style.display = "block";
		document.getElementById("small").style.display = "none";
		document.getElementById("pattern2_8_3").style.display = "none";
		document.getElementById("mockup").style.height = "84%";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "lar":
		document.getElementById("large").style.display = "block";
		document.getElementById("pattern0_8_3").style.display = "block";
		document.getElementById("medium").style.display = "none";
		document.getElementById("pattern1_8_3").style.display = "none";
		document.getElementById("small").style.display = "none";
		document.getElementById("pattern2_8_3").style.display = "none";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "smallMedium":
		document.getElementById("large").style.display = "none";
		document.getElementById("pattern0_8_3").style.display = "none";
		document.getElementById("medium").style.display = "block";
		document.getElementById("pattern1_8_3").style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementById("pattern2_8_3").style.display = "block";
		document.getElementById("mockup").style.height = "84%";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "mediumLarge":
		document.getElementById("small").style.display = "none";
		document.getElementById("pattern2_8_3").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("pattern0_8_3").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("pattern1_8_3").style.display = "block";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "triple":
		document.getElementById("large").style.display = "block";
		document.getElementById("pattern0_8_3").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("pattern1_8_3").style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementById("pattern2_8_3").style.display = "block";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	default:
		document.getElementById("large").style.display = "none";
		document.getElementById("pattern0_8_3").style.display = "none";
		document.getElementById("medium").style.display = "none";
		document.getElementById("pattern1_8_3").style.display = "none";
		document.getElementById("small").style.display = "none";
		document.getElementById("pattern2_8_3").style.display = "none";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
	}
}

function getParameters() {
    const currentUrl = window.location.href;
    let paramString = currentUrl.split('?')[1];
    const type = paramString.split('=')[1];
    return type;
    
}

function showNav(style) {
	if (style == "Leaf" || style == "Spade" || style == "Circle" || style == "Ribbon" || style == "Teardrop"){
		document.getElementById("navigation").style.display = "show";
	}
	else if (style == "Moroccan" || style == "Kite" || style == "Cairo" || style == "Oakley" || style == "Hoop"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
	}
	else {
		document.getElementById("navigation").style.display = "none";
	}
}

function showMockup(style){
	console.log(style);
	switch(style){
	case "Leaf":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/leafShape.html");
		break;
	case "Teardrop":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/teardropShape.html");
		break;
	case "Spade":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/spadeShape.html");
		break;
	case "Moroccan":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/moroccanShape.html");
		break;
	}
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
