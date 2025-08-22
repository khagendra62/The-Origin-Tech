import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Solutions from "./pages/Solutions/Solutions";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurWork from "./pages/OurWork/OurWork";
import ContactUs from "./pages/ContactUs/ContactUs";
import NoPage from "./pages/NoPage/NoPage";
import FormPupup from "./components/Form/FormPopup/FormPopup";
import WebAppServiceListDetail from "./components/ServiceListDetail/WebAppServiceListDetail/WebAppServiceListDetail";
import DigitalMarketingServiceListDetail from "./components/ServiceListDetail/DigitalMarketingServiceListDetail/DigitalMarketingServiceListDetail";
import ContentMarketingServiceListDetail from "./components/ServiceListDetail/ContentMarketingServiceListDetail/ContentMarketingServiceListDetail";
import EcommerceSolutionServiceListDetail from "./components/ServiceListDetail/EcommerceSolutionServiceListDetail/EcommerceSolutionServiceListDetail";
import PPCServiceListDetail from "./components/ServiceListDetail/PPCServiceListDetail/PPCServiceListDetail";
import SEOServiceListDetail from "./components/ServiceListDetail/SEOServiceListDetail/SEOServiceListDetail";
import SocialMediaServiceListDetail from "./components/ServiceListDetail/SocialMediaServiceListDetail/SocialMediaServiceListDetail";

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
          <Route path="/formfilling" element={<FormPupup />} />
          <Route path="/*" element={<NoPage />} />
          <Route
            path="/services/WebAppServiceListDetail"
            element={<WebAppServiceListDetail />}
          />
          <Route
            path="/services/DigitalMarketingServiceListDetail"
            element={<DigitalMarketingServiceListDetail />}
          />
          <Route
            path="/services/WebAppServiceListDetail"
            element={<WebAppServiceListDetail />}
          />
          <Route
            path="/services/DigitalMarketingServiceListDetail"
            element={<DigitalMarketingServiceListDetail />}
          />
          <Route
            path="/services/WebAppServiceListDetail"
            element={<WebAppServiceListDetail />}
          />
          <Route
            path="/services/DigitalMarketingServiceListDetail"
            element={<DigitalMarketingServiceListDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
