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

/*

var things=require("./things.js");

app.use("/things",things);


app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});
app.listen(3000);
*/

/*
app.get("/:id",function(req,res)
{
   res.send("this is get method on route" + req.params.id);
});
app.listen(3000);
*/

/*
var fs=require("fs");

app.get("/",function(req,res)
{
   fs.readFile("./html/first.html",function(err,data)
   {
   res.write(data);
   return res.end();
   });
});
app.listen(3000);
*/

/*

app.get("/:name",function(req,res,next)
{
   console.log("performing first chk");
   next();
},

   function(req,res,next)
   {
      console.log("performing second chk");
   next();
   },
   function(req,res,next)
   {
      res.send("hi all done and published");

   }
);
app.listen(3000);

*/

/*
app.set("view engine","pug");
app.set("views","./views");

app.get("/",function(req,res)
{
   res.render("gh",{
      name:"abhishek",
      age:26,
      school:"sainik school sujanpur tira"
   });
}).listen(3000);
*/


app.set("view engine" ,"pug");
app.set("views","./views");

app.get("/",function(req,res)
{
   res.render("login")

  
});
app.listen(3000);