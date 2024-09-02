import About from "./components/About";
import CareCenter from "./components/CareCenter";
import Landing from "./components/landing";
import SignIp from "./components/log/SignIn";
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
          <Route path="/signup" element={<SignIp />} />
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
