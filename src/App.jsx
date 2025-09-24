import HomePage from "./HomePage";
import PrivacyPolicy from "./PrivatePolicy";
import TermsOfService from "./TermsOfService";
import HelpSupport from "./HelpSupport";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {

  return(
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/HelpSupport" element={<HelpSupport />} />
        </Routes>
      </HashRouter>
    </>
  );

}

export default App
