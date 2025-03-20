const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app= express();





app.get('/' , (req,res)=> {res.send("Hello"); });

app.get('/ping' , (req, res)=> {res.send("pong");});

const port = 4000;

app.listen(port);


