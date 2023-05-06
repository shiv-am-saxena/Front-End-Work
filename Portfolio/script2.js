// Dynamic Color Change
const select = document.getElementById("color-select");
let color = select.value;
for (let i = 0; i < 3; i++) {
	const element = document.getElementsByClassName("nxt-door")[i];
	element.style.color = "#000";
}
select.addEventListener("change", (event) => {
	console.log(color);
	color = event.target.value;
	document.getElementsByClassName("cv-loader")[0].style.color = color;
	document.getElementsByClassName("cv-loader")[0].style.borderColor = color;
	document.getElementById("dynamic-color").style.stroke = color;
	document.getElementById("dynamic-color").style.fill = color;
	document.getElementById("color-select").style.color = color;
	document.getElementsByClassName("nav-bar")[0].style.borderBottomColor = color;
	document.getElementsByClassName("bhagwa-colour")[0].style.color = color;
	document.getElementsByClassName("nxt-door")[3].style.color = color;
	document.getElementsByClassName("nxt-door")[3].style.borderColor = color;

	const resume = document.getElementsByClassName("cv-loader");
	resume[0].addEventListener("mouseenter", () => {
		resume[0].style.color = "#fff";
		resume[0].style.transition = "0.5s";
	});

	resume[0].addEventListener("mouseleave", () => {
		resume[0].style.transition = "0.5s";
		resume[0].style.color = color;
	});
	const nxtDoor = document.getElementsByClassName("nxt-door");
	nxtDoor[0].addEventListener("mouseenter", () => {
		nxtDoor[0].style.color = color;
        anchorLink.parentElement.style.textDecoration = "underline";
        anchorLink.parentElement.style.color = color;
		nxtDoor[0].style.transition = "0.25s";
	});

	nxtDoor[0].addEventListener("mouseleave", () => {
		nxtDoor[0].style.transition = "0.25s";
		nxtDoor[0].style.borderBottomColor = "transparent";
		nxtDoor[0].style.color = "#000";
	});
	nxtDoor[1].addEventListener("mouseenter", () => {
		nxtDoor[1].style.color = color;
		nxtDoor[1].style.borderBottomColor = color;
		nxtDoor[1].style.transition = "0.25s";
	});

	nxtDoor[1].addEventListener("mouseleave", () => {
		nxtDoor[1].style.transition = "0.25s";
		nxtDoor[1].style.borderBottomColor = "transparent";
		nxtDoor[1].style.color = "#000";
	});
	nxtDoor[2].addEventListener("mouseenter", () => {
		nxtDoor[2].style = `color: $color`;
		nxtDoor[2].style.borderBottomColor = `${color}`;
		nxtDoor[2].style.transition = "0.25s";
	});

	nxtDoor[2].addEventListener("mouseleave", () => {
		nxtDoor[2].style.transition = "0.25s" ;
		nxtDoor[2].style.borderBottomColor = "transparent";
		nxtDoor[2].style = "color:#000";
	});
	bxShadow(color);
});

function bxShadow(color){
	document.getElementsByClassName("info-pic")[0].style = `box-shadow: ${color}66 5px 5px, ${color}59 10px 10px, ${color}4d 15px 15px, ${color}40 20px 20px, ${color}33 25px 25px, ${color}26 30px 30px, ${color}1a 35px 35px, ${color}0d 40px 40px`;
}
// Dark mode toggle switch
const toggleSwitch = document.getElementById("theme-toggle");

toggleSwitch.addEventListener("change", (event) => {
	if (event.target.checked) {
		document.body.classList.add("dark-mode");
		document.body.style.backgroundColor = "#1e1e1e";
		document.getElementsByClassName("nav-bar")[0].style.backgroundColor = "#1e1e1e";
		for (let i = 0; i < 3; i++) {
			const element = document.getElementsByClassName("nxt-door")[i];
			element.style.color = "#eee";
		}
		document.getElementsByClassName("head-data")[0].style.color = "#eee";
		document.getElementsByClassName("content-info-light")[0].style.color = "#ddd";
		const option = document.getElementsByTagName("option");
		option[0].setAttribute("value","#ff6820");
		option[5].setAttribute("value","#ff0000");
	} else {
		document.body.classList.remove("dark-mode");
		document.body.style.backgroundColor = "#ffffff";
		document.getElementsByClassName("nav-bar")[0].style.backgroundColor = "#fff";
		document.getElementsByClassName("head-data")[0].style.color = "#000";
		document.getElementsByClassName("content-info-light")[0].style.color = "#000";
		for (let i = 0; i < 3; i++) {
			const element = document.getElementsByClassName("nxt-door")[i];
			element.style.color = "#000";
		}
	}
});
