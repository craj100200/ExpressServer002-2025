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

// CREATE Student
router.post('/students', async (req, res, next) => {
	try 
	{
		const data = await Student.create(req.body);
        	console.log(data);
        	res.json(data);
	} 
	catch (error) 
	{
        	return next(error);
    	}
});

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

// UPDATE Student
router.route('/students/:id')
	// Get Single Student
	.get(async (req, res, next) => {
        try 
	{
        	const data = await Student.findById(req.params.id);
            	res.json(data);
        } 
	catch (error) 
	{
            	return next(error);
        }
    })
    // Update Student Data
	.put(async (req, res, next) => {
	   	try 
		{ 
			// Find the Student by id and update
			const updatedStudent = await Student.findOneAndUpdate(
      				{ id: req.params.id }, // Query criteria
      				req.body,        // Update data
      				{ new: true }       // Options: return the updated document
    				);

    			res.json(updatedStudent);
    			if (updatedStudent) 
			{
			      console.log('Student updated successfully:', updatedStudent);
			} 
			else 
			{
	      		console.log('Student not found');
    			}
	    	} 
	    	catch(error) 
		{ 
			return next(error);
	    	} 

     	//   try {
            //const data = await Student.findByIdAndUpdate(req.params.id, {
       //     const data = await Student.find( {id : req.params.id }, {
       //         $set: req.body,
       //     }, { new: true });
       //     res.json(data);
       //     console.log("Student updated successfully!");
       // } catch (error) {
	//	console.log("Error "); console.log(error);
        //    return next(error);
        //}
    });

// DELETE Student
router.delete('/students/:id', async (req, res, next) => {

try 
{ 
	const deletedStudent = await Student.findOneAndDelete(
     		{ id: req.params.id }// Query criteria
    	);


    	if (deletedStudent) 
	{
    		res.status(200).json(deletedStudent);
      		console.log('Student deleted successfully:', deletedStudent);
    	} 
	else 
	{
		res.status(404).send("Student not found");
      		console.log('Student not found');
    	} 
} 
catch(error) 
{
	console.log("Error deleting Student record");console.log(error);
	return next(error);
} 

    //try {
      //  const data = await Student.findByIdAndRemove(req.params.id);
        //res.status(200).json({
          //  msg: data,
       // });
   // } catch (error) {
     //   return next(error);
   // }
});


//student.router.js
//------------------------------------------------------------------------

//------------------------------------------------------------------------



app.get('/' , (req,res)=> {res.send("Hello"); });

app.get('/ping' , (req, res)=> {res.send("pong");});

const port = 4000;

app.listen(port);


// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Error 404: Not Found!');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.message);
    const status = err.statusCode || 500;
    res.status(status).send(err.message);
});
