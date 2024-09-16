
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// function StudentDetailsForm({ location }) {
//   const name=localStorage.getItem("name");
//   const [year, setYear] = useState('');
//   const [institution, setInstitution] = useState('');
//   const [paymentOption, setPaymentOption] = useState('');
//   const [tutorName, setTutorName] = useState('');
//   const currentLocation = useLocation();
//   const { subject} = useParams();
//   useEffect(() => {
//     if (currentLocation.state && currentLocation.state.tutorName) {
//       setTutorName(currentLocation.state.tutorName);
//     }
//     console.log("subject in student details",subject);
//   }, [currentLocation]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:8083/createSale', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         tutorId: tutorName,
//         name,
//         year,
//         institution,
//         paymentOption,
//         tutorName,
//       }),
//     });

//     const data = await response.json();
//     console.log(data);

//     if (response.ok) {
//       alert('Payment made successfully');
     
//     } else {
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 style={{ color: 'black' }}><strong>Enroll Under:</strong> {tutorName}</h2>
//       {/* Render tutor's name somewhere on the screen */}
      
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label" style={{ color: 'black' }}>Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
         
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="course" className="form-label" style={{ color: 'black' }}>course:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={subject}
         
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="year" className="form-label" style={{ color: 'black' }}>Currently Studying Year:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="year"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="institution" className="form-label" style={{ color: 'black' }}>Institution:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="institution"
//             value={institution}
//             onChange={(e) => setInstitution(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="paymentOption" className="form-label" style={{ color: 'black' }}>Payment Option (Rs 500):</label>
//           <select
//             className="form-select"
//             id="paymentOption"
//             value={paymentOption}
//             onChange={(e) => setPaymentOption(e.target.value)}
//             required
//           >
//             <option value="">Select a payment option</option>
//             <option value="credit-card">Credit Card</option>
//             <option value="debit-card">Debit Card</option>
//             <option value="gpay">Google Pay (GPay)</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-warning">Enroll</button>
//       </form>
//     </div>
//   );
// }

// export default StudentDetailsForm;

import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode

function StudentDetailsForm() {
  const [year, setYear] = useState('');
  const [institution, setInstitution] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [tutorId, setTutorId] = useState('');
  const currentLocation = useLocation();
  const { subject } = useParams();
  const [studentId, setStudentId] = useState('');
  const [courseId,setCourseId]=useState('');
  const [coursePrice,setCoursePrice]=useState('');
 const navigate=useNavigate();
  useEffect(() => {
    // Get student ID from token
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setStudentId(decodedToken.id); // Extract student ID from token
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }

    if (currentLocation.state && currentLocation.state.tutorId) {
      setTutorId(currentLocation.state.tutorId);
    }
    if (currentLocation.state && currentLocation.state.courseId) {
      setCourseId(currentLocation.state.courseId);
    }
    if (currentLocation.state && currentLocation.state.price) {
      setCoursePrice(currentLocation.state.price);
    }
    // console.log("this is studentId",studentId);
    // console.log("this is tutorId",tutorId);
    // console.log("this is courseId",courseId);
    // console.log("this is coursePrice",coursePrice);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8083/createSale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         
        student: studentId, // Use student ID from token
        teacher: tutorId,
        course:courseId,
        amount:coursePrice,
        year,
        institution,
        paymentOption,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert('Payment made successfully');
      navigate('/student');
    } else {
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 style={{ color: 'black' }}><strong>Enroll Under:</strong> {tutorId}</h2>
      
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ color: 'black' }}>Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={localStorage.getItem("name")} // Display name stored in localStorage
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label" style={{ color: 'black' }}>Course:</label>
          <input
            type="text"
            className="form-control"
            id="course"
            value={subject}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label" style={{ color: 'black' }}>Course ID:</label>
          <input
            type="text"
            className="form-control"
            id="course"
            value={courseId}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label" style={{ color: 'black' }}>Price:</label>
          <input
            type="text"
            className="form-control"
            id="course"
            value={coursePrice}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label" style={{ color: 'black' }}>Currently Studying Year:</label>
          <input
            type="text"
            className="form-control"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="institution" className="form-label" style={{ color: 'black' }}>Institution:</label>
          <input
            type="text"
            className="form-control"
            id="institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentOption" className="form-label" style={{ color: 'black' }}>Payment Option (Rs 500):</label>
          <select
            className="form-select"
            id="paymentOption"
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
            required
          >
            <option value="">Select a payment option</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="gpay">Google Pay (GPay)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-warning">Enroll</button>
      </form>
    </div>
  );
}

export default StudentDetailsForm;
