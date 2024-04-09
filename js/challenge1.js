window.addEventListener("load", function() {
	document.querySelector("h1").classList.add("heading");
});

document.addEventListener("dblclick", function() {
	window.alert(Date());
});

document.querySelector("#toggle").addEventListener("change", function() {
	if (this.checked) {
        document.querySelector("#emailBox").classList.remove("hidden");
    } else {
        document.querySelector("#emailBox").classList.add("hidden");
    }
});