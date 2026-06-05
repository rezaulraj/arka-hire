import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/about/AboutPage";
import ClientPage from "./pages/cliend/ClientPage";
import WorkerSorcing from "./pages/worker-sorcing/WorkerSorcing";
import ScreeningProcess from "./pages/screening-process/ScreeningProcess";
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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
