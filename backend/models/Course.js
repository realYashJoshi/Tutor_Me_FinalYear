// models/Course.js

const mongoose = require('mongoose');

// Define the course schema
const courseSchema = mongoose.Schema({
  branch:{
    type:String,
    required:true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teachers',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true
});

// Create the course model
const courseModel = mongoose.model("courses", courseSchema);

// Export the model so it can be used in other parts of the app
module.exports = courseModel;
