"use strict";

function loadAsset(key, id) {
	var url = `https://poly.googleapis.com/v1/assets/${id}/?key=${key}`;

	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.addEventListener("load", function (event) {
		var asset = JSON.parse(event.target.response);

		var format = asset.formats.find(format => { return format.formatType === "TILT"; });

		if (format !== undefined) {
			var url = format.root.url;
			window.open(url);
		}
	});

	request.send(null);
}

function main() {
	var button1 = document.getElementById("button1");
	var field1 = document.getElementById("field1");
	var field2 = document.getElementById("field2");

	button1.addEventListener("click", function() {
		loadAsset(field1.value, field2.value);
	});
}

window.onload = main;

