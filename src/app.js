const express = require('express');
const path = require('path')
const hbs = require('hbs');
const port = process.env.PORT || 8000 ;
const app = express();
const { json } = require('express');
const Register = require('./models/register')

require('./db/conn');

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

console.log(partialPath)

app.use(express.static(staticPath));
hbs.registerPartials(partialPath)

app.set("view engine","hbs")
app.set("views",templatePath);

app.get("/",(req,res)=>{
    // res.send("this is our simple home page");
    res.render("index");
})


app.get("/Home",(req,res)=>{
    res.render("index");
})

app.get("/register",(req,res)=>{
    res.render("register");
})


app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

// connecting with database 

app.post("/register",async (req,res)=>{
    try{
        const RegisterEmployee = new Register({
            name : req.body.name,
            CompanyName : req.body.CompanyName,
            phone : req.body.phone,
            email : req.body.email,  
        })
        const registered = await RegisterEmployee.save()
        res.status(201).render("register");
    }catch(err){
        res.send("err")
    }
})


app.listen(port,"127.0.0.1",()=>{
    console.log("listening to port 8000")
});
