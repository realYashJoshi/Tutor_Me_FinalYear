const mongoose = require('mongoose');

// Define the student schema
const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: String,
}, {
  timestamps: true
});

// Create the student model
const studentModel = mongoose.model("students", studentSchema);

// Export the model so it can be used in other parts of the app
module.exports = studentModel;