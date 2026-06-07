import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/about/AboutPage";
import ClientPage from "./pages/cliend/ClientPage";
import WorkerSorcing from "./pages/worker-sorcing/WorkerSorcing";
import ScreeningProcess from "./pages/screening-process/ScreeningProcess";
import SeamlessIntegration from "./pages/seamless-integration/SeamlessIntegration";
import EmploymentWelfare from "./pages/employee-welfare-support/EmploymentWelfare";
import RecruitmentProcess from "./pages/recruitment-process/RecruitmentProcess";
import ImmigrationAssistance from "./pages/immigration-assistance/ImmigrationAssistance";
import MediationEmployment from "./pages/mediation-in-employment/MediationEmployment";
import TemporaryRecruitment from "./pages/temporary-recruitment/TemporaryRecruitment";
import LegalAssurance from "./pages/legal-assurance/LegalAssurance";
import IndustriePage from "./pages/industries/IndustriePage";
import Contact from "./pages/contact/Contact";
import OpenJob from "./pages/open-job/OpenJob";
import AgencyPartner from "./pages/agency-partnerships/AgencyPartner";
import FaqsPage from "./pages/Faqs/FaqsPage";
import TermsPage from "./pages/teams/TermsPage";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route
              path="/our-approach/client-consultation"
              element={<ClientPage />}
            />
            <Route
              path="/our-approach/worker-sourcing"
              element={<WorkerSorcing />}
            />
            <Route
              path="/our-approach/screening-process"
              element={<ScreeningProcess />}
            />
            <Route
              path="/our-approach/seamless-integration"
              element={<SeamlessIntegration />}
            />
            <Route
              path="/our-approach/employee-welfare-support"
              element={<EmploymentWelfare />}
            />
            <Route
              path="/employers/recruitment-process"
              element={<RecruitmentProcess />}
            />
            <Route
              path="/employers/immigration-assistance"
              element={<ImmigrationAssistance />}
            />
            <Route
              path="/employers/mediation-in-employment"
              element={<MediationEmployment />}
            />
            <Route
              path="/employers/temporary-recruitment"
              element={<TemporaryRecruitment />}
            />
            <Route
              path="/employers/legal-assurance"
              element={<LegalAssurance />}
            />
            <Route
              path="/workers-and-agencies/open-job"
              element={<OpenJob />}
            />
            <Route
              path="/workers-and-agencies/agency-partnerships"
              element={<AgencyPartner />}
            />
            <Route path="/industries" element={<IndustriePage />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/frequently-asked-questions" element={<FaqsPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
