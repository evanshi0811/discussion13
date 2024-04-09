window.addEventListener("load", function() {
	window.alert(document.querySelector("figure:nth-child(2) figcaption").innerHTML);
});

document.querySelector("img").addEventListener("mouseover", function() {
    this.style.visibility = "hidden";
});

document.querySelector("img").addEventListener("mouseout", function() {
    this.style.visibility = "visible";
});