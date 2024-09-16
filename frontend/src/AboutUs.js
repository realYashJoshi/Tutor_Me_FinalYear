
// import React, { useState, useEffect } from 'react';
// import CountUp from 'react-countup';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChalkboardTeacher, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';

// function AboutUs() {
//   const [counting, setCounting] = useState(false);

//   useEffect(() => {
//     // Start counting animation when the component mounts
//     setCounting(true);
//   }, []);

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="hero bg-warning text-white text-center">
//         <img
//           src={`${process.env.PUBLIC_URL}/images/aboutHero.jpg`} // Update the path to your image
//           alt="About Us Hero"
//           className="img-fluid"
//         />
      
//       </section>

//       <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '60px',boxShadow:'1px 2px 9px #cccccc ',padding:"30px 20px"}}>
//         <p style={{ fontFamily: 'cursive', display: 'flex', justifyContent: 'space-around' }}>
//           <br></br>
//           <div style={{padding:"0px 10px"}}>
//           <FontAwesomeIcon icon={faGraduationCap} size="2x" /></div>
//           {counting ? <CountUp end={10000} duration={5} /> : '0'}+ Students
//         </p>

//         <p style={{ fontFamily: 'cursive', display: 'flex', justifyContent: 'space-around' }}>
//         <div style={{padding:"0px 10px"}}>
//           <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" /></div>
//           {counting ? <CountUp end={500} duration={4} /> : '0'}+ Teachers
//         </p>

//         <p style={{ fontFamily: 'cursive', display: 'flex', justifyContent: 'space-around' }}>
//         <div style={{padding:"0px 10px"}}>
//           <FontAwesomeIcon icon={faBook} size="2x" /></div>
//           {counting ? <CountUp end={3000} duration={5} /> : '0'}+ Courses
//         </p>
//       </div>
//       <section className="py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12" >
//               <h2 className="display-4" style={{ fontFamily: 'cursive' }}>
//                 Message from Founder
//               </h2>
//               {/* Replace 'YOUR_YOUTUBE_VIDEO_ID' with your actual YouTube video ID */}
//               <iframe
                
//                 width="100%"
//                 height="400"
//                 src="https://www.youtube.com/embed/zUOfQoGq6LU?si=5K-iyuth_vZmKq8G" 
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
      

//       <section className="py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6" style={{boxShadow:'1px 2px 9px #cccccc',padding:"30px 20px"}}>
//               <h2 className="display-4" style={{ fontFamily: 'cursive' }}>
//                 Our Mission
//               </h2>

//               <p style={{ fontFamily: 'cursive' }}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed magna quis libero rhoncus feugiat.
//                 In id arcu in justo pretium bibendum. Sed gravida tortor eu neque sagittis, non facilisis ex facilisis.
//                 Nulla facilisi. Praesent eu purus risus.
//               </p>
//             </div>
//             <div className="col-lg-6" style={{ fontFamily: 'cursive',boxShadow:'1px  2px 9px #cccccc',padding:"30px 20px"}} >
//               <h2 className="display-4" style={{ fontFamily: 'cursive' }}>
//                 Why Choose Us?
//               </h2>

//               <p>
//                 Integer tristique lectus ac urna facilisis, eu cursus neque dapibus. Suspendisse potenti. Maecenas sit
//                 amet varius ex, eget volutpat velit. Aenean nec quam a arcu aliquam interdum. Nulla facilisi. Praesent
//                 eu purus risus.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="footer" style={{ backgroundColor: '#ffcd39', color: 'black',fontFamily:'cursive' }}>
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-md-4">
//             <h4>Contact Us</h4>
//             <p>Email: contact@example.com</p>
//             <p>Phone: +1 (123) 456-7890</p>
//           </div>
//           <div className="col-md-4">
//             <h4>Send Us a Message</h4>
//             <form>
//               <div className="mb-3">
//                 <input type="text" className="form-control" placeholder="Name" />
//               </div>
//               <div className="mb-3">
//                 <input type="email" className="form-control" placeholder="Email" />
//               </div>
//               <div className="mb-3">
//                 <textarea className="form-control" rows="4" placeholder="Message"></textarea>
//               </div>
//               <button type="submit" className="btn btn-light">Submit</button>
//             </form>
//           </div>
//           <div className="col-md-4">
//             <h4>Stay Connected</h4>
//             <p>Follow us on social media for updates and news!</p>
           
//           </div>
//         </div>
//       </div>
//     </footer>
      
//     </div>
//   );
// }

// export default AboutUs;
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faGraduationCap, faBook, faMessage } from '@fortawesome/free-solid-svg-icons';



import { faInstagram,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'
import Navbar from './Navbar';

function AboutUs() {
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    // Start counting animation when the component mounts
    setCounting(true);
  }, []);
  const handleSubmit=()=>{
    alert("Message recieved,we will revert back to you soon,Thanks for connecting!!")
  }

  return (
    <div>
      {/* Hero Section */}
      
      <h1 style={{position:"absolute",transform:"translate(40%, 200%)",zIndex:"2",color:"white",border: "3px solid #f1f1f1",padding: "20px",backgroundColor: "rgba(0,0,0, 0.2)"
       }}>Want to know more about us?,Click below!!</h1>
      
      <section className="hero bg-warning text-white text-center">
       
        <img
          src={`${process.env.PUBLIC_URL}/images/aboutHero.jpg`} // Update the path to your image
          alt="About Us Hero"
          className="img-fluid"
          style={{width:"100vw",heigth:"100px"
          }}
          
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
    
              
            </div>
          </div>
        </div>
      </section>
      
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"10px",position:"absolute",transform:"translate(200%, -350%)"}}>
      <button className="btn btn-warning btn-lg" style={{ fontFamily: 'cursive' }} onClick={handleSubmit}>
                Book a free counseling session!!
              </button></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '60px',
          boxShadow: '1px 2px 9px #cccccc ',
          padding: '30px 20px',
        }}

      >
        
        <p style={{ fontFamily: 'cursive', display: 'flex', justifyContent: 'space-around' }}>
          <br></br>
          <div style={{ padding: '0px 10px' }}>
            <FontAwesomeIcon icon={faGraduationCap} size="2x" />
          </div>
          {counting ? <CountUp end={10000} duration={5} /> : '0'}+ Students
        </p>

        <p style={{ fontFamily: 'cursive', display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ padding: '0px 10px' }}>
            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />
          </div>
          {counting ? <CountUp end={500} duration={5} /> : '0'}+ Teachers
        </p>

        <p style={{ fontFamily: 'cursive', display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ padding: '0px 10px' }}>
            <FontAwesomeIcon icon={faBook} size="2x" />
          </div>
          {counting ? <CountUp end={300} duration={5} /> : '0'}+ Courses
        </p>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="display-4" style={{ fontFamily: 'cursive' }}>
                Message from Founder
              </h2>
              {/* Replace 'YOUR_YOUTUBE_VIDEO_ID' with your actual YouTube video ID */}
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/AvHnPnnA_9U?si=Q9f8YxfjaNVyOQMG" 
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ boxShadow: '1px 2px 9px #cccccc', padding: '30px 20px' }}>
              <h2 className="display-4" style={{ fontFamily: 'cursive' }}>
                Our Mission
              </h2>

              <p style={{ fontFamily: 'cursive' }}>
              At Tutor Me, our mission is to bridge the gap between eager students and experienced tutors,
               providing a platform that caters to both conventional and non-conventional subjects.
                We believe that every learner, whether exploring the intricacies of physics or unraveling the artistry of music,
                 deserves access to quality education. Our commitment is to facilitate meaningful learning experiences, 
                 nurturing curious minds and fostering a passion for knowledge.
              </p>
            </div>
            <div className="col-lg-6" style={{ fontFamily: 'cursive', boxShadow: '1px  2px 9px #cccccc', padding: '30px 20px' }}>
              <h2 className="display-4" style={{ fontFamily: 'cursive' }}>
                Why Choose Us?
              </h2>

              <p>
              <strong>Diverse Expertise:</strong> We bring together a diverse community of tutors, experts in conventional subjects like mathematics and science, as well as non-conventional areas like chess and music. Whatever your interest or learning goals, we have the perfect tutor for you.
<br></br>
<strong>Personalized Learning:</strong> We understand that each student is unique, with their own learning pace and style. Our platform offers personalized learning experiences, tailored to your needs, ensuring that you grasp concepts thoroughly.
<br></br>
<strong>Flexibility: </strong>Learning should fit seamlessly into your life. With Tutor Me, you can choose when, where, and how you learn. Whether you prefer in-person lessons or online sessions, our flexible options cater to your schedule.
<br></br>
<strong>Quality Assurance:</strong> We take pride in maintaining a high standard of teaching quality. All our tutors are carefully vetted, ensuring they have the expertise and passion needed to guide you on your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ backgroundColor: '#ffcd39', color: 'black',fontFamily:'cursive' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact Us <FontAwesomeIcon icon={faMessage} color="white"/> </h4>
            
            <p> Email: 20me02020@iitbbs.ac.in</p>
            <p>Phone: 7038636388</p>
          </div>
          <div className="col-md-4">
            <h4>Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          <div className="col-md-4">
            <h4>Stay Connected</h4>
            <p>Follow us on social media for updates and news!</p>
            <div style={{display:'flex',justifyContent:"space-evenly",position:"absolute"}}>
            <div style={{marginRight:"70px"}}>
              <a href="https://twitter.com/YASHNARENDRAJO1">
            <FontAwesomeIcon icon={faTwitter} color="white" size="2x"/></a> </div>
            <div style={{marginRight:"70px"}}><a href='https://www.instagram.com/yashjoshi8458/'>
            <FontAwesomeIcon icon={faInstagram} color="white" size="2x"/></a> </div>
            <div style={{marginRight:"10px"}}><a href='https://www.linkedin.com/in/yash-joshi-655a1b206/'>
            <FontAwesomeIcon icon={faLinkedin} color="white" size="2x"/> </a></div>
            </div>


           
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default AboutUs;
