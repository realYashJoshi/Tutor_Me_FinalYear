const mongoose = require('mongoose');
const salesSchema = mongoose.Schema({
  
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'students' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'teachers' },
  course:{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
  amount:String,
  paymentOption: String,
}, {
  timestamps: true
});
  
  const salesModel = mongoose.model("sales", salesSchema);
  module.exports = salesModel;