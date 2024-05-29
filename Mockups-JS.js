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
