/*var express = require('express');
var app = express();

app.get('/home', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
*/

var express=require("express");
var app=express();
/*
app.get("/home",function(req,res)
{
   res.send("heloo");
});

app.post("/home",function(req,res)
{
   res.send('you called a post method \n' );
});


app.listen(3000);
*/

var things=require("./things.js");

app.use(things);

app.listen(3000);
