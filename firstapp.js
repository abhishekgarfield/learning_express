/*var express = require('express');
var app = express();

app.get('/home', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
*/


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

/*
app.set("view engine" ,"pug");
app.set("views","./views");

app.get("/",function(req,res)
{
   res.render("login")

  
});
app.listen(3000);
*/

/*

app.set("view engine","pug");
app.set("views","./views");
app.use(express.static('./images'))

app.get("/",function(req,res)
{
   res.render("login"
   )
}).listen(3000);
*/

/*

var express=require("express");
var app=express();
var multer= require("multer");
var upload=multer();
var bodyParser=require("body-parser");

app.get("/",(req,res)=>{
   res.render("form");
});
app.set("view engine","pug");
app.set("views","./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(upload.array());
app.use(express.static("upload"));

app.post("/",(req,res)=>{
   console.log(req.body);
   res.send("request recienved");
});
app.listen(3000);
*/



var express=require("express");
var bodyParser=require("body-parser");
var multer=require("multer");
var upload=multer();
var app=express();

app.set("view engine","pug");
app.set("views","./views");

app.get("/",function(req,res)
{
   res.render("form");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(upload.array());
app.use(express.static("upload"));

app.post("/",function(req,res)
{
   console.log(req.body);
   res.send("request submitted");
});
app.listen(3000);


var formidable=require("formidable");
var http=require("http");
http.createServer(function(req,res)
{
   if(req.url=="/upload")
   {
      var form=formidable.IncomingForm();
      form.parse(req,function(err,fields,files)
      {
         res.end("form submitted");
      });
   }
});




