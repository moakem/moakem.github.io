
function getColors(colors, type){
	if(type == "Sports"){
		for (let i=0; i < colors['Sports'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['Sports'][i]['value'] + "' class='large' value='" + colors['Sports'][i]['value'] + "' name='" + colors['Sports'][i]['name'] + "' src='Colors/" + colors['Sports'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['Sports'][i]['value'] + "' class='medium' value='" + colors['Sports'][i]['value'] + "' name='" + colors['Sports'][i]['name'] + "' src='Colors/" + colors['Sports'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
		}
		for (let i=0; i < colors['SportShapes'].length; i++){
			document.getElementById("smallOptions").innerHTML += "<div class='small' value='" + colors['SportShapes'][i]['value'] + "' name='" + colors['SportShapes'][i]['name'] + "' onclick='chooseSport(this)'>" + colors['SportShapes'][i]['className'] + "</div>";	
		}
	}
	else if (type == "Awareness Ribbon"){
		for (let i=0; i < colors['Mia'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['Mia'][i]['value'] + "' class='large " + colors['Mia'][i]['className'] + "' value='" + colors['Mia'][i]['value'] + "' name='" + colors['Mia'][i]['name'] + "' src='Colors/" + colors['Mia'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['Mia'][i]['value'] + "' class='medium " + colors['Mia'][i]['className'] + "' value='" + colors['Mia'][i]['value'] + "' name='" + colors['Mia'][i]['name'] + "' src='Colors/" + colors['Mia'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
			document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['Mia'][i]['value'] + "' class='small " + colors['Mia'][i]['className'] + "' value='" + colors['Mia'][i]['value'] + "' name='" + colors['Mia'][i]['name'] + "' src='Colors/" + colors['Mia'][i]['value'] + ".jpg' onclick='tryIt3(this)' />";
		}
	}
	else if (type == "Berlin"){
		for (let i=0; i < colors['LaserLeathers'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['LaserLeathers'][i]['value'] + "' class='large' value='" + colors['LaserLeathers'][i]['value'] + "' name='" + colors['LaserLeathers'][i]['name'] + "' src='Colors/" + colors['LaserLeathers'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
		}
		for (let i=0; i < colors['AcrylicsAndHardwoods'].length; i++){
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='medium " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
		}
	}
	else if (type == "Tess"){
		for (let i=0; i < colors['AcrylicsAndHardwoods'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='large " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='medium " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
		}	
		document.getElementById("smallOptions").innerHTML += "<div name='Gold' class='small' value='#E6CD96' onclick='metalOptions(this)'>Gold</div> <div name='Silver' class='small' value='#D1D6D2' onclick='metalOptions(this)'>Silver</div>";
		//  Silver Color for Tess #D1D6D2  
		//  Gold Color for Tess #E6CD96
																				
	}
	else {
		for (let i=0; i < colors['AcrylicsAndHardwoods'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='large " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='medium " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt2(this)' />";
			document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['AcrylicsAndHardwoods'][i]['value'] + "' class='small " + colors['AcrylicsAndHardwoods'][i]['className'] + "' value='" + colors['AcrylicsAndHardwoods'][i]['value'] + "' name='" + colors['AcrylicsAndHardwoods'][i]['name'] + "' src='Colors/" + colors['AcrylicsAndHardwoods'][i]['value'] + ".jpg' onclick='tryIt3(this)' />";
		}
	}
	if (type == "Tannenbaum" || type == "Lublin"){
		document.getElementById("largeOptions").innerHTML += "<img id='lwarmAndCozy' class='large hardwood promo' value='warmAndCozy' name='Warm and Cozy' src='Colors/warmAndCozy.jpg' onclick='tryIt(this)' />";
	}
	if (type == "Berlin"){
		const acrylicColors = document.querySelectorAll('.acrylic');
		for (let i = 0; i < acrylicColors.length; i++) {
			acrylicColors[i].style.display = "none";
		}
	}
}

function getLeathers(colors, type){
	if(type == 'Horizon'){
		var mediumClick = "tryIt4(this)";
	}else { 
		var mediumClick = "tryIt2(this)";
	}

	if(type == "Rochelle"){
		for (let i=0; i < colors['LaserLeathers'].length; i++){
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['LaserLeathers'][i]['value'] + "' class='medium' value='" + colors['LaserLeathers'][i]['value'] + "' name='" + colors['LaserLeathers'][i]['name'] + "' src='Colors/" + colors['LaserLeathers'][i]['value'] + ".jpg' onclick='" + mediumClick + "' />";
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['LaserLeathers'][i]['value'] + "' class='large' value='" + colors['LaserLeathers'][i]['value'] + "' name='" + colors['LaserLeathers'][i]['name'] + "' src='Colors/" + colors['LaserLeathers'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
		}
	}
	else{
		for (let i=0; i < colors['Leathers'].length; i++){
			document.getElementById("largeOptions").innerHTML += "<img id='l" + colors['Leathers'][i]['value'] + "' class='large " + colors['Leathers'][i]['className'] + "' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='tryIt(this)' />";
			document.getElementById("mediumOptions").innerHTML += "<img id='m" + colors['Leathers'][i]['value'] + "' class='medium " + colors['Leathers'][i]['className'] + "' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='" + mediumClick + "' />";
			document.getElementById("smallOptions").innerHTML += "<img id='s" + colors['Leathers'][i]['value'] + "' class='small " + colors['Leathers'][i]['className'] + "' value='" + colors['Leathers'][i]['value'] + "' name='" + colors['Leathers'][i]['name'] + "' src='Colors/" + colors['Leathers'][i]['value'] + ".jpg' onclick='tryIt3(this)' />";
		}
	}
	if (type == "Petal"){
		const corkColors = document.querySelectorAll('.cork');
		for (let i = 0; i < corkColors.length; i++) {
			corkColors[i].style.display = "none";
		}
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
	//var type = getParameters();
	if(type == "Berlin"){
		document.getElementsByTagName("svg")[0].children[1].setAttribute("stroke", "black");
	}
	else if (type == "Geneva"){

	}
	else {
		document.getElementsByTagName("svg")[0].children[0].setAttribute("stroke", "black");
	}
	if(type == "Corinth" || type == "Football" || type == "Lublin"){
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
	if(type == "Berlin"){
		document.getElementsByTagName("svg")[0].children[0].setAttribute("stroke", "black");
	}
	else if (type == "Geneva"){
		
	}
	else {
		document.getElementsByTagName("svg")[0].children[1].setAttribute("stroke", "black");
	}
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
	if (type == "Geneva"){
		
	}
	else{
		document.getElementsByTagName("svg")[0].children[2].setAttribute("stroke", "black");
	}
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

function genevaColors (element){
	var selectedColor = element.getAttribute("value");
	var selectedColorName = element.name;

	for (let j = 1; j <= 9; j++){
		if (element.parentNode.id == j){
			const beadClass = "." + j + "beads";
			const children = document.querySelectorAll(beadClass);

			children.forEach(function(e) {
		  		e.classList.remove('selected');
			});
			element.classList.add("selected");
			const selectedElement = j + "Selected";
			document.getElementById(selectedElement).innerHTML = selectedColorName;
			var file = "Colors/" + selectedColor + ".jpg";
			const imageId = "image" + j-1 + "83";
			document.getElementById(imageId).setAttribute("xlink:href", file);
			document.getElementById(imageId).setAttribute("href", file);
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

function metalOptions(element){
	var selectedMetal = element.getAttribute("value");
	var selectedMetalName = element.getAttribute("name");
	const children = document.querySelectorAll('.small');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");

	document.getElementById("sSelected").innerHTML = selectedMetalName;
	document.getElementsByTagName("svg")[0].children[2].setAttribute("stroke", selectedMetal);
}

function genevaMetals(element){
	var selectedMetal = element.getAttribute("value");
	var selectedMetalName = element.getAttribute("name");
	const children = document.querySelectorAll('.bead');

	children.forEach(function(e) {
  		e.classList.remove('selected');
	});
	element.classList.add("selected");

	document.getElementById("bSelected").innerHTML = selectedMetalName;
	document.getElementsByTagName("svg")[0].children[0].setAttribute("stroke", selectedMetal);
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
		//const hardwoodColors = document.querySelectorAll('.medium.hardwood');
		//for (let i = 0; i < hardwoodColors.length; i++) {
			//hardwoodColors[i].style.display = "none";
		//}
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
	else if(style == "Rochelle"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("lTitle").innerHTML = "Top Leather:";
		document.getElementById("mTitle").innerHTML = "Bottom Leather:";
	}
	else {
		document.getElementById("navigation").style.display = "none";
	}
}

function menuOrNot(style) {
	if (style == "Winona" || style == "Edith") {
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
	else if (style == "Sports"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementById("sTitle").innerHTML = "Sports:";
		document.getElementById("mTitle").innerHTML = "Large Heart:";
		document.getElementById("lTitle").innerHTML = "Small Heart:";
	}
	else if(style == "Berlin"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("lTitle").innerHTML = "Top Leather:";
		document.getElementById("mTitle").innerHTML = "Bottom Wood:";
	}
	else if (style == "Tess"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		document.getElementById("medium").style.display = "block";
		document.getElementById("small").style.display = "block";
		document.getElementById("lTitle").innerHTML = "Top Color Options:";
		document.getElementById("mTitle").innerHTML = "Bottom Color Options:";
		document.getElementById("sTitle").innerHTML = "Metal Triangle:";
	}
	else if (style == "Sierra" || style == "Football" || style == "Nativity"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
		const acrylicColors = document.querySelectorAll('.acrylic');
		for (let i = 0; i < acrylicColors.length; i++) {
			if ((admin1 != "" || user1 != "") && style == "Sierra") {
				acrylicColors[i].style.display = "inline-block";
			}
			else{
				acrylicColors[i].style.display = "none";
			}
		}
	}
	else if (style == "Kauai" || style == "Quincy" || style == "Cassidy" 
		|| style == "Aspen" || style == "Belize" || style == "Tumbling Blocks" 
		|| style == "Taipei" || style == "Zurich" || style == "Starstruck" || style == "Dragonfly" 
		|| style == "Aster" || style == "Ophelia" || style == "Music Note" || style == "Cactus" 
		|| style == "Marnie" || style == "Daphne" || style == "Elvira" || style == "Jaclyn" 
		|| style == "Lightning Bolt" || style == "OG Sugar Skull" || style == "Austin" 
		|| style == "Salem" || style == "Lisse" || style == "Moon Phase" || style == "Anna" 
		|| style == "Gabrielle" || style == "Bridget" || style == "Wren" || style == "Saige"
		|| style == "Selene" || style == "Tannenbaum" || style == "Trudy"){
		document.getElementById("navigation").style.display = "none";
		document.getElementById("large").style.display = "block";
	}
	else if (style == "Corinth" || style == "Lublin"){
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
	case "Rochelle":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/rochelleShape.html");
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
	case "Berlin":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/berlinShape.html");
		break;
	case "Sierra":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/sierraShape.html");
		break;
	case "Rowan":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/rowanShape.html");
		break;
	case "Sports":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/sportsShape.html");
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
	case "Tess":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/tessShape.html");
		break;
	case "Bridget":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/bridgetShape.html");
		break;
	case "Wren":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/wrenShape.html");
		break;
	case "Saige":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/saigeShape.html");
		break;
	case "Selene":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/seleneShape.html");
		break;
	case "Edith":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/edithShape.html");
		break;
	case "Nativity":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/nativityShape.html");
		break;
	case "Tannenbaum":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/tannenbaumShape.html");
		break;
	case "Lublin":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/lublinShape.html");
		break;
	case "Trudy":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/trudyShape.html");
		break;
	case "Geneva":
		document.getElementById("mockup").setAttribute("w3-include-html", "Shapes/genevaShape.html");
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


function Logout(){
	document.cookie = "counsultantUsername=;"
	document.cookie = "admin=;"
	location.reload();
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let user = getCookie("counsultantUsername");
  let admin = getCookie("admin");
  if (user != "") {
  	document.getElementById("LoginInfo").innerHTML = "Welcome Consultant! <span onclick='Logout();'>Logout?</span>";
  } else if (admin != "") {
  	document.getElementById("LoginInfo").innerHTML = "Welcome Admin! <span onclick='Logout();'>Logout?</span>";
  } else {
	document.getElementById("LoginInfo").innerHTML ='<a href="/Login.html">Consultant Login</a>';
  }
}


const colors = {
	Leathers : 
	[
		{className: "stock cork", value: "blackCork", name: "Black Cork"},
		{className: "stock cork", value: "whiteCork", name: "White Cork"},
		{className: "stock", value: "gold", name: "Gold"},
		{className: "stock", value: "bronze", name: "Bronze"},
		{className: "stock", value: "silver", name: "Silver"},
		{className: "stock", value: "roseGold", name: "Rose Gold"},
		{className: "stock", value: "whiteLeather", name: "White"},
		{className: "stock", value: "blackLeather", name: "Distressed Black"},
		{className: "stock cork", value: "naturalCork", name: "Natural Cork"},
		{className: "promo", value: "cordelia", name: "Cordelia - January Promo"},
		{className: "promo", value: "peacockMiniTriangles", name: "Peacock Mini Triangles - January Promo"},
		{className: "promo cork", value: "winterGlam", name: "Winter Glam - January Promo"},
		{className: "promo", value: "deepPlumBraid", name: "Deep Plum Braid - January Promo"},
		{className: "promo cork", value: "zebraCork", name: "Zebra Cork - January Promo"}

	],
	AcrylicsAndHardwoods : 
	[
		{className: "acrylic", value: "starlightGlitter", name: "Starlight Glitter" },
		{className: "acrylic", value: "silverMirror", name: "Silver Mirror"},
   		{className: "acrylic", value: "goldMirror", name: "Gold Mirror"},
   		{className: "acrylic", value: "roseGoldMirror", name: "Rose Gold Mirror"},
		{className: "acrylic", value: "matteBlack", name: "Matte Black"},
		{className: "acrylic", value: "matteWhite", name: "Matte White"},
		{className: "hardwood", value: "linen", name: "Linen Hardwood" },
		{className: "hardwood", value: "cherry", name: "Cherry Hardwood"},
		{className: "hardwood", value: "sapele", name: "Sapele Hardwood"},
		{className: "hardwood", value: "walnut", name: "Walnut Hardwood" },
		{className: "acrylic promo", value: "matteCranberry", name: "Matte Cranberry - January Promo"},
   		{className: "acrylic promo", value: "pistachio", name: "Pistachio - January"},
    	        {className: "acrylic promo", value: "kailani", name: "Kailani - January Promo"},
		{className: "hardwood promo", value: "bamboo", name: "Bamboo Hardwood - January Promo"},
		{className: "acrylic promo", value: "darya", name: "Darya - January Promo"},
    	        {className: "acrylic promo", value: "saphira", name: "Saphira - January Promo"}
	],
	Mia : 
	[
		{value: "black", name: "Black" },
		{value: "white", name: "White" },
		{value: "ruby", name: "Ruby" },
		{value: "pink", name: "Pink" },
		{value: "turquoise", name: "Turquoise" },
		{value: "starlightGlitter", name: "Starlight Glitter" },
		{value: "bordeaux", name: "Bordeaux" },
		{value: "burntOrange", name: "Burnt Orange" },
		{value: "darkTeal", name: "Dark Teal" },
		{value: "transparentNavy", name: "Transparent Navy" },
		{value: "limeGreen", name: "Lime Green" },
		{value: "navyMirror", name: "Navy Mirror" },
		{value: "redAcrylic", name: "Red" },
		{value: "orange", name: "Orange" },
		{value: "yellow", name: "Yellow" },
		{value: "greenAcrylic", name: "Green" },
		{value: "mirroredPurple", name: "Mirrored Purple" },
		{value: "lightBlue", name: "Light Blue" },
		{value: "darkBlue", name: "Dark Blue" },
		{value: "purpleAcrylic", name: "Purple" },
		{value: "brownAcrylic", name: "Brown" },
		{value: "mirroredRoseGold", name: "Mirrored Rose Gold" },
		{value: "confettiGlitter", name: "Confetti Glitter" },
		{value: "gray", name: "Gray" },
		{value: "ivory", name: "Ivory" },
		{value: "mirroredGold", name: "Mirrored Gold" },
		{value: "mirroredSilver", name: "Mirrored Silver" }
	],
	LaserLeathers :
	[
		{value: "red", name: "Red"},
		{value: "natural", name: "Natural"},
		{value: "blackLaserLeather", name: "Black"},
		{value: "purple", name: "Purple"},
		{value: "green", name: "Green"},
		{value: "darkNavy", name: "Dark Navy"},
		{value: "brown", name: "Brown"},
		{value: "mustard", name: "Mustard"}
	],
	Sports : 
	[
		{value: "black", name: "Black" },
		{value: "white", name: "White" },
		{value: "ruby", name: "Ruby" },
		{value: "pink", name: "Pink" },
		{value: "turquoise", name: "Turquoise" },
		{value: "starlightGlitter", name: "Starlight Glitter" },
		{value: "bordeaux", name: "Bordeaux" },
		{value: "burntOrange", name: "Burnt Orange" },
		{value: "darkTeal", name: "Dark Teal" },
		{value: "transparentNavy", name: "Transparent Navy" },
		{value: "limeGreen", name: "Lime Green" },
		{value: "navyMirror", name: "Navy Mirror" },
		{value: "redAcrylic", name: "Red" },
		{value: "orange", name: "Orange" },
		{value: "yellow", name: "Yellow" },
		{value: "greenAcrylic", name: "Green" },
		{value: "mirroredPurple", name: "Mirrored Purple" },
		{value: "lightBlue", name: "Light Blue" },
		{value: "darkBlue", name: "Dark Blue" },
		{value: "purpleAcrylic", name: "Purple" },
		{value: "brownAcrylic", name: "Brown" },
		{value: "mirroredRoseGold", name: "Mirrored Rose Gold" },
		{value: "confettiGlitter", name: "Confetti Glitter" },
		{value: "gray", name: "Gray" },
		{value: "ivory", name: "Ivory" },
		{value: "mirroredGold", name: "Mirrored Gold" },
		{value: "mirroredSilver", name: "Mirrored Silver" }
	],
	SportShapes:
	[
		{value: "football", name: "Touchdown", className: "Football"},
		{value: "soccer", name: "Goal", className: "Soccer"},
		{value: "baseball", name: "Home Run", className: "Baseball"},
		{value: "basketball", name: "Swish", className: "Basketball"},
		{value: "hockey", name: "Slap Shot", className: "Hockey"},
		{value: "volleyball", name: "Ace", className: "Volleyball"},
		{value: "tennis", name: "Match", className: "Tennis"},
		{value: "lacrosse", name: "Whip", className: "Lacrosse"},
		{value: "golf", name: "Birdie", className: "Golf"},
		{value: "crossCountry", name: "Cadence", className: "Cross Country"},
		{value: "cheer", name: "Aerial", className: "Cheer"}
	],
	Genevas:
	[
		{value: "purpleBead", name: "Purple" },
		{value: "pinkBead", name: "Pink" },
		{value: "neutralBead", name: "Neutral" },
		{value: "goldBead", name: "Gold" },
		{value: "silverBead", name: "Silver" },
		{value: "tanBead", name: "Tan" },
		{value: "mintBead", name: "Mint" },
		{value: "navyBead", name: "Navy" },
		{value: "coralBead", name: "Coral" },
		{value: "greenBead", name: "Green" },
		{value: "yellowBead", name: "Yellow" }
	]
};


let user1 = getCookie("counsultantUsername");
let admin1 = getCookie("admin");
if (admin1 != "" || user1 != "") {

//Leathers
	//colors.Leathers.length = 0;
	//colors.Leathers.push({className: "promo cork", value: "zebraCork", name: "Zebra Cork - January Promo"});

	
//Acrylics and Hardwoods
	//colors.AcrylicsAndHardwoods.length = 0;
	//colors.AcrylicsAndHardwoods.push({className: "acrylic", value: "starlightGlitter", name: "Starlight Glitter" });

}
else if (user1 != "") {
	//colors.AcrylicsAndHardwoods.push({className: "acrylic promo", value: "cackle", name: "Cackle - Fan Favorite"});
} 
else {
       
}
