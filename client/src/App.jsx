import About from "./components/About";
<<<<<<< HEAD
// <<<<<<< HEAD
import Admindashboard from "./components/admindashboard/Admindashboard";
// =======
// >>>>>>> origin/main
=======

import Admindashboard from "./components/admindashboard/Admindashboard";

>>>>>>> 0218faea73b45846adcc1ffd0b955a0f67ba110e
import CareCenter from "./components/CareCenter";
import Landing from "./components/landing";
import SignIn from "./components/log/SignIn";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Doclogin from "./components/log/Doc-login";
import Adminlogin from "./components/log/Admin-login";
import Signup from "./components/log/sign-up"; 
=======
>>>>>>> 0218faea73b45846adcc1ffd0b955a0f67ba110e
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./components/admindashboard/appoinment";

function App() {
  return (
    <>
      <Router>
   <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />

<<<<<<< HEAD
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
          <Route path="/Doc-login" element={<Doclogin/>}/>
          <Route path="/Admin-login" element={<Adminlogin/>}/>
          <Route path="/Sign-up" element={<Signup/>}/>
          {/* <Route path="/Admindash" element={<adminsignin/>} */}

  
          <Route path="/dashboard" element={<Admindashboard />} />

          <Route path="/signin" element={<SignIn />} />
    
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
          <Route path="/Doc-login" element={<Doclogin />} />
          <Route path="/Admin-login" element={<Adminlogin />} />

=======
          <Route path="/dashboard" element={<Admindashboard />} />

          <Route path="/signup" element={<SignIp />} />

          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
>>>>>>> 0218faea73b45846adcc1ffd0b955a0f67ba110e
        </Routes>
      </Router>
    </>
  );
}

export default App;
