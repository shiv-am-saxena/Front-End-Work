// Dynamic Color Change
const select = document.getElementById("color-select");
let color = select.value;
console.log(color);
select.addEventListener("change", (event) => {
	color = event.target.value;
	document.getElementById("resume-button").style.color = color;
	document.getElementById("resume-button").style.borderColor = color;
	document.getElementById("dynamic-color").style.stroke = color;
	document.getElementById("dynamic-color").style.fill = color;
	document.getElementById("color-select").style.color = color;
	document.getElementById("hire").style.color = color;
	document.getElementById("name-color").style.color = color;
	document.getElementById("hire").style.borderColor = color;
	document.getElementById("nav-bottom").style.borderBottomColor = color;
    const nxtLink = document.getElementById('.nxt-door')[2];
    nxtLink.classList.add(color);





	const nxtDoor = document.getElementById("resume-button");
	nxtDoor.addEventListener("mouseenter", () => {
		nxtDoor.style.color = "#ffffff";
	});

	nxtDoor.addEventListener("mouseleave", () => {
		nxtDoor.style.color = color;
	});
});


nxtLink.addEventListener('mouseenter', () => {
    // nxtLink.style.color = color;
    
});

nxtLink.addEventListener('mouseleave', () => {
    // nxtLink.style.color = "#000";
    nxtLink.classList.remove('voilet');
});
// Dark mode toggle switch
const toggleSwitch = document.getElementById("theme-toggle");

toggleSwitch.addEventListener("change", (event) => {
	if (event.target.checked) {
		document.body.classList.add("dark-mode");
	} else {
		document.body.classList.remove("dark-mode");
	}
});
