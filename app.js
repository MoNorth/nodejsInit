

var express = require('express');
var app = express();


app.set("view engine", 'ejs');
app.use(express.static(__dirname + "/static"));




app.listen(3000, '172.0.0.1', function() {
	console.log("开始监听....");
})