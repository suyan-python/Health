import About from "./components/About";
<<<<<<< HEAD
import Admindashboard from "./components/admindashboard/Admindashboard";
=======
>>>>>>> origin/main
import CareCenter from "./components/CareCenter";
import Landing from "./components/landing";
// import SignIp from "./components/log/SignIn";
import Navbar from "./components/Navbar";
import Doclogin from "./components/log/Doc-login";
import Adminlogin from "./components/log/Admin-login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
<<<<<<< HEAD
          <Route path="/dashboard" element={<Admindashboard />} />
=======
          <Route path="/signup" element={<SignIp />} />
>>>>>>> origin/main
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
          <Route path="/Doc-login" element={<Doclogin/>}/>
          <Route path="/Admin-login" element={<Adminlogin/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;