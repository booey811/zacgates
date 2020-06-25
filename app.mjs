  
// Requirements
import express from "express";
import path from 'path';


const PORT = process.env.PORT || 3811
const app = express();


// App Set-Up
app.use(express.static("public"));
app.set("view engine", "ejs");




// RESTful Routes

// Home Page
app.get("/", function(req, res){
    res.render("index")
});

// Lockdown Project
app.get("/lockdown", function(req, res){
    res.render("lockdown")
});



app.listen(PORT, () => console.log(`Listening on ${ PORT }`));