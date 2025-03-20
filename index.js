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

// Load environment variables from .env file
//const { MONGODB_URI, PORT } = process.env;
const MONGODB_URI = '';


// Connecting to MongoDB Database
mongoose.connect('mongodb+srv://mydbuser:mydbuser@cluster0.hfu9n.mongodb.net/Student?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database successfully connected!');
    })
    .catch((error) => {
        console.log('Could not connect to database: ' + error);
    });

// Initialize Express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const router = express.Router();


// READ Students
router.get('/students', async (req, res, next) => {
	try 
	{
        	const data = await Student.find();
        	res.json(data);
    	} 
	catch (error) 
	{
        	return next(error);
    	}
});

app.get('/' , (req,res)=> {res.send("Hello"); });

app.get('/ping' , (req, res)=> {res.send("pong");});

const port = 4000;

app.listen(port);


