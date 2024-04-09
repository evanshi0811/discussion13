window.addEventListener("load", function() {
	console.log(document.querySelector("#billing").value)
});

document.querySelector("#toggle").addEventListener("change", function() {
	if (this.checked) {
        document.querySelector("#emailBox").classList.remove("hidden");
    } else {
        document.querySelector("#emailBox").classList.add("hidden");
    }
});