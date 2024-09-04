import About from "./components/About";
// <<<<<<< HEAD
import Admindashboard from "./components/admindashboard/Admindashboard";
// =======
// >>>>>>> origin/main
import CareCenter from "./components/CareCenter";
import Landing from "./components/landing";
import SignIn from "./components/log/SignIn";
import Navbar from "./components/Navbar";
import Doclogin from "./components/log/Doc-login";
import Adminlogin from "./components/log/Admin-login";
import Signup from "./components/log/sign-up";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
   
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
          <Route path="/Doc-login" element={<Doclogin/>}/>
          <Route path="/Admin-login" element={<Adminlogin/>}/>
          <Route path="/Sign-up" element={<Signup/>}/>

  
          <Route path="/dashboard" element={<Admindashboard />} />

          <Route path="/signup" element={<SignIp />} />
    
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
          <Route path="/Doc-login" element={<Doclogin />} />
          <Route path="/Admin-login" element={<Adminlogin />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
