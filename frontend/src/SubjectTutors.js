

// import React from 'react';
// import { Link, Route,Routes,useNavigate} from 'react-router-dom';
// import StudentDetailsForm from './StudentDetailsForm';

// function SubjectTutors() {
//   const tutors = [
//     { id: 1, name: 'Tutor 1', popularity: 5, fees: 500, duration: '2 months', startingDate: 'August 2023', enrolled: 15, image: 'tutor1.jpg' },
//     { id: 2, name: 'Tutor 2', popularity: 4, fees: 690, duration: '1.5 months', startingDate: 'September 2023', enrolled: 20, image: 'tutor2.jpg' },
//     { id: 3, name: 'Tutor 3', popularity: 3, fees: 420, duration: '2.5 months', startingDate: 'October 2023', enrolled: 10, image: 'tutor3.jpg' },
//     // ... add more tutors
//   ];

//   // Sort tutors by enrollment in descending order
//   const sortedTutors = [...tutors].sort((a, b) => b.enrolled - a.enrolled);
//   const navigate = useNavigate();
//   return (
//     <div className="container mt-5">
//       <h2 style={{ color: 'white' }}>Popular Tutors for This Subject</h2>
//       <div className="row">
//         {sortedTutors.map((tutor, index) => (
//           <div key={tutor.id} className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src={`${process.env.PUBLIC_URL}/images/tutors/${tutor.image}`}
//                 className="card-img-top img-fluid"
//                 alt={tutor.name}
//                 style={{ height: '300px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">
//                   {index === 0 ? (
//                     <>
//                       <span className="badge badge-warning mr-2">Top Tutor</span>
//                       {tutor.name}
//                     </>
//                   ) : (
//                     tutor.name
//                   )}
//                 </h5>
//                 <p className="card-text"><strong>Fees:</strong> Rs {tutor.fees}</p>
//                 <p className="card-text"><strong>Course Duration:</strong> {tutor.duration}</p>
//                 <p className="card-text"><strong>Starting Date:</strong> {tutor.startingDate}</p>
//                 <p className="card-text"><strong>Enrolled:</strong> {tutor.enrolled} students</p>
//                 {/* <Link to={`/student/${tutor.id}`} className="btn btn-primary">
//                   Enroll under this tutor
//                 </Link> */}
//                 <button
//                   className="btn btn-primary mt-auto"
//                   onClick={() => navigate(`/student/payment`)}
//                 >
//                   Enroll
//                 </button>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Routes>
//       <Route path="/student/payment" element={<StudentDetailsForm />} /></Routes>
//     </div>
//   );
// }

// 
// import React from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import StudentDetailsForm from './StudentDetailsForm';

// function SubjectTutors() {
//   const tutors = [
//     { id: 1, name: 'Tutor 1', popularity: 5, fees: 500, duration: '2 months', startingDate: 'August 2023', enrolled: 15, image: 'tutor1.jpg' },
//     { id: 2, name: 'Tutor 2', popularity: 4, fees: 690, duration: '1.5 months', startingDate: 'September 2023', enrolled: 20, image: 'tutor2.jpg' },
//     { id: 3, name: 'Tutor 3', popularity: 3, fees: 420, duration: '2.5 months', startingDate: 'October 2023', enrolled: 10, image: 'tutor3.jpg' },
//     // ... add more tutors
//   ];

//   const navigate = useNavigate();

//   return (
//     <div className="container mt-5">
//       <h2 style={{ color: 'white' }}>Popular Tutors for This Subject</h2>
//       <div className="row">
//         {tutors.map((tutor, index) => (
//           <div key={tutor.id} className="col-md-4 mb-4">
//             <div className="card">
//             <img
//                 src={`${process.env.PUBLIC_URL}/images/tutors/${tutor.image}`}
//                 className="card-img-top img-fluid"
//                 alt={tutor.name}
//                 style={{ height: '300px', objectFit: 'cover' }}
//               />
//               <p className="card-text"><strong> Name</strong>  {tutor.name}</p>
//               <p className="card-text"><strong> Fees:</strong> Rs {tutor.fees}</p>
//                  <p className="card-text"><strong> Course Duration:</strong> {tutor.duration}</p>
//                 <p className="card-text"><strong> Starting Date:</strong> {tutor.startingDate}</p>
//                 <p className="card-text"><strong> Enrolled:</strong> {tutor.enrolled} students</p>
//               <button
//                 className="btn btn-warning mt-auto"
//                 onClick={() => navigate(`/student/payment`, { state: { tutorName: tutor.name } })}
//               >
//                 Enroll
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Routes>
//         <Route path="/student/payment" element={<StudentDetailsForm />} />
//       </Routes>
//     </div>
//   );
// }
// export default SubjectTutors;
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function SubjectTutors() {
//   const location = useLocation();
//   const { branch } = location.state;
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('/allCourses');
//         const filteredCourses = response.data.data.filter(course => course.branch === branch);
//         setCourses(filteredCourses);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };
    
//     fetchCourses();
//   }, [branch]);

//   return (
//     <div className="container mt-5">
//       <h2>{branch} Courses</h2>
//       <div className="row">
//         {courses.map(course => (
//           <div key={course._id} className="col-md-4 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{course.title}</h5>
//                 <p className="card-text">{course.description}</p>
//                 <p className="card-text"><strong>Price:</strong> ${course.price}</p>
//                 <p className="card-text"><strong>Taught by:</strong> {course.tutor.name} (ID: {course.tutor._id})</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubjectTutors;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function SubjectTutors() {
//   const { subject } = useParams(); // Extracting the subject (branch) from the URL
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:8083/allCourses');
//         if (subject) {
//           const filteredCourses = response.data.data.filter(course => course.branch.toLowerCase() === subject.toLowerCase());
//           setCourses(filteredCourses);
//         }
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };
    
//     fetchCourses();
//   }, [subject]);

//   return (
//     <div className="container mt-5">
//       {subject && <h2>{subject.charAt(0).toUpperCase() + subject.slice(1)} Courses</h2>}
//       <div className="row">
//         {courses.map(course => (
//           <div key={course._id} className="col-md-4 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{course.title}</h5>
//                 <p className="card-text">{course.description}</p>
//                 <p className="card-text"><strong>Price:</strong> ${course.price}</p>
//                 <p className="card-text"><strong>Taught by:</strong> {course.tutor.name} (ID: {course.tutor})</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubjectTutors;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SubjectTutors() {
  const { subject } = useParams(); // Use useParams to get the branch from the URL
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8083/allCourses');
        const filteredCourses = response.data.data.filter(course => course.branch.toLowerCase() === subject.toLowerCase());
        setCourses(filteredCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    
    fetchCourses();
  }, [subject]);

  const handleCourseClick = (course) => {
    navigate(`/student/payment/${course.title}`, { state: { tutorId: course.tutor,
    courseId: course._id, price: course.price } });
  };

  return (
    <div className="container mt-5">
      <h2>{subject} Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div key={course._id} className="col-md-4 mb-4">
            <div className="card" onClick={() => handleCourseClick(course)}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text"><strong>Course Id:</strong>{course._id}</p>
                <p className="card-text">{course.description}</p>
                <p className="card-text"><strong>Price:</strong> ${course.price}</p>
                <p className="card-text"><strong>Taught by:</strong> {course.tutor.name} (ID: {course.tutor})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectTutors;




