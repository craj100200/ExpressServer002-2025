const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app= express();



const Schema = mongoose.Schema;

let studentSchema = new Schema({
    id: {
	    type:Number
    }, 
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    rollNo: {
        type: Number
    },
    dateOfBirth: {
	type: String
    }
}, {
    collection: 'students'
});






app.get('/' , (req,res)=> {res.send("Hello"); });

app.get('/ping' , (req, res)=> {res.send("pong");});

const port = 4000;

app.listen(port);
