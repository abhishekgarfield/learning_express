var express=require("express");
var router=express.Router();

router.get("/",function(req,res)
{
    res.send("hwllo this is a get method");
});

router.post("/",function(req,res)
{
    res.send("hwllo this is a post method");
});


module.exports=router;