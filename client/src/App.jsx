import About from "./components/About";
import Admindashboard from "./components/admindashboard/Admindashboard";
import CareCenter from "./components/CareCenter";
import Landing from "./components/landing";
// import SignIp from "./components/log/SignIn";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Admindashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;