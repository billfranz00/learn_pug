const express = require("express");
const app = express();

const colors = ["red", "green", "blue"];

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response) {
	const firstname = "BigBill";
	return response.render("index", { name: firstname });
});

app.get("/colors", function(request, response) {
	return response.render("data", { colors });
});

app.get("/yo", function(request, response) {
	console.log(__dirname);
	return response.render("hello");
});

app.listen(3000, function() {
	console.log("port 3000 now ready, head over dude");
});