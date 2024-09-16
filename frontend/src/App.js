
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Student from './Student';
import Teacher from './Teacher';
import SubjectTutors from './SubjectTutors';
import StudentDetailsForm from './StudentDetailsForm';
import AboutUs from './AboutUs';
import './App.css';

import { Button } from 'react-bootstrap';

function App() {
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
  };

  return (
    <Router>
      <Navbar />
      <div className="background-image">
        <Routes>
        
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/student" element={<Student username={username} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student/:subject" element={<SubjectTutors />} />
          <Route path="/student/payment/:subject" element={<StudentDetailsForm />} />
          <Route path="/register-teacher" element={<RegisterTeacherForm />} /> {/* New Route */}
          <Route path="/register-student" element={<RegisterStudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}


function Navbar() {
  const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.clear(); // Clear all local storage
    navigate('/'); // Redirect to the home page or login page
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ fontFamily: "cursive", fontWeight: "bold" }}>
        <Link to="/" className="navbar-brand">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="Logo"
            className="navbar-logo"
          />
          Tutor Me
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register-teacher" className="nav-link">
                Register as Teacher
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register-student" className="nav-link">
                Register as Student
              </Link>
            </li>
            <li className="nav-item">
              <Button variant="warning" onClick={handleLogout} >
                Logout
              </Button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
 const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await axios.post('http://localhost:8083/api/auth/login', {
        email,
        password,
        role,
      });

      if (response.data) {
        alert('Login Successfull!')
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('role', response.data.role);
           if (role === 'student') {
      navigate('/home')
    }

        if (role === 'teacher') {
          navigate('/teacher')
          onLogin(username);
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid username or password');
    }
  };

  // if (submitted) {
  //   if (role === 'student') {
  //     return <Navigate to="/student" />;
  //   } else if (role === 'teacher') {
  //     return <Navigate to={`/teacher/${username}`} />;
  //   }
  // }


  return (
    <div>
      <br /><br /><br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="card-title text-center" style={{ fontFamily: "cursive" }}>Sign in</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Role:</label>
                  <select
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Enter Your Role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
                <br />
                <button type="submit" className="btn btn-warning">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
function RegisterTeacherForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8083/registerTeacher', formData);
      if (response.data.success) {
        alert('Teacher registration successful');
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error registering teacher:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div>
      <br /><br /><br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="card-title text-center" style={{ fontFamily: "cursive" }}>Register as a Teacher</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Experience:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-warning">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function RegisterStudentForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password: '',
    age: '',
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8083/registerStudent', formData);
      if (response.data.success) {
        alert('Student registration successful');
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error registering student:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div>
      <br /><br /><br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="card-title text-center" style={{ fontFamily: "cursive" }}>Register as a Student</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <br />
                <button type="submit" className="btn btn-warning">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

