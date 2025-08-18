import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Solutions from "./pages/Solutions/Solutions";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurWork from "./pages/OurWork/OurWork";
import ContactUs from "./pages/ContactUs/ContactUs";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
