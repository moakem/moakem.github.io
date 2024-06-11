function getColors(colors){
	for (let i=0; i < colors['AcrylicsAndHardwoods'].length; i++){
		document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='large " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['src'] + "' onclick='tryIt(this)' />";
		document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='medium " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['src'] + "' onclick='tryIt2(this)' />";
		document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='small " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['src'] + "' onclick='tryIt3(this)' />";
	}
	
}

function getLeathers(colors){
	for (let i=0; i < colors['Leathers'].length; i++){
		document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['Leathers'][i]['value'] + "' class='large' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
		document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['Leathers'][i]['value'] + "' class='medium' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='if(type == 'Horizon'){tryIt4(this)} else {tryIt2(this)}' />";
		document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['Leathers'][i]['value'] + "' class='small' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='tryIt3(this)' />";
	}
	
}

function tryIt (element){
	var selectedColor = element.getAttribute("value");
	var selectedColorName = element.name;
	const children = document.querySelectorAll('.large');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");
	document.getElementById("lSelected").innerHTML = selectedColorName;
	var file = "Colors/" + selectedColor + ".jpg";
	document.getElementById("image083").setAttribute("xlink:href", file);
	document.getElementById("image083").setAttribute("href", file);
	document.getElementsByTagName("svg")[0].children[0].setAttribute("stroke", "black");
	var type = getParameters();
	if(type == "Corinth"){
	    document.getElementById("pattern184").style.display = "block";
	}
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
	var file = "Colors/" + selectedColor + ".jpg";
	document.getElementById("image183").setAttribute("xlink:href", file);
	document.getElementById("image183").setAttribute("href", file);
	document.getElementsByTagName("svg")[0].children[1].setAttribute("stroke", "black");
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
	var file = "Colors/" + selectedColor + ".jpg";
	document.getElementById("image283").setAttribute("xlink:href", file);
	document.getElementById("image283").setAttribute("href", file);
	document.getElementsByTagName("svg")[0].children[2].setAttribute("stroke", "black");
}

function tryIt4 (element){
	var selectedColor = element.getAttribute("value");
	var selectedColorName = element.name;
	const children = document.querySelectorAll('.medium');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");

	const listItems = document.querySelectorAll('#three li');
	for (let i = 0; i < listItems.length; i++) {
		if(listItems[i].classList == "selected" && listItems[i].textContent == "Large"){
			console.log("largeHorizon");
			document.getElementById("mHSelected").innerHTML = selectedColorName;
			document.getElementById("mSelected").style.display = "none";
			document.getElementById("mHSelected").style.display = "inline";
			document.getElementById("image483").setAttribute("xlink:href", "Colors/" + selectedColor + ".jpg");
			document.getElementById("image483").setAttribute("href", "Colors/" + selectedColor + ".jpg");
			document.getElementsByTagName("svg")[0].children[3].setAttribute("stroke", "black");
			document.getElementsByTagName("svg")[0].children[1].setAttribute("stroke", "none");
			break;
		}
		else{
			console.log("medium");
			document.getElementById("mSelected").innerHTML = selectedColorName;
			document.getElementById("mSelected").style.display = "inline";
			document.getElementById("mHSelected").style.display = "none";
			document.getElementById("image183").setAttribute("xlink:href", "Colors/" + selectedColor + ".jpg");
			document.getElementById("image183").setAttribute("href", "Colors/" + selectedColor + ".jpg");
			document.getElementsByTagName("svg")[0].children[1].setAttribute("stroke", "black");
			document.getElementsByTagName("svg")[0].children[3].setAttribute("stroke", "none");
		}
	}
}

function reset(type) {
	document.getElementById("sSelected").innerHTML = "";
	document.getElementById("mSelected").innerHTML = "";
	document.getElementById("mHSelected").innerHTML = "";
	document.getElementById("lSelected").innerHTML = "";
	const largeColors = document.querySelectorAll('.large');
	const mediumColors = document.querySelectorAll('.medium');
	const smallColors = document.querySelectorAll('.small');
	for (let i = 0; i < smallColors.length; i++) {
		if(smallColors[i].classList[1] == "selected"){
			smallColors[i].classList.remove("selected");
			break;
		}
	}
	for (let i = 0; i < mediumColors.length; i++) {
		if(mediumColors[i].classList[1] == "selected"){
			mediumColors[i].classList.remove("selected");
			
			break;
		}
	}
	for (let i = 0; i < largeColors.length; i++) {
		if(largeColors[i].classList[1] == "selected"){
			largeColors[i].classList.remove("selected");

			break;
		}
	}
	document.getElementById("image083").setAttribute("xlink:href", "");
	document.getElementById("image083").setAttribute("href", "");
	if (type != "regular"){
		document.getElementById("image183").setAttribute("xlink:href", "");
		document.getElementById("image183").setAttribute("href", "");
		if(type != "mini"){
			document.getElementById("image283").setAttribute("xlink:href", "");
			document.getElementById("image283").setAttribute("href", "");
		}
	}
	if(type == "larHorizon" || type == "tripleHorizon"){
		document.getElementById("image483").setAttribute("xlink:href", "");
		document.getElementById("image483").setAttribute("href", "");
		document.getElementsByTagName("svg")[0].children[3].setAttribute("stroke", "none");
	}
	document.getElementsByTagName("svg")[0].children[1].setAttribute("stroke", "none");
	document.getElementsByTagName("svg")[0].children[0].setAttribute("stroke", "none");
	document.getElementsByTagName("svg")[0].children[2].setAttribute("stroke", "none");
}

function layers(type){

	reset(type.id);

	switch(type.id){
	case "sm":
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "none";
		document.getElementsByTagName("svg")[0].children[0].style.display = "none";
		document.getElementById("medium").style.display = "none";
		document.getElementsByTagName("svg")[0].children[1].style.display = "none";
		document.getElementById("small").style.display = "block";
		document.getElementsByTagName("svg")[0].children[2].style.display = "block";
		document.getElementById("mockup").style.height = "67%";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "med":
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "none";
		document.getElementsByTagName("svg")[0].children[0].style.display = "none";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "block";
		document.getElementById("small").style.display = "none";
		document.getElementsByTagName("svg")[0].children[2].style.display = "none";
		document.getElementById("mockup").style.height = "84%";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "medHorizon":
		var children2 = document.querySelectorAll('li');
		document.getElementById("large").style.display = "none";
		document.getElementsByTagName("svg")[0].children[0].style.display = "none";
		document.getElementsByTagName("svg")[0].children[3].style.display = "none";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementsByTagName("svg")[0].children[2].style.display = "block";
		document.getElementById("mockup").style.height = "84%";
		children2.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "lar":
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "block";
		document.getElementsByTagName("svg")[0].children[0].style.display = "block";
		document.getElementById("medium").style.display = "none";
		document.getElementsByTagName("svg")[0].children[1].style.display = "none";
		document.getElementById("small").style.display = "none";
		document.getElementsByTagName("svg")[0].children[2].style.display = "none";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "larHorizon":
		var children2 = document.querySelectorAll('li');
		document.getElementById("large").style.display = "block";
		document.getElementsByTagName("svg")[0].children[0].style.display = "block";
		document.getElementsByTagName("svg")[0].children[3].style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "none";
		document.getElementById("small").style.display = "none";
		document.getElementsByTagName("svg")[0].children[2].style.display = "none";
		document.getElementById("mockup").style.height = "";
		children2.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "smallMedium":
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "none";
		document.getElementsByTagName("svg")[0].children[0].style.display = "none";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementsByTagName("svg")[0].children[2].style.display = "block";
		document.getElementById("mockup").style.height = "84%";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "mediumLarge":
		var children = document.querySelectorAll('li');
		document.getElementById("small").style.display = "none";
		document.getElementsByTagName("svg")[0].children[2].style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementsByTagName("svg")[0].children[0].style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "block";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "triple":
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "block";
		document.getElementsByTagName("svg")[0].children[0].style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementsByTagName("svg")[0].children[2].style.display = "block";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "tripleHorizon":
		var children2 = document.querySelectorAll('li');
		document.getElementById("large").style.display = "block";
		document.getElementsByTagName("svg")[0].children[0].style.display = "block";
		document.getElementsByTagName("svg")[0].children[3].style.display = "none";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementsByTagName("svg")[0].children[2].style.display = "block";
		document.getElementById("mockup").style.height = "";
		children2.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "regular":
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "block";
		document.getElementsByTagName("svg")[0].children[0].style.display = "block";
		document.getElementById("medium").style.display = "none";
		document.getElementsByTagName("svg")[0].children[1].style.display = "none";
		document.getElementById("mockup").style.height = "";
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	case "mini":
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "none";
		document.getElementsByTagName("svg")[0].children[0].style.display = "none";
		document.getElementById("medium").style.display = "block";
		document.getElementsByTagName("svg")[0].children[1].style.display = "block";
		document.getElementById("mockup").style.height = "";
		const hardwoodColors = document.querySelectorAll('.medium hardwood');
		for (let i = 0; i < hardwoodColors.length; i++) {
			hardwoodColors[i].style.display = "none";
		}
		children.forEach(function(e) {
	  		e.classList.remove('selected');
		});
		type.classList.add("selected");
		break;
	default:
		var children = document.querySelectorAll('li');
		document.getElementById("large").style.display = "none";
		document.getElementsByTagName("svg")[0].children[0].style.display = "none";
		document.getElementById("medium").style.display = "none";
		document.getElementsByTagName("svg")[0].children[1].style.display = "none";
		document.getElementById("small").style.display = "none";
		document.getElementsByTagName("svg")[0].children[2].style.display = "none";
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
    var type = paramString.split('=')[1];
    console.log(type);
    if(type == "DoubleKite"){
    	type = "Double Kite";
    }
    if(type == "DoubleDiamond"){
    	type = "Double Diamond";
    }
    return type;
    
}

function showNav(style) {
	if (style == "Leaf" || style == "Spade" || style == "Circle" || style == "Ribbon" || style == "Teardrop"){
		document.getElementById("navigation").style.display = "show";
	}
	else if (style == "Moroccan" || style == "Kite" || style == "Bar" || style == "Oakley" || style == "Hoop"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
	}
	else if (style == "Horizon"){
		document.getElementById("navigation").style.display = "show";
		document.getElementById("six").style.display = "none";
		document.getElementById("three").style.display = "block";
	}
	else if(style == "Double Kite"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
	}
	else {
		document.getElementById("navigation").style.display = "none";
	}
}

function menuOrNot(style) {
	if (style == "Winona") {
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("lTitle").innerHTML = "Top Color Options:";
		document.getElementById("mTitle").innerHTML = "Bottom Color Options:";
	}
	else if (style == "Cairo" || style == "Managua" || style == "Larissa" || style == "Sochi" || style == "Monaco" 
		|| style == "Dublin" || style == "Valencia" || style == "Double Diamond" || style == "Seoul"
		|| style == "Monroe"){
		document.getElementById("navigation").style.display = "block";
	}
	else if (style == "Sydney" || style == "Rowan"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementById("mTitle").innerHTML = "Middle Color Options:";
		document.getElementById("lTitle").innerHTML = "Top Color Options:";
	}
	else if (style == "Sierra"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		const acrylicColors = document.querySelectorAll('.acrylic');
		for (let i = 0; i < acrylicColors.length; i++) {
			acrylicColors[i].style.display = "none";
		}
	}
	else if (style == "Kauai"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
	}
	else if (style == "Corinth"){
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
	case "Hoop":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/hoopShape.html");
		break;
	case "Bar":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/barShape.html");
		break;
	case "Circle":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/circleShape.html");
		break;
	case "Horizon":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/horizonShape.html");
		break;
	case "Double Kite":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/doubleKiteShape.html");
		break;
	case "Kite":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/kiteShape.html");
		break;
	case "Ribbon":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/ribbonShape.html");
		break;
	case "Oakley":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/oakleyShape.html");
		break;
	case "Cairo":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/cairoShape.html");
		break;
	case "Managua":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/managuaShape.html");
		break;
	case "Larissa":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/larissaShape.html");
		break;
	case "Valencia":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/valenciaShape.html");
		break;
	case "Monaco":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/monacoShape.html");
		break;
	case "Sochi":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/sochiShape.html");
		break;
	case "Dublin":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/dublinShape.html");
		break;
	case "Double Diamond":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/doubleDiamondShape.html");
		break;
	case "Seoul":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/seoulShape.html");
		break;
	case "Kauai":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/kauaiShape.html");
		break;
	case "Corinth":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/corinthShape.html");
		break;
	case "Winona":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/winonaShape.html");
		break;
	case "Sydney":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/sydneyShape.html");
		break;
	case "Sierra":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/sierraShape.html");
		break;
	case "Rowan":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/rowanShape.html");
		break;
	case "Monroe":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/monroeShape.html");
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
