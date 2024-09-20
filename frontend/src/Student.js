

// import React, { useEffect, useState } from 'react';
// import { Link, Route, useNavigate, Routes } from 'react-router-dom';
// import './Student.css';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import {  faMessage } from '@fortawesome/free-solid-svg-icons';
// import SubjectTutors from './SubjectTutors';
// import axios from 'axios'; // Assuming axios is used for HTTP requests
// import {jwtDecode} from 'jwt-decode';
// function Student() {
//   const [purchasedCourses, setPurchasedCourses] = useState([]);
//   const navigate = useNavigate();
//   const [studentId,setStudentId]=useState([]);

//   const courses = [
//     { id: 1, title: 'Physics', image: 'Physics.jpg', slug: 'physics' },
//     { id: 2, title: 'Mathematics', image: 'mathematics.jpg', slug: 'mathematics' },
//     { id: 3, title: 'Chemistry', image: 'chemistry.jpg', slug: 'chemistry' },
//     { id: 4, title: 'Biology', image: 'biology.jpg', slug: 'biology' },
//     { id: 5, title: 'Humanities', image: 'humanities.jpg', slug: 'humanities' },
//     { id: 6, title: 'Computer', image: 'computer.jpg', slug: 'computer' },
//   ];

//   useEffect(() => {
    
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setStudentId(decodedToken.id); // Extract student ID from token
//       } catch (error) {
//         console.error('Failed to decode token', error);
//       }
//     }
//     // Fetch purchased courses for the student
//     const fetchPurchasedCourses = async () => {
//       try {
//         const response = await axios.get(`https://tutor-me-finalyear.onrender.com/api/sales/${studentId}`);
//         setPurchasedCourses(response.data);
//       } catch (error) {
//         console.error("Error fetching purchased courses:", error);
//       }
//     };

//     fetchPurchasedCourses();
//   }, [studentId]);

//   return (
//     <div>
//       {/* Existing Hero and Courses Section */}
//       <div className="hero-image">
//         <Carousel interval={2000} controls={false} autoPlay>
//           <Carousel.Item>
//             <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/hero.jpg`} alt="Hero" />
//             <Carousel.Caption>
//               <h1>Welcome to Our Online Learning Platform</h1>
//               <p>Explore a wide range of subjects and find the perfect tutor for your studies.</p>
//               <Link to="/about" className="btn btn-warning">Learn More</Link>
//             </Carousel.Caption>
//           </Carousel.Item>
//           {/* Add more Carousel Items if needed */}
//         </Carousel>
//       </div>

//       <div className="container mt-5">
//         <h2 style={{ color: 'black', fontFamily: "cursive" }}>Available Courses</h2>
//         <div className="row">
//           {courses.map((course) => (
//             <div key={course.id} className="col-md-4 mb-4">
//               <div className="card d-flex flex-column justify-content-between">
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/${course.image}`}
//                   className="card-img-top img-fluid"
//                   alt={course.title}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   <h5 className="card-title">{course.title}</h5>
//                   <button
//                     className="btn btn-warning"
//                     onClick={() => navigate(`/student/${course.slug}`)}
//                   >
//                     Browse Courses
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* New Purchased Courses Dashboard */}
//       <div className="container mt-5">
//         <h2 style={{ color: 'black', fontFamily: "cursive" }}>Your Purchased Courses</h2>
//         <div className="row">
//           {purchasedCourses.length > 0 ? (
//             purchasedCourses.map((course) => (
//               <div key={course._id} className="col-md-4 mb-4">
//                 <div className="card d-flex flex-column justify-content-between">
//                   <img
//                     src={`${process.env.PUBLIC_URL}/images/${course.image}`}
//                     className="card-img-top img-fluid"
//                     alt={course.title}
//                     style={{ height: '200px', objectFit: 'cover' }}
//                   />
//                   <div className="card-body d-flex flex-column justify-content-between">
//                     <h5 className="card-title">{course.title}</h5>
//                     <p className="card-text">{course.description}</p>
//                     <button
//                       className="btn btn-warning"
//                       onClick={() => navigate(`/student/course/${course.slug}`)}
//                     >
//                       View Course
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>You haven't purchased any courses yet.</p>
//           )}
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="footer" style={{ backgroundColor: '#ffcd39', color: 'black', fontFamily:'cursive' }}>
//         <div className="container py-5">
//           <div className="row">
//             <div className="col-md-4">
//               <h4>Contact Us <FontAwesomeIcon icon={faMessage} color="white"/> </h4>
//               <p>Email: 20me02020@iitbbs.ac.in</p>
//               <p>Phone: 7038636388</p>
//             </div>
//             <div className="col-md-4">
//               <h4>Send Us a Feedback</h4>
//               <form>
//                 <div className="mb-3">
//                   <input type="text" className="form-control" placeholder="Course Id/Name" />
//                 </div>
//                 <div className="mb-3">
//                   <input type="email" className="form-control" placeholder="Email" />
//                 </div>
//                 <div className="mb-3">
//                   <textarea className="form-control" rows="4" placeholder="Feedback"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-light">Submit</button>
//               </form>
//             </div>
//             <div className="col-md-4">
//               <h4>Stay Connected</h4>
//               <p>Follow us on social media for updates and news!</p>
//               <div style={{display:'flex', justifyContent:"space-evenly", position:"absolute"}}>
//                 <div style={{marginRight:"70px"}}>
//                   <a href="https://twitter.com/YASHNARENDRAJO1">
//                     <FontAwesomeIcon icon={faTwitter} color="white" size="2x"/>
//                   </a>
//                 </div>
//                 <div style={{marginRight:"70px"}}>
//                   <a href='https://www.instagram.com/yashjoshi8458/'>
//                     <FontAwesomeIcon icon={faInstagram} color="white" size="2x"/>
//                   </a>
//                 </div>
//                 <div style={{marginRight:"10px"}}>
//                   <a href='https://www.linkedin.com/in/yash-joshi-655a1b206/'>
//                     <FontAwesomeIcon icon={faLinkedin} color="white" size="2x"/> 
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Define Routes */}
//       <Routes>
//         <Route path="/student/:subject" element={<SubjectTutors />} />
//         <Route path="/student/course/:slug" element={<SubjectTutors />} /> {/* Add a component to handle course view */}
//       </Routes>
//     </div>
//   );
// }

// export default Student;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams,Route,Routes } from 'react-router-dom';

import './Student.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import SubjectTutors from './SubjectTutors';
function Student() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams(); // Extract slug here
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const courses = [
    { id: 1, title: 'Physics', image: 'Physics.jpg', slug: 'physics' },
    { id: 2, title: 'Mathematics', image: 'mathematics.jpg', slug: 'mathematics' },
    { id: 3, title: 'Chemistry', image: 'chemistry.jpg', slug: 'chemistry' },
    { id: 4, title: 'Biology', image: 'biology.jpg', slug: 'biology' },
    { id: 5, title: 'Humanities', image: 'humanities.jpg', slug: 'humanities' },
    { id: 6, title: 'Computer', image: 'computer.jpg', slug: 'computer' },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setStudentId(decodedToken.id);
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
  }, []);

  useEffect(() => {
    if (studentId) {
      const fetchPurchasedCourses = async () => {
        try {
          const response = await axios.get(`https://tutor-me-finalyear.onrender.com/api/sales/${studentId}`);
          setPurchasedCourses(response.data);
        } catch (error) {
          console.error("Error fetching purchased courses:", error);
        }
      };
      fetchPurchasedCourses();
      console.log("this are purchased courses",purchasedCourses);
    }
  }, [studentId]);

 

  
  const handleCourseClick = (course) => {
    setSelectedCourse(course); // Set the selected course
  };

  const extractVideoId = (url) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&=\n\r]+)|youtu\.be\/([^&=\n\r]+)/);
    return videoIdMatch ? videoIdMatch[1] || videoIdMatch[2] : null;
  };

  return (
    <div>
      {/* Existing Hero and Courses Section */}
      <div className="hero-image">
        <Carousel interval={2000} controls={false} autoPlay>
          <Carousel.Item>
            <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/hero.jpg`} alt="Hero" />
            <Carousel.Caption>
              <h1>Welcome to Our Online Learning Platform</h1>
              <p>Explore a wide range of subjects and find the perfect tutor for your studies.</p>
              <Link to="/about" className="btn btn-warning">Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container mt-5">
        <h2 style={{ color: 'black', fontFamily: "cursive" }}>Available Courses</h2>
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card d-flex flex-column justify-content-between">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${course.image}`}
                  className="card-img-top img-fluid"
                  alt={course.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{course.title}</h5>
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`/student/${course.slug}`)}
                  >
                    Browse Courses
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Purchased Courses Dashboard */}
      
      <div>
      <div className="container mt-5">
        <h2 style={{ color: 'black', fontFamily: "cursive" }}>Your Purchased Courses</h2>
        <div className="row">
          {purchasedCourses.length > 0 ? (
            purchasedCourses.map((course) => (
              <div key={course._id} className="col-md-4 mb-4">
                <div className="card d-flex flex-column justify-content-between">
                  
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <p className="card-text">Taught by :{course.tutor}</p>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleCourseClick(course)} // Pass the entire course object
                    >
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>You haven't purchased any courses yet.</p>
          )}
        </div>
      </div>

      {/* Display Course Details */}
      {selectedCourse && (
        <div className="container mt-5">
          <h2>{selectedCourse.title}</h2>
          <p>{selectedCourse.description}</p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${extractVideoId(selectedCourse.videoUrl)}`}
              allowFullScreen
              title="Course Video"
            ></iframe>
          </div>
          <div className="mt-4">
            <h3>Course Content</h3>
            <p>{selectedCourse.content}</p>
          </div>
        </div>
      )}
    </div>

      {/* Footer Section */}
      <footer className="footer" style={{ backgroundColor: '#ffcd39', color: 'black', fontFamily:'cursive' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us <FontAwesomeIcon icon={faMessage} color="white"/> </h4>
              <p>Email: 20me02020@iitbbs.ac.in</p>
              <p>Phone: 7038636388</p>
            </div>
            <div className="col-md-4">
              <h4>Send Us a Feedback</h4>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Course Id/Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Feedback"></textarea>
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>
            <div className="col-md-4">
              <h4>Stay Connected</h4>
              <p>Follow us on social media for updates and news!</p>
              <div style={{display:'flex', justifyContent:"space-evenly", position:"absolute"}}>
                <div style={{marginRight:"70px"}}>
                  <a href="https://twitter.com/YASHNARENDRAJO1">
                    <FontAwesomeIcon icon={faTwitter} color="white" size="2x"/>
                  </a>
                </div>
                <div style={{marginRight:"70px"}}>
                  <a href='https://www.instagram.com/yash_narendra_joshi/'>
                    <FontAwesomeIcon icon={faInstagram} color="white" size="2x"/>
                  </a>
                </div>
                <div style={{marginRight:"70px"}}>
                  <a href='https://www.facebook.com/yash.n.joshi.9'>
                    <FontAwesomeIcon icon={faFacebook} color="white" size="2x"/>
                  </a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/in/yash-joshi-234569102/'>
                    <FontAwesomeIcon icon={faLinkedin} color="white" size="2x"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Routes>
        <Route path="/student/:subject" element={<SubjectTutors />} />
         <Route path="/student/course/:slug" element={<SubjectTutors />} /> {/* Add a component to handle course view */}
       </Routes>
    </div>
  );
}

export default Student;




