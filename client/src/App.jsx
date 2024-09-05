import About from "./components/About";
import Admindashboard from "./components/admindashboard/Admindashboard";
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
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Admindashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
          <Route path="/Doc-login" element={<Doclogin />} />
          <Route path="/Admin-login" element={<Adminlogin />} />
   
          {/* <Route path="/appointment" element={<Appointment />} />
          <Route path="/users" element={<Users />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/cashapp" element={<CashApp />} />
          <Route path="/email" element={<Email />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
