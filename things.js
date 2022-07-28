var express=require("express");
var router=express.Router();


router.get("/:id/:name",function(req,res)
{
    res.send("hello this is a get method " + req.params.id +" "+ req.params.name);
});

router.post("/:id/:name",function(req,res)
{
    res.send("hello this is a post method "+ req.params.id +" "+ req.params.name);
});



router.get( "*", function(req,res)
{
    res.send("page not found");
});



module.exports=router;