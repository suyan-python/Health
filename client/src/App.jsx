import Landing from "./components/landing";
import SignIp from "./components/log/SignIn";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignIp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
