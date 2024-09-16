
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8083 || process.env.PORT;
const bcrypt = require('bcryptjs');
const authRoutes = require('./routes/auth');
const studentModel = require('./models/Student');
const teacherModel = require('./models/Teacher');
const salesModel = require('./models/Sales');
const courseModel=require("./models/Course");
const jwt = require('jsonwebtoken');


app.use('/api/auth', authRoutes);

app.post("/createCourse", async (req, res) => {
  try {
    const data = new courseModel(req.body);
    console.log("course data received in backend",data);
    await data.save();
    res.send({ success: true, message: "course data saved successfully", data: data });
  } catch (error) {
    res.status(500).send({ success: false, message: "An error occurred while saving course data", error: error });
  }
});

app.get("/allCourses",async(req,res)=>{
  try{
    const data=await courseModel.find({},' branch title description tutor price');
    res.status(200).json({data});
  }
  catch{
    res.status(500).send({ success: false, message: "An error occurred while fetching courses"})
  }
})


app.post("/createSale", async (req, res) => {
  try {
    const data = new salesModel(req.body);
    console.log("sales data received in backend",data);
    await data.save();
    res.send({ success: true, message: "sales data saved successfully", data: data });
  } catch (error) {
    res.status(500).send({ success: false, message: "An error occurred while saving sales data", error: error });
  }
});
app.get("/api/sales/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;

    const sales = await salesModel.find({ student: studentId })
      .populate('course')
      .exec();

    const courses = sales.map(sale => sale.course);

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).send({ success: false, message: "An error occurred while fetching purchased courses", error: error });
  }
});

// Endpoint to get sales details for a particular tutor 
app.get('/teacherDashboard', async (req, res) => {
  // Extract the token from the authorization header
  const authHeader = req.headers.authorization; // Use lowercase 'authorization'
  console.log("this is auth header", authHeader);
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Use the same secret key as in your login route

    // Extract the tutor's username from the query parameters
    const { tutorId } = req.query; // Use req.query to get query parameters

    if (!tutorId) {
      return res.status(400).json({ message: 'TutorId is required' });
    }

    console.log("This is tutor's Id", tutorId);

    // Fetch student details based on the tutor's name
    const studentDetails = await salesModel.find({ teacher: tutorId });

    // Respond with the fetched student details
    res.json({ studentDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Endpoint to register a teacher
app.post("/registerTeacher", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = new teacherModel({ ...req.body,
      password: hashedPassword});
    await data.save();
    res.send({ success: true, message: "Teacher registration successful", data: data });
  } catch (error) {
    res.status(500).send({ success: false, message: "An error occurred while registering as a teacher", error: error });
  }
});
app.post("/registerStudent", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = new studentModel({ ...req.body,
      password: hashedPassword});
    await data.save();
    res.send({ success: true, message: "Student registration successful", data: data });
  } catch (error) {
    res.status(500).send({ success: false, message: "An error occurred while registering as a student", error: error });
  }
});
// Endpoint to get teachers by subject
app.get('/subjectTutors/:subject', async (req, res) => {
  const subject = req.params.subject;
  const tutors = await teacherModel.find({ subject });
  res.json({ tutors });
});

mongoose.connect("mongodb+srv://20me02020:20me02020@cluster0.11ew6bg.mongodb.net/?retryWrites=true&w=majority").then(
  () => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log("Server is Running Successfully");
    });
  }
).catch((err) => console.log(err));


