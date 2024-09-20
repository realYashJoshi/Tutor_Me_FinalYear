
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import {jwtDecode} from 'jwt-decode'; 
// function Teacher() {
//   const [studentData, setStudentData] = useState([]);
//   const [totalEarnings, setTotalEarnings] = useState(0);
//   const [tutorName, setTutorName] = useState("");
//   const[tutorId,setTutorId]=useState("");
//   useEffect(() => {
//     // Get tutor ID from token
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setTutorId(decodedToken.id);
//       } catch (error) {
//         console.error('Failed to decode token', error);
//       }
//     }
//   }, []);
  
  
//   useEffect(() => {
//     console.log("this is tutor id", tutorId);
//     const fetchStudentDetails = async () => {
//       const token = localStorage.getItem('token'); // Retrieve the token from localStorage
//       const tutorUsername = localStorage.getItem('name'); // Retrieve the tutor's username from localStorage
//       setTutorName(tutorUsername);

//       if (!token) {
//         alert('Token not found');
//         return;
//       }

//       try {
//         const response = await axios.get('https://tutor-me-finalyear.onrender.com/teacherDashboard', {
//           params: { tutorId }, // Pass tutorid as a query parameter
//           headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } // Fixed missing backticks
//         });
      
//         const studentDetails = response.data.studentDetails;
//         setStudentData(studentDetails);

//         // Sum the earnings while mapping
//         let total = 0;
//         studentDetails.map(student => {
//           total += parseFloat(student.amount); // Convert string to number and sum it
//           return student; // Return the student to avoid issues
//         });

//         setTotalEarnings(total); // Set the total earnings
//         console.log("this is student data", response.data);

//       } catch (err) {
//         console.error(err);
//       }
//     }

//     if (tutorId) {
//       fetchStudentDetails(); // Fetch student details after tutorId is updated
//     }
//   }, [tutorId]);
 

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4" style={{color:"black"}}>Student Data for Tutor: {tutorName}</h2>
//       <div className="card">
//         <div className="card-header">
//           <h5>Total Earnings: Rs{totalEarnings}</h5>
//         </div>
//         <ul className="list-group list-group-flush">
//           {Array.isArray(studentData) ? (
//             studentData.map((student) => (
//               <li className="list-group-item" key={student._id}>
//                 <strong>Order Id:</strong> {student._id}<br />
//                 <strong>Course Id:</strong>{student.course}<br></br>
//                 <strong>Student Id:</strong> {student.student}<br />
//                 <strong>Amount:</strong>{student.amount}<br/>
//                 <strong>Payment Method:</strong> {student.paymentOption}
//               </li>
//             ))
//           ) : (
//             <li className="list-group-item">Loading student data...</li>
//           )
//           }
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Teacher;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function Teacher() {
  const [studentData, setStudentData] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [tutorName, setTutorName] = useState("");
  const [tutorId, setTutorId] = useState("");
  const [courseData, setCourseData] = useState({
    branch: "",
    title: "",
    description: "",
    content: "",
    videoUrl: "",
    price: ""
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setTutorId(decodedToken.id);
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const token = localStorage.getItem('token');
      const tutorUsername = localStorage.getItem('name');
      setTutorName(tutorUsername);

      if (!token) {
        alert('Token not found');
        return;
      }

      try {
        const response = await axios.get('https://tutor-me-finalyear.onrender.com/teacherDashboard', {
          params: { tutorId },
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
        });

        const studentDetails = response.data.studentDetails;
        setStudentData(studentDetails);

        let total = 0;
        studentDetails.map(student => {
          total += parseFloat(student.amount);
          return student;
        });

        setTotalEarnings(total);

      } catch (err) {
        console.error(err);
      }
    }

    if (tutorId) {
      fetchStudentDetails();
    }
  }, [tutorId]);

  const handleCourseChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tutor-me-finalyear.onrender.com/createCourse', {
        ...courseData,
        tutor: tutorId // Include tutorId in the course data
      });
      alert(response.data.message);
      setCourseData({
        branch: "",
        title: "",
        description: "",
        content: "",
        videoUrl: "",
        price: ""
      });
    } catch (err) {
      console.error('Error creating course', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{ color: "black" }}>Student Data for Tutor: {tutorName}</h2>
      <div className="card">
        <div className="card-header">
          <h5>Total Earnings: Rs{totalEarnings}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {Array.isArray(studentData) ? (
            studentData.map((student) => (
              <li className="list-group-item" key={student._id}>
                <strong>Order Id:</strong> {student._id}<br />
                <strong>Course Id:</strong>{student.course}<br />
                <strong>Student Id:</strong> {student.student}<br />
                <strong>Amount:</strong>{student.amount}<br />
                <strong>Payment Method:</strong> {student.paymentOption}
              </li>
            ))
          ) : (
            <li className="list-group-item">Loading student data...</li>
          )}
        </ul>
      </div>

      <div className="mt-5">
        <h3>Create a New Course</h3>
        <form onSubmit={handleCourseSubmit}>
          <div className="form-group">
            <label>Branch</label>
            <input
              type="text"
              className="form-control"
              name="branch"
              value={courseData.branch}
              onChange={handleCourseChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={courseData.title}
              onChange={handleCourseChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              value={courseData.description}
              onChange={handleCourseChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              className="form-control"
              name="content"
              value={courseData.content}
              onChange={handleCourseChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Video URL</label>
            <input
              type="text"
              className="form-control"
              name="videoUrl"
              value={courseData.videoUrl}
              onChange={handleCourseChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={courseData.price}
              onChange={handleCourseChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning mt-3">Create Course</button>
        </form>
      </div>
    </div>
  );
}

export default Teacher;


