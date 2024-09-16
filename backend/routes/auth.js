const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const teacherModel = require('../models/Teacher.js');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
 console.log("this is email",email);
  try {
    let user;

    if (role === 'student') {
      user = await Student.findOne({ email });
    } else if (role === 'teacher') {
      user = await teacherModel.findOne({ email});
      console.log("this is teacher user",user);
    }

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role }, 'your_jwt_secret', { expiresIn: '24d' });

    res.json({ token, role, name: user.name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;