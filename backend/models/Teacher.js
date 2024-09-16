const mongoose = require('mongoose');
const teacherSchema = mongoose.Schema({
    name: String,
    email:String,
    password:String,
    experience: String,
  }, {
    timestamps: true
  });
  
  const teacherModel = mongoose.model("teachers", teacherSchema);
  module.exports = teacherModel;