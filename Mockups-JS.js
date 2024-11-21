
function getColors(colors, type){
	if (type == "Awareness Ribbon"){
		for (let i=0; i < colors['Mia'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['Mia'][i]['value'] + "' class='large " + colors['Mia'][i]['className'] + "' value='" + colors['Mia'][i]['value'] + "' name='" + colors['Mia'][i]['name'] + "' src='Colors/" + colors['Mia'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['Mia'][i]['value'] + "' class='medium " + colors['Mia'][i]['className'] + "' value='" + colors['Mia'][i]['value'] + "' name='" + colors['Mia'][i]['name'] + "' src='Colors/" + colors['Mia'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
			document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['Mia'][i]['value'] + "' class='small " + colors['Mia'][i]['className'] + "' value='" + colors['Mia'][i]['value'] + "' name='" + colors['Mia'][i]['name'] + "' src='Colors/" + colors['Mia'][i]['value'] + ".jpg' onclick='tryIt3(this)' />";
		}
	}
	else {
		for (let i=0; i < colors['AcrylicsAndHardwoods'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='large " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='medium " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
			document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='small " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt3(this)' />";
		}
	}
}

function sportsColors(colors){
	for (let i=0; i < colors['Sports'].length; i++){
		document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['Sports'][i]['value'] + "' class='large' value='" + colors['Sports'][i]['value'] + "' name='" + colors['Sports'][i]['name'] + "' src='Colors/" + colors['Sports'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
		document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['Sports'][i]['value'] + "' class='medium' value='" + colors['Sports'][i]['value'] + "' name='" + colors['Sports'][i]['name'] + "' src='Colors/" + colors['Sports'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
	}
	
}

function getLeathers(colors, type){
	if(type == 'Horizon'){
		var mediumClick = "tryIt4(this)";
	}else { 
		var mediumClick = "tryIt2(this)";
	}
	for (let i=0; i < colors['Leathers'].length; i++){
		document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['Leathers'][i]['value'] + "' class='large " + colors['Leathers'][i]['className'] + "' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
		document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['Leathers'][i]['value'] + "' class='medium " + colors['Leathers'][i]['className'] + "' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='" + mediumClick + "' />";
		document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['Leathers'][i]['value'] + "' class='small " + colors['Leathers'][i]['className'] + "' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='tryIt3(this)' />";
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
	if(type == "Corinth" || type == "Football"){
	    document.getElementById("pattern184").style.display = "block";
	}
	if (type == "Petal"){
		document.getElementsByTagName("svg")[0].children[3].setAttribute("fill", "black");
		document.getElementsByTagName("svg")[0].children[4].setAttribute("fill", "black");
		document.getElementsByTagName("svg")[0].children[5].setAttribute("fill", "black");
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
	if (type == "Petal"){
		document.getElementsByTagName("svg")[0].children[3].setAttribute("fill", "black");
		document.getElementsByTagName("svg")[0].children[4].setAttribute("fill", "black");
		document.getElementsByTagName("svg")[0].children[5].setAttribute("fill", "black");
	}
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
	if (type == "Petal"){
		document.getElementsByTagName("svg")[0].children[3].setAttribute("fill", "black");
		document.getElementsByTagName("svg")[0].children[4].setAttribute("fill", "black");
		document.getElementsByTagName("svg")[0].children[5].setAttribute("fill", "black");
	}
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

function chooseSport (element){
	var selectedSport = element.getAttribute("value");
	var selectedSportName = element.getAttribute("name");
	const children = document.querySelectorAll('.small');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");

	if(selectedSport == "cheer"){
		document.getElementsByTagName("svg")[0].children[2].setAttribute("y", "116");
		document.getElementsByTagName("svg")[0].children[2].setAttribute("x", "-3");
	}
	else{
		document.getElementsByTagName("svg")[0].children[2].setAttribute("y", "140");
		document.getElementsByTagName("svg")[0].children[2].setAttribute("x", "5");
	}
		
	document.getElementById("sSelected").innerHTML = selectedSportName;
	var file = "Colors/" + selectedSport + ".png";
	document.getElementById("image283").setAttribute("xlink:href", file);
	document.getElementById("image283").setAttribute("href", file);
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
		if(smallColors[i].classList[2] == "selected"){

			smallColors[i].classList.remove("selected");
			break;
		}
	}
	for (let i = 0; i < mediumColors.length; i++) {
		if(mediumColors[i].classList[2] == "selected"){
			mediumColors[i].classList.remove("selected");
			
			break;
		}
	}
	for (let i = 0; i < largeColors.length; i++) {
		if(largeColors[i].classList[2] == "selected"){
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
	const currentUrl = window.location.href;
    let paramString = currentUrl.split('?')[1];
    var url = paramString.split('=')[1];
	if (url == "Petal"){
		document.getElementsByTagName("svg")[0].children[3].setAttribute("fill", "none");
		document.getElementsByTagName("svg")[0].children[4].setAttribute("fill", "none");
		document.getElementsByTagName("svg")[0].children[5].setAttribute("fill", "none");
	}
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
		const hardwoodColors = document.querySelectorAll('.medium.hardwood');
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
    if(type == "TumblingBlocks"){
    	type = "Tumbling Blocks";
    }
    if(type == "MusicNote"){
    	type = "Music Note";
    }
    if(type == "LightningBolt"){
    	type = "Lightning Bolt";
    }
    if(type == "OGSugarSkull"){
    	type = "OG Sugar Skull";
    }
    if(type == "AwarenessRibbon"){
    	type = "Awareness Ribbon";
    }
    if(type == "MoonPhase"){
    	type = "Moon Phase";
    }
    return type;
    
}

function showNav(style) {
	if (style == "Leaf" || style == "Spade" || style == "Petal" || style == "Circle" || style == "Ribbon" || style == "Teardrop"){
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
	else if (style == "Mia" || style == "Awareness Ribbon") {
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("lTitle").innerHTML = "Left Color:";
		document.getElementById("mTitle").innerHTML = "Right Color:";
	}
	else if (style == "Cairo" || style == "Managua" || style == "Larissa" || style == "Sochi" || style == "Monaco" 
		|| style == "Dublin" || style == "Valencia" || style == "Double Diamond" || style == "Seoul"
		|| style == "Monroe" || style == "Lima" || style == "Nairobi" || style == "Rio" || style == "Snowflakes" 
		|| style == "Pumpkin"){
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
	else if (style == "Sierra" || style == "Football"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		const acrylicColors = document.querySelectorAll('.acrylic');
		for (let i = 0; i < acrylicColors.length; i++) {
			acrylicColors[i].style.display = "none";
		}
	}
	else if (style == "Kauai" || style == "Quincy" || style == "Cassidy" 
		|| style == "Aspen" || style == "Belize" || style == "Tumbling Blocks" 
		|| style == "Taipei" || style == "Zurich" || style == "Starstruck" || style == "Dragonfly" 
		|| style == "Aster" || style == "Ophelia" || style == "Music Note" || style == "Cactus" 
		|| style == "Marnie" || style == "Daphne" || style == "Elvira" || style == "Jaclyn" 
		|| style == "Lightning Bolt" || style == "OG Sugar Skull" || style == "Austin" 
		|| style == "Salem" || style == "Lisse" || style == "Moon Phase" || style == "Anna" 
		|| style == "Gabrielle"){
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
	case "Petal":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/petalShape.html");
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
	case "Quincy":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/quincyShape.html");
		break;
	case "Cassidy":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/cassidyShape.html");
		break;
	case "Monroe":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/monroeShape.html");
		break;
	case "Lima":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/limaShape.html");
		break;
	case "Nairobi":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/nairobiShape.html");
		break;
	case "Rio":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/rioShape.html");
		break;
	case "Snowflakes":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/snowflakesShape.html");
		break;
	case "Aspen":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/aspenShape.html");
		break;
	case "Belize":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/belizeShape.html");
		break;
	case "Tumbling Blocks":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/tumblingBlocksShape.html");
		break;
	case "Taipei":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/taipeiShape.html");
		break;
	case "Zurich":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/zurichShape.html");
		break;
	case "Starstruck":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/starstruckShape.html");
		break;
	case "Dragonfly":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/dragonflyShape.html");
		break;
	case "Aster":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/asterShape.html");
		break;
	case "Pumpkin":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/pumpkinShape.html");
		break;
	case "Cactus":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/cactusShape.html");
		break;
	case "Music Note":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/musicNoteShape.html");
		break;
	case "Ophelia":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/opheliaShape.html");
		break;
	case "Football":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/footballShape.html");
		break;
	case "Marnie":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/marnieShape.html");
		break;
	case "Daphne":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/daphneShape.html");
		break;
	case "Elvira":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/elviraShape.html");
		break;
	case "Jaclyn":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/jaclynShape.html");
		break;
	case "Lightning Bolt":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/lightningBoltShape.html");
		break;
	case "OG Sugar Skull":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/ogSugarSkullShape.html");
		break;
	case "Austin":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/austinShape.html");
		break;
	case "Salem":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/salemShape.html");
		break;
	case "Mia":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/miaShape.html");
		break;
	case "Awareness Ribbon":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/awarenessRibbonShape.html");
		break;
	case "Lisse":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/lisseShape.html");
		break;
	case "Moon Phase":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/moonPhaseShape.html");
		break;
	case "Anna":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/annaShape.html");
		break;
	case "Gabrielle":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/gabrielleShape.html");
		break;
	}
}

function promoShow(){
	const currentDate = new Date();
	const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
	const promo = document.querySelectorAll('.promo');
	//currentDate.setDate(1); //changing the date to the first to test golden hours
	//currentDate.setHours(7); //changing the hours to test golden hours
	//console.log(currentDate); //making sure the date looks right for golden hours
	promo.forEach(function(e) {
		//Golden Hours Clause
		if (currentDate.getDate() == 1){
			var x = new Date();
			x.setDate(0); //sets to previous month
			previousMonth = x.toLocaleString('default', { month: 'long' }); //months name verse number
			if (currentDate.getUTCHours() < 2){ //if it is before 8am MT
	            if(e.name.includes(previousMonth)){
	            	e.style.display = "inline-block";
	            }
	            else{
	            	e.style.display = "none";
	            }
	        }
	        else if (currentDate.getHours() >= 21){
	        	if(e.name.includes(currentMonth)){
	            	e.style.display = "inline-block";
	            }
	            else{
	            	e.style.display = "none";
	            }
	        }
	        else if (currentDate.getHours() >= 8 || currentDate.getHours() < 21){
	        	if(e.name.includes(currentMonth) || e.name.includes(previousMonth)){
	            	e.style.display = "inline-block";
	            }
	        }
	    } // When it isnt Golden hours it hides the previous month and shows current month only
	    else{
	    	if(e.name.includes(currentMonth)){
	            e.style.display = "inline-block";
	        }
	        else{
	        	e.style.display = "none";
	        }
	    }
	});

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
