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




app.get( "/", (req, res, next) => {
      console.log("hello");
      next();
   },
   (req, res ,next) => {
      console.log("second");
      next();
   },
   function(req,res,next)
   {
      res.send(`<div>
      <h2>Welcome to GeeksforGeeks</h2>
      <h5>Tutorial on Middleware</h5>
   </div>`);
   }
   );
   app.listen(3000);
   


/*
app.get("/:id",function(req,res)
{
   res.send("this is get method on route" + req.params.id);
});
app.listen(3000);
*/

