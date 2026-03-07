//  Http server that supports 4 route(add,sub,mul,divide)
// express se karte hai // express is external dependency 

const express= require("express")

const app=express()  ///intialise
app.use(express.json())

app.get("/",function(req,res){
  //res.send("<html><b>Hi! welcome to my website</b></html>")
    res.sendFile("/home/arpit/projects/calculater/index.html")
})

// app.get("/sum/:a/:b",function(req,res){
//     const a= parseInt(req.params.a);  ////going to be a string
//     const b= parseInt(req.params.b);  ///string sum '1'+'1' =11 hihihihi so parse to Int 

//     const sum =a+b;

//     res.json({
//         ans : sum
//     })

// })
//body bhejna hai
app.post("/sum",function(req,res){
    const a= parseInt(req.body.a)
    const b= parseInt(req.body.b)

    const sum= a+b;

    res.json({
        ans:sum
    })
})



// app.get("/sub")
// app.get("/mul")
// app.get("/div")

app.listen(3016,function(){console.log("server started")})

