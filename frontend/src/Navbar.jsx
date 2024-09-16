// import React from 'react'
// import AboutUs from './AboutUs'
// import Student from './Student'
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// export default function Navbar() {
//     <Routes>
          
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/home" element={<Student />} />
          
//         </Routes>
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container" style={{ fontFamily: "cursive", fontWeight: "bold" }}>
//         <Link to="/" className="navbar-brand">
//           <img
//             src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
//             alt="Logo"
//             className="navbar-logo"
//           />
//           Tutor Me
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//               <Link to="/home" className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link">
//                 About Us
//               </Link>
//             </li>
            
              
            
            
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }
import React from 'react';
import AboutUs from './AboutUs';
import Student from './Student';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate hook

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
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Routes definition should be handled outside the Navbar component */}
      {/* It's generally better to keep Routes in a main App component */}
    </nav>
  );
}
