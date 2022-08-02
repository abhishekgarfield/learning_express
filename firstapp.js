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
var express=require("express");
var app=express();
app.set("view engine","pug");
app.set("views","./views");

app.get("/",function(req,res)
{
   var obj={
      name:"abhishek",
      age:26,
      school:"sainik school sujanpur tira"
   };
   res.render("gh",obj);
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
/*


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

*/

/*

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
*/
/*

var express=require("express");
var bodyParser=require("body-parser");
var multer=require("multer");
var upload=multer();
var app=express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data');
app.set("view engine","pug");
app.set("views","./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.use(express.static("public"));

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
var cars = mongoose.model("cars", personSchema);

app.get('/', function(req, res){
   res.render('person');
});

app.post('/person', function(req, res){
   var personInfo = req.body; //Get the parsed information
   
   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
      res.render('show_message', {
         message: "Sorry, you provided worng info", type: "error"});
   } else {
      var newPerson = new cars({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
      });
		
      newPerson.save(function(err, Person){
         if(err)
            res.render('show_message', {message: "Database error", type: "error"});
         else
            res.render('show_message', {
               message: "New person added", type: "success", person: personInfo});
      });
   }
});
app.listen(3000);
*/
/*
var express=require("express");
var app=express();
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/carData");
var bodyParser=require("body-parser");
var multer=require("multer");
var upload=multer();

app.set("view engine","pug");
app.set("views","./views");

app.use(upload.array());
app.use(express.static("upload"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var carSchema=mongoose.Schema({
   name:String,
   used:Number,
   company:String
});
var car=mongoose.model("car",carSchema);

app.get("/",(req,res)=>{
   res.render("person");
});

app.post("/",(req,res)=>
{
   var carInfo=req.body;
   console.log(req.body);

   if(!carInfo.name || !carInfo.used || !carInfo.company)
   {
      console.log(carInfo.name);
      console.log(carInfo.used);
      console.log(carInfo.company);
      
      res.render("show_message",{
         type:"error",
         message:"invalid values entered"
      });
   }
   else
   {
      var newCar=new car({
         name:carInfo.name,
         used:carInfo.used,
         company:carInfo.company
      });

      newCar.save((err,car)=>
      {
         if(err)
         {
            res.render("show_message",{
               type:"error",
               message:"database error"
            });
         }
         else
         {
            res.render("show_message",{
               type:"success",
               info:newCar
            });
         }
      })
      
   }
});
*/
/*
var express=require("express");
var app=express();
var multer=require("multer");
var upload=multer();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/carData");
var carSchema={
   name:String,
   used:Number,
   company:String
};
var cars=mongoose.model("cars",carSchema);

app.get("/",(req,res)=>{
   (cars.find({$or: [{"name":"alto"},{"name":"mustang"}]},{"name":1,_id:0},function(err,response)
   {
      res.send(response);
   }))
});
*/
/*

var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var multer=require("multer");
var upload=multer();
mongoose.connect("mongodb://localhost:27017/carData");
app.set("view engine","pug");
app.set("views","./views");
app.use(bodyParser.json());
app.use(upload.array());

var carSchema={
   name:String,
   used:Number,
   company:String
};

var cars=mongoose.model("cars",carSchema);

app.get("/" , (req,res)=>{
      res.render("update");
});

app.all("/",(req,res) =>
{
   var info=req.body;
   if(!info.currentName || !info.newName)
   {
      res.send("error: no data found");
   }
   else
   {
       cars.updateOne({"name":info.currentName},{$set: {"name":info.newName}},function(err,response)
       {
         if(err)
         {
            res.send("database error");
         }
         else if(response.matchedCount==0)
         {
            res.send("no matches found");
         }
         else
         {
             cars.find({"name":info.newName},function(err,response)
             {
                  res.json(response);
             });
         }
       });
   }
});
app.listen(3000);
*/

/*
var express=require("express");
var app=express();
var cookieParser=require("cookie-parser");
app.use(cookieParser());

app.get("/",(req,res)=>
{
   
   res.cookie("name","express", {maxAge:36000}).send("cookie set");
   
   console.log(req.cookies);
});
app.get("/clear",(req,res)=>{
   res.clearCookie("express").send("cookie cleared");
})
app.listen(3000);

*/
/*
var express=require("express");
var app=express();
var cookieParser=require("cookie-parser");
var session=require("express-session");

app.use(cookieParser());
app.use(session({secret:"shh,  its a secret"}));

app.get("/",(req,res)=>{
   if(req.session.page_views)
   {
      req.session.page_views++;
      res.send("you are visiting this page for : "+ req.session.page_views);
   }
   else{
      req.session.page_views=1;
      res.send("you are visiting this page for the first time");
   }
});
app.listen(3000);
*/
/*
var express=require("express");
var app=express();
var multer=require("multer");
var upload=multer();
var session=require("express-session");
var bodyParser=require("body-parser");

//setting view engine
app.set("view engine","pug");
app.set("views","./views");

//using modules

app.use(session({secret:"shh , it is a secret"}));
app.use(bodyParser.json());
app.use(upload.array());

//connectng database

var users=[];

app.get("/signup",(req,res)=>{
   res.render("signup");
});

app.post("/signup",(req,res)=>
{
    var userInfo=req.body;
    if(!userInfo.id || !userInfo.password)
    {
      res.render("signup",{
         message:"invalid details"
      });
    }
    else
    {
       users.filter((user=>{
         if(user.id==userInfo.id)
         {
            res.render("signup",{
               message:"user already exists"
            })
         }
       }));
   }
      
    
});

app.get("/protected_page",(req,res)=>
{
   res.render("protected_page");
})

app.listen(3000);
*/


